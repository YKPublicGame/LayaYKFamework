var YK;
(function (YK) {
    class NetMgr extends YK.DispatchEventNode {
        /**
         *
         */
        constructor() {
            super();
            this.httpUrl = "http://39.107.84.87:9100/?";
            this.mTimeout = 10; //默认十秒
            this.mHeartTimeout = 10;
            this.ip = 'ws://39.107.84.87:9023';
            this.socket = null;
            this.mMsgId = 0;
            this.mSendQueue = new Array();
            if (NetMgr.mInstance == null)
                NetMgr.mInstance = this;
            YK.TimeDelay.Instance.Add(1, 0, this.CheckSendTimeOut, this);
            this.socket = new Laya.Socket(null, null, Laya.Byte);
            this.socket.on(Laya.Event.OPEN, this, this.onopen);
            this.socket.on(Laya.Event.CLOSE, this, this.onclose);
            this.socket.on(Laya.Event.MESSAGE, this, this.onmessage);
            this.socket.on(Laya.Event.ERROR, this, this.onerror);
        }
        static get Instance() {
            if (this.mInstance == null)
                new NetMgr();
            return this.mInstance;
        }
        onDestroy() {
            YK.TimeDelay.Instance.Remove(this.CheckSendTimeOut, this);
        }
        CheckSendTimeOut() {
            if (this.mSendQueue.length > 0) {
                let array = new Array();
                this.mSendQueue.forEach(element => {
                    if (Date.now() - element.sendTime > this.mTimeout * 1000) {
                        array.push(element);
                    }
                });
                array.forEach(element => {
                    let index = this.mSendQueue.indexOf(element);
                    if (index != -1) {
                        this.mSendQueue.splice(index, 1);
                    }
                    this.msgTimeOut(element.head);
                });
            }
        }
        AddProto(pbName, protoNames) {
            let roots = protobuf.roots["default"][pbName];
            for (let key in protoNames) {
                let protoName = protoNames[key];
                let _class = roots[protoName];
                YK.ProtoMap.Add(protoName, _class);
            }
        }
        connect(wsurl = null) {
            wsurl = wsurl == null ? this.ip : wsurl;
            if (this.socket.connected) {
                this.onopen(null);
            }
            else {
                this.socket.connectByUrl(wsurl);
            }
        }
        onopen(ev) {
            console.log("链接服务器成功");
            YK.TimeDelay.Instance.Remove(this.sendHeartbeat, this);
            YK.TimeDelay.Instance.Remove(this.checkHeartbeat, this);
            YK.TimeDelay.Instance.Add(3, 0, this.sendHeartbeat, this);
            YK.TimeDelay.Instance.Add(3, 0, this.checkHeartbeat, this);
            this.lastActivityTime = Date.now();
            this.DispatchEventByType(NetMgrEventDef.onopen);
        }
        isConnect() {
            return this.socket != null && this.socket.connected;
        }
        disConnect(msgType, msg) {
            if (this.mSendQueue) {
                this.mSendQueue.splice(0, this.mSendQueue.length);
            }
            if (this.isConnect()) {
                this.socket.close();
                this.socket.cleanSocket();
            }
            YK.TimeDelay.Instance.Remove(this.sendHeartbeat, this);
            YK.TimeDelay.Instance.Remove(this.checkHeartbeat, this);
            let data = { type: msgType, msg: msg };
            this.DispatchEventByType(NetMgrEventDef.disConnect, data);
        }
        onerror(ev) {
            console.log("与服务器连接失败");
            this.disConnect(NetMgrEventDef.onerror, "与服务器连接失败");
        }
        onclose(ev) {
            console.log("与服务器连接断开");
            this.disConnect(NetMgrEventDef.onclose, "与服务器连接断开");
        }
        onmessage(data) {
            let head;
            //try 
            {
                head = YK.ProtoMap.UnPackHead(data);
                if (head != null) {
                    this.lastActivityTime = Date.now();
                    if (head.cmd != 1) {
                        this.distributeMsg(head);
                    }
                    else {
                        //console.log("收到心跳包")
                    }
                }
                else {
                    console.error("协议解析失败");
                }
            } //catch (error) 
            // {
            //     console.error("协议解析失败")
            //     this.disConnect("onerror","解析消息失败")
            // }
        }
        get Msgid() {
            return this.mMsgId++;
        }
        sendHeartbeat() {
            if (this.isConnect()) {
                //console.log("发送一次心跳" + Date.now())
                this.Send(1);
            }
        }
        checkHeartbeat() {
            if (Date.now() - this.lastActivityTime > 10 * 1000) {
                this.disConnect(NetMgrEventDef.HeartbeatTimeOut, "与服务器连接超时");
            }
        }
        msgTimeOut(head) {
            if (head.cmd == 1) {
                this.disConnect(NetMgrEventDef.HeartbeatTimeOut, "与服务器连接超时");
            }
            else {
                let ev = new YK.ResponseMessageEvent(head.cmd.toString());
                head.errorcode = -1;
                ev.SetData(head, null);
                console.error("消息返回超时id=" + head.cmd);
                this.DispatchEvent(ev);
            }
        }
        SendGet(url, callback) {
            url = this.httpUrl + url;
            console.log(url);
            let flag = false;
            let request = new laya.net.HttpRequest();
            request.once(laya.events.Event.COMPLETE, this, (e) => {
                let respone = request.data;
                let data = null;
                if (respone != null) {
                    data = JSON.parse(respone);
                }
                callback.Invoke(data);
            });
            request.once(laya.events.Event.ERROR, this, (e) => {
                callback.Invoke(null);
            });
            request.send(url, null, "get");
        }
        Send(id, data = null) {
            let head = new YK.PackBase();
            head.cmd = id;
            head.errorcode = 0;
            head.msgid = this.Msgid;
            let sendData = {
                head: head,
                sendTime: Date.now()
            };
            if (this.isConnect()) {
                let buffer = YK.ProtoMap.Pack(head, data);
                if (id != 1) {
                    console.log("发送消息给服务器》");
                    console.log(head);
                    console.log(data);
                    this.mSendQueue.push(sendData);
                }
                this.socket.send(buffer);
            }
            else {
                console.error("网络断开无法发送消息");
            }
        }
        distributeMsg(head) {
            let msg = YK.ProtoMap.UnPack(head);
            console.log("收到服务返回的消息信息头：");
            console.log(head);
            if (head.errorcode != null && head.errorcode != 0) {
                console.warn("服务器返回错误码  消息id：" + head.cmd + "/errorcode=" + head.errorcode);
            }
            if (head == null || head.cmd == null) {
                console.warn("服务器返回无效的cmdid");
            }
            else {
                let index = this.mSendQueue.findIndex((obj, index, any) => {
                    return obj.head.msgid == head.msgid && obj.head.cmd == head.cmd;
                });
                if (index != -1) {
                    this.mSendQueue.splice(index, 1);
                }
                let ev = new YK.ResponseMessageEvent(head.cmd.toString());
                ev.SetData(head, msg);
                this.DispatchEvent(ev);
            }
        }
    }
    YK.NetMgr = NetMgr;
    class NetMgrEventDef {
    }
    NetMgrEventDef.disConnect = "disConnect";
    NetMgrEventDef.onerror = "onerror";
    NetMgrEventDef.onclose = "onclose";
    NetMgrEventDef.onopen = "onopen";
    NetMgrEventDef.HeartbeatTimeOut = "HeartbeatTimeOut";
    YK.NetMgrEventDef = NetMgrEventDef;
})(YK || (YK = {}));
//# sourceMappingURL=NetMgr.js.map