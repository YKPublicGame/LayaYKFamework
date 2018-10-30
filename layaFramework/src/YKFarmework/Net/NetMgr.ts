module YK
{
    export class NetMgr extends DispatchEventNode
    {
        public httpUrl: string = "http://39.107.84.87:9100/?"
        private static mInstance: NetMgr;
        private mTimeout = 10//默认十秒
        private mHeartTimeout = 10
        public static get Instance()
        {
            if (this.mInstance == null)new NetMgr()
            return this.mInstance
        }
        ip: string = 'ws://39.107.84.87:9023';
        /**
         *
         */
        constructor()
        {
            super();
            if(NetMgr.mInstance == null) NetMgr.mInstance = this
            TimeDelay.Instance.Add(1, 0, this.CheckSendTimeOut, this)
            this.socket = new Laya.Socket(null, null, Laya.Byte)
            this.socket.on(Laya.Event.OPEN, this, this.onopen);
            this.socket.on(Laya.Event.CLOSE, this, this.onclose);
            this.socket.on(Laya.Event.MESSAGE, this, this.onmessage);
            this.socket.on(Laya.Event.ERROR, this, this.onerror);
        }

        onDestroy()
        {
            TimeDelay.Instance.Remove(this.CheckSendTimeOut, this)
        }
        private CheckSendTimeOut()
        {
            if (this.mSendQueue.length > 0)
            {
                let array: Array<any> = new Array<any>()
                this.mSendQueue.forEach(element =>
                {
                    if (Date.now() - element.sendTime > this.mTimeout * 1000)
                    {
                        array.push(element)
                    }
                });

                array.forEach(element =>
                {
                    let index = this.mSendQueue.indexOf(element)
                    if (index != -1)
                    {
                        this.mSendQueue.splice(index, 1)
                    }
                    this.msgTimeOut(element.head)
                });
            }
        }

        public AddProto(pbName: string, protoNames: Array<string>): void
        {
            let roots = protobuf.roots["default"][pbName]
            for (let key in protoNames)
            {
                let protoName = protoNames[key]
                let _class = roots[protoName]
                ProtoMap.Add(protoName, _class)
            }
        }

        private socket: Laya.Socket = null
        public connect(wsurl = null)
        {
            wsurl = wsurl == null ? this.ip : wsurl
            if (this.socket.connected)
            {
                this.onopen(null)
            }
            else
            {
                this.socket.connectByUrl(wsurl)
            }
        }

        private lastActivityTime
        private heartbeatIntervalTimeId
        private checkHeartbeatTimeOutIntervalTimeId
        private onopen(ev: Event)
        {
            console.log("链接服务器成功")
            TimeDelay.Instance.Remove(this.sendHeartbeat, this)
            TimeDelay.Instance.Remove(this.checkHeartbeat, this)
            TimeDelay.Instance.Add(3, 0, this.sendHeartbeat, this)
            TimeDelay.Instance.Add(3, 0, this.checkHeartbeat, this)
            this.lastActivityTime = Date.now()
            this.DispatchEventByType(NetMgrEventDef.onopen);
        }

        public isConnect(): boolean
        {
            return this.socket != null && this.socket.connected
        }
        private disConnect(msgType, msg)
        {
            if (this.mSendQueue)
            {
                this.mSendQueue.splice(0, this.mSendQueue.length)
            }
            if (this.isConnect())
            {
                this.socket.close()
                this.socket.cleanSocket()
            }
            TimeDelay.Instance.Remove(this.sendHeartbeat, this)
            TimeDelay.Instance.Remove(this.checkHeartbeat, this)
            let data = { type: msgType, msg: msg }
            this.DispatchEventByType(NetMgrEventDef.disConnect, data)
        }

        private onerror(ev: Event)
        {
            console.log("与服务器连接失败")
            this.disConnect(NetMgrEventDef.onerror, "与服务器连接失败")
        }

        private onclose(ev: Event)
        {
            console.log("与服务器连接断开")
            this.disConnect(NetMgrEventDef.onclose, "与服务器连接断开")
        }

        private onmessage(data)
        {
            let head: PackBase
            //try 
            {
                head = ProtoMap.UnPackHead(data)
                if (head != null)
                {
                    this.lastActivityTime = Date.now()

                    if (head.cmd != 1)
                    {
                        this.distributeMsg(head)
                    }
                    else
                    {
                        //console.log("收到心跳包")
                    }
                }
                else
                {
                    console.error("协议解析失败")
                }
            } //catch (error) 
            // {
            //     console.error("协议解析失败")
            //     this.disConnect("onerror","解析消息失败")
            // }
        }

        private mMsgId = 0
        private get Msgid()
        {
            return this.mMsgId++;
        }

        private mSendQueue: Array<any> = new Array()
        private sendHeartbeat()
        {
            if (this.isConnect())
            {
                //console.log("发送一次心跳" + Date.now())
                this.Send(1)
            }
        }

        private checkHeartbeat()
        {
            if (Date.now() - this.lastActivityTime > 10 * 1000)
            {
                this.disConnect(NetMgrEventDef.HeartbeatTimeOut, "与服务器连接超时")
            }
        }

        private msgTimeOut(head: PackBase)
        {
            if (head.cmd == 1)
            {
                this.disConnect(NetMgrEventDef.HeartbeatTimeOut, "与服务器连接超时")
            }
            else
            {
                let ev = new ResponseMessageEvent(head.cmd.toString())
                head.errorcode = -1
                ev.SetData(head, null)

                console.error("消息返回超时id=" + head.cmd)
                this.DispatchEvent(ev)
            }
        }

        public SendGet(url, callback: Func)
        {
            url = this.httpUrl + url
            console.log(url)
            let flag = false;
            let request = new laya.net.HttpRequest()
            request.once(laya.events.Event.COMPLETE, this, (e: laya.events.Event) =>
            {
                let respone = request.data
                let data = null
                if (respone != null)
                {
                    data = JSON.parse(respone)
                }
                callback.Invoke(data);
            })
            request.once(laya.events.Event.ERROR, this, (e) =>
            {
                callback.Invoke(null);
            })
            request.send(url, null, "get");
        }

        public Send(id: number, data: any = null)
        {
            let head = new PackBase()
            head.cmd = id
            head.errorcode = 0
            head.msgid = this.Msgid
            let sendData =
                {
                    head: head,
                    sendTime: Date.now()
                }

            if (this.isConnect())
            {
                let buffer: ArrayBuffer = ProtoMap.Pack(head, data)
                if (id != 1) 
                {
                    console.log("发送消息给服务器》")
                    console.log(head)
                    console.log(data)
                    this.mSendQueue.push(sendData)
                }
                this.socket.send(buffer)
            }
            else
            {
                console.error("网络断开无法发送消息");
            }
        }

        private distributeMsg(head: PackBase)
        {
            let msg = ProtoMap.UnPack(head)
            console.log("收到服务返回的消息信息头：")
            console.log(head)
            if (head.errorcode != null && head.errorcode != 0)
            {
                console.warn("服务器返回错误码  消息id：" + head.cmd + "/errorcode=" + head.errorcode)
            }
            if (head == null || head.cmd == null)
            {
                console.warn("服务器返回无效的cmdid")
            }
            else
            {
                let index = this.mSendQueue.findIndex((obj, index, any) => 
                {
                    return obj.head.msgid == head.msgid && obj.head.cmd == head.cmd
                })
                if (index != -1)
                {
                    this.mSendQueue.splice(index, 1)
                }
                let ev = new ResponseMessageEvent(head.cmd.toString())
                ev.SetData(head, msg)
                this.DispatchEvent(ev)
            }
        }

    }
    export class NetMgrEventDef
    {
        public static disConnect: string = "disConnect";
        public static onerror: string = "onerror"
        public static onclose: string = "onclose"
        public static onopen: string = "onopen"
        public static HeartbeatTimeOut: string = "HeartbeatTimeOut"
    }

    export type HttpRespData =
        {
            msg: string,
            errorcode: number,
            data: any,
        }
        
}