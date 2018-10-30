var YK;
(function (YK) {
    class DispatchEventNode {
        constructor() {
            this.eventDataPools = new Array();
            this.eventDic = {};
        }
        createEventData(cmd, data) {
            let ev;
            if (this.eventDataPools.length > 0) {
                ev = this.eventDataPools.pop();
                ev.cmd = cmd;
                ev.data = data;
                ev.isSotp = false;
            }
            else {
                ev = new EventData(cmd, data);
            }
            return ev;
        }
        returnEventData(ev) {
            ev.data = null;
            ev.cmd = null;
            ev.isSotp = false;
            this.eventDataPools.push(ev);
        }
        /**
         * 添加一个消息监听器
         * @param type 消息类型
         * @param callBack 回调函数
         * @param target 作用对象
         * @param priority 消息的优先级
         * @param once 是否只监听一次
         */
        addEventListener(type, callBack, target, priority = 0, once = false) {
            type = type.toString();
            let info = {
                callBack: callBack,
                target: target,
                priority: priority,
                once: once
            };
            let array = this.eventDic[type];
            let has = false;
            let pos = 0;
            if (array != null) {
                array.forEach(element => {
                    if (element.target == target && element.callBack == callBack) {
                        has = true;
                    }
                    if (element.priority > info.priority) {
                        pos++;
                    }
                });
            }
            else {
                array = new Array();
                this.eventDic[type] = array;
            }
            if (has) {
                console.error("重复注册消息：type=" + type);
            }
            else {
                array.splice(pos, 0, info);
            }
        }
        /**
         * 移除一个消息监听器
         * @param type 消息id
         * @param callBack 回调函数
         * @param target 作用的对象
         */
        removeEventListener(type, callBack, target) {
            type = type.toString();
            let info = null;
            let array = this.eventDic[type];
            if (array != null) {
                let infoIndex = -1;
                array.every((value, index, array) => {
                    if (value.target == target && value.callBack == callBack) {
                        infoIndex = index;
                        info = value;
                        return false;
                    }
                    return true;
                });
                if (infoIndex != -1) {
                    array.splice(infoIndex, 1);
                }
            }
        }
        /**
         * 是否存在这个监听消息
         * @param type 消息类型
         * @param callBack 回调类型
         * @param target 回调对象
         */
        hasEventListener(type, callBack, target) {
            let flag = false;
            let array = this.eventDic[type];
            if (array) {
                let index = array.findIndex((obj, index, any) => {
                    return obj.target == target && obj.callBack == callBack;
                });
                flag = index != -1;
            }
            return flag;
        }
        /**
         * 派发消息
         * @param ev 派发的消息内容
         */
        DispatchEvent(ev) {
            this._DispatchEvent(ev);
        }
        /**
         * 派发消息
         * @param type 消息id
         * @param data 消息内容
         */
        DispatchEventByType(type, data = null) {
            let ev = this.createEventData(type, data);
            this._DispatchEvent(ev);
            if (ev != null) {
                this.returnEventData(ev);
            }
        }
        _DispatchEvent(ev) {
            let array = this.eventDic[ev.cmd];
            if (array != null) {
                for (let i = 0; i < array.length; i++) {
                    let info = array[i];
                    if (info.callBack != null) {
                        info.callBack.call(info.target, ev);
                    }
                    if (info.once) {
                        array.splice(i--, 1);
                    }
                    if (ev.isSotp) {
                        break;
                    }
                }
            }
        }
    }
    YK.DispatchEventNode = DispatchEventNode;
    class EventData {
        constructor(cmd, obj) {
            this.isSotp = false;
            this.cmd = cmd;
            this.data = obj;
            this.isSotp = false;
        }
        /**
         * Stop
         */
        Stop() {
            this.isSotp = true;
        }
    }
    YK.EventData = EventData;
    class Func {
        constructor(thisObj, callBack) {
            this.mThisObj = thisObj;
            this.mCallBack = callBack;
        }
        Invoke(...args) {
            this.mCallBack.call(this.mThisObj, ...args);
        }
    }
    YK.Func = Func;
})(YK || (YK = {}));
//# sourceMappingURL=DispatchEventNode.js.map