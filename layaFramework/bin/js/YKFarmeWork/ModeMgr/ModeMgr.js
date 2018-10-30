var YK;
(function (YK) {
    class ModeMgr extends YK.DispatchEventNode {
        constructor() {
            super();
            this.mModes = new Map();
            this.mIsLoginSendingFlag = false;
            if (ModeMgr.mInstance == null)
                ModeMgr.mInstance = this;
            YK.TimeDelay.Instance.AddUpdate(this.update, this);
        }
        static get Instance() {
            if (this.mInstance == null)
                new ModeMgr();
            return this.mInstance;
        }
        AddMode(type) {
            if (!this.mModes.has(type)) {
                this.mModes.set(type, new type());
            }
            return this.mModes.get(type);
        }
        GetMode(type) {
            if (this.mModes.has(type))
                return this.mModes.get(type);
            else
                return null;
        }
        InitData(param = null) {
            this.mIsLoginSendingFlag = false;
            this.mModes.forEach((value, key, map) => {
                value.initMsgRespOk = false;
                value.OnInitData(param);
            });
        }
        SendInitMsg() {
            this.mIsLoginSendingFlag = true;
            this.mModes.forEach((value, key, map) => {
                value.OnSendInitMsg();
            });
        }
        ClearData() {
            this.mModes.forEach((value, key, map) => {
                value.OnClear();
            });
        }
        onDestroy() {
            this.mModes.forEach((value, key, map) => {
                value.OnDestroy();
            });
            this.ClearData();
        }
        update(dt) {
            if (this.mIsLoginSendingFlag) {
                let isOk = true;
                this.mModes.forEach((value, key, map) => {
                    if (!value.initMsgRespOk) {
                        isOk = false;
                    }
                });
                if (isOk) {
                    this.DispatchEventByType(ModeMgr.EventType.SENDINITMSGOK);
                    this.mIsLoginSendingFlag = false;
                }
            }
        }
    }
    ModeMgr.EventType = {
        SENDINITMSGOK: "SENDINITMSGOK"
    };
    YK.ModeMgr = ModeMgr;
    class IMode {
        constructor() {
            this.initMsgRespOk = false;
            this.eventMgr = new YK.InterchangeableEventListenerMgr(this, this.OnHandler);
            this.eventMgr.setNetCallback(this.OnHandler, 99);
            this.eventMgr.setModeCallback(this.OnHandler, 99);
        }
        OnSendInitMsg() {
            this.initMsgRespOk = true;
        }
        /**
        * 处理消息
        * @param ev 参数
        */
        OnHandler(ev) {
        }
        OnDestroy() {
            this.eventMgr.RemoveAll();
        }
    }
    YK.IMode = IMode;
})(YK || (YK = {}));
//# sourceMappingURL=ModeMgr.js.map