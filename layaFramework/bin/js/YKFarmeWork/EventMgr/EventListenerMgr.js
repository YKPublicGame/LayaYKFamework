var YK;
(function (YK) {
    class EventListenerMgr {
        constructor(dis = null) {
            this.mOwner = null;
            this.mListener = new Array();
            this.mOwner = dis;
        }
        /**
         *
         * @param callback 回调
         * @param thisObj 作用对象
         * @param type 消息类型
         * @param _priority 优先级
         * @param _dispatchOnce 是否只派发一次
         */
        addListener(type, callback, thisObj, _priority = 0, _dispatchOnce = false) {
            if (this.mOwner.hasEventListener(type, callback, thisObj)) {
                console.warn("重复注册消息 消息id" + type);
            }
            else {
                let listener = EventListenerData.CreateEventListenerData(this.mOwner, callback, thisObj, type.toString(), _priority, _dispatchOnce);
                listener.AttachListener();
                this.mListener.push(listener);
            }
        }
        /**
         *
         * @param callback 回调
         * @param thisObj 作用对象
         * @param type 消息类型
         */
        removeListener(callback, thisObj, type) {
            if (this.mOwner.hasEventListener(type, callback, thisObj)) {
                let listener = null;
                let index = this.mListener.findIndex((value, index, array) => {
                    if (value.thisObj == thisObj && value.callback == callback) {
                        listener = value;
                        return true;
                    }
                    return false;
                });
                if (index != -1) {
                    listener.DetachListener();
                    this.mListener.splice(index, 1);
                }
            }
        }
        removeAllListener() {
            this.mListener.forEach(listener => {
                listener.DetachListener();
            });
            this.mListener.splice(0, this.mListener.length);
        }
    }
    YK.EventListenerMgr = EventListenerMgr;
    class InterchangeableEventListenerMgr {
        constructor(thisObj, defCallback = null) {
            this.otherEvents = new Array();
            this.networkEvnets = new EventListenerMgr(YK.NetMgr.Instance);
            this.sceneEvents = new EventListenerMgr(YK.SceneMgr.Instance);
            this.uiEvents = new EventListenerMgr(YK.UIMgr.Instance);
            this.modeEvents = new EventListenerMgr(YK.ModeMgr.Instance);
            this.mDefObj = thisObj;
            this.otherEvents = new Array();
            this.mDefCallback = new EventListenerData(YK.NetMgr.Instance, defCallback, thisObj, null);
            this.mNetCallback = new EventListenerData(YK.NetMgr.Instance, defCallback, thisObj, null);
            this.mModeCallback = new EventListenerData(YK.NetMgr.Instance, defCallback, thisObj, null);
            this.mSceneCallback = new EventListenerData(YK.NetMgr.Instance, defCallback, thisObj, null);
            this.mUICallback = new EventListenerData(YK.NetMgr.Instance, defCallback, thisObj, null);
        }
        setDegCallback(callback, priority = 0) {
            this.mDefCallback.callback = callback;
            this.mDefCallback.priority = priority;
            return this;
        }
        setNetCallback(callback, priority = 0) {
            this.mNetCallback.callback = callback;
            this.mNetCallback.priority = priority;
            return this;
        }
        setModeCallback(callback, priority = 0) {
            this.mModeCallback.callback = callback;
            this.mModeCallback.priority = priority;
            return this;
        }
        setSceneCallback(callback, priority = 0) {
            this.mSceneCallback.callback = callback;
            this.mSceneCallback.priority = priority;
            return this;
        }
        setUICallback(callback, priority = 0) {
            this.mUICallback.callback = callback;
            this.mSceneCallback.priority = priority;
            return this;
        }
        addListener(dis, type, callback = null, thisObj = null, _priority = 0, _dispatchOnce = false) {
            if (dis == YK.NetMgr.Instance)
                this.addNetEvent(type, callback, thisObj);
            else if (dis == YK.SceneMgr.Instance)
                this.addSceneEvent(type, callback, thisObj);
            else if (dis == YK.UIMgr.Instance)
                this.addUIEvent(type, callback, thisObj);
            else if (dis == YK.ModeMgr.Instance)
                this.addModeEvent(type, callback, thisObj);
            else {
                if (callback == null)
                    callback = this.mDefCallback.callback;
                if (thisObj == null)
                    thisObj = this.mDefCallback.thisObj;
                if (_priority == 0)
                    _priority = this.mDefCallback.priority;
                let x = this.otherEvents.findIndex((value, index, obj) => {
                    if (value.dis == dis && type == value.type
                        && callback != value.callback
                        && thisObj == value.thisObj) {
                        x = index;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                if (x != -1) {
                    let data = EventListenerData.CreateEventListenerData(dis, callback, this, type.toString(), _priority, _dispatchOnce);
                    data.AttachListener();
                    this.otherEvents.push(data);
                }
            }
        }
        removeListener(dis, type, callback = null, thisObj = null) {
            if (dis == YK.NetMgr.Instance)
                this.removeNetEvent(type, callback, thisObj);
            else if (dis == YK.SceneMgr.Instance)
                this.removeSceneEvent(type, callback, thisObj);
            else if (dis == YK.UIMgr.Instance)
                this.removeUIEvent(type, callback, thisObj);
            else if (dis == YK.ModeMgr.Instance)
                this.removeModeEvent(type, callback, thisObj);
            else {
                if (callback == null)
                    callback = this.mDefCallback.callback;
                if (thisObj == null)
                    thisObj = this.mDefCallback.callback;
                let x = this.otherEvents.findIndex((value, index, obj) => {
                    if (value.dis == dis && type == value.type
                        && callback != value.callback
                        && thisObj == value.thisObj) {
                        x = index;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                if (x != -1) {
                    this.otherEvents[x].DetachListener();
                    this.otherEvents.splice(x, 1);
                }
            }
        }
        addNetEvent(type, callback = null, thisObj = null, _priority = 0, _dispatchOnce = false) {
            if (callback == null) {
                callback = this.mNetCallback.callback;
                thisObj = this.mNetCallback.thisObj;
            }
            if (_priority == 0) {
                _priority = this.mNetCallback.priority;
            }
            this.networkEvnets.addListener(type, callback, thisObj, _priority, _dispatchOnce);
        }
        removeNetEvent(type, callback = null, thisObj = null) {
            if (callback == null) {
                callback = this.mNetCallback.callback;
                thisObj = this.mDefCallback.thisObj;
            }
            this.networkEvnets.removeListener(callback, thisObj, type);
        }
        addUIEvent(type, callback = null, thisObj = null, _priority = 0, _dispatchOnce = false) {
            if (callback == null) {
                callback = this.mUICallback.callback;
                thisObj = this.mUICallback.thisObj;
            }
            if (_priority == 0) {
                _priority = this.mUICallback.priority;
            }
            this.uiEvents.addListener(type, callback, thisObj, _priority, _dispatchOnce);
        }
        removeUIEvent(type, callback = null, thisObj = null) {
            if (callback == null) {
                callback = this.mUICallback.callback;
                thisObj = this.mUICallback.thisObj;
            }
            this.uiEvents.removeListener(callback, thisObj, type);
        }
        addSceneEvent(type, callback = null, thisObj = null, _priority = 0, _dispatchOnce = false) {
            if (callback == null) {
                callback = this.mSceneCallback.callback;
                thisObj = this.mSceneCallback.thisObj;
            }
            if (_priority == 0) {
                _priority = this.mUICallback.priority;
            }
            this.sceneEvents.addListener(type, callback, thisObj, _priority, _dispatchOnce);
        }
        removeSceneEvent(type, callback = null, thisObj = null) {
            if (callback == null) {
                callback = this.mSceneCallback.callback;
                thisObj = this.mSceneCallback.thisObj;
            }
            this.sceneEvents.removeListener(callback, thisObj, type);
        }
        addModeEvent(type, callback = null, thisObj = null, _priority = 0, _dispatchOnce = false) {
            if (callback == null) {
                callback = this.mModeCallback.callback;
                thisObj = this.mModeCallback.thisObj;
            }
            this.modeEvents.addListener(type, callback, thisObj);
        }
        removeModeEvent(type, callback = null, thisObj = null) {
            if (callback == null) {
                callback = this.mModeCallback.callback;
                thisObj = this.mModeCallback.thisObj;
            }
            this.modeEvents.removeListener(callback, thisObj, type);
        }
        RemoveAll() {
            if (this.networkEvnets != null)
                this.networkEvnets.removeAllListener();
            if (this.sceneEvents != null)
                this.sceneEvents.removeAllListener();
            if (this.uiEvents != null)
                this.uiEvents.removeAllListener();
            if (this.modeEvents != null)
                this.modeEvents.removeAllListener();
            this.otherEvents.forEach(element => {
                element.DetachListener();
            });
            this.otherEvents.splice(0, this.otherEvents.length);
        }
    }
    YK.InterchangeableEventListenerMgr = InterchangeableEventListenerMgr;
    class EventListenerData {
        constructor(dis, callback, thisObj, type, _priority = 0, _dispatchOnce = false) {
            this.dispatchOnce = false;
            this.dis = dis;
            this.thisObj = thisObj;
            this.type = type;
            this.callback = callback;
            this.priority = _priority;
            this.dispatchOnce = _dispatchOnce;
            // this.AttachListener()
        }
        static CreateEventListenerData(dis, callback, thisObj, type, _priority = 0, _dispatchOnce = false) {
            let listener = null;
            if (this.mEventListenerData.length > 0) {
                listener = this.mEventListenerData.pop();
                listener.dis = dis;
                listener.callback = callback;
                listener.thisObj = thisObj;
                listener.type = type;
                listener;
            }
            else {
                listener = new EventListenerData(dis, callback, thisObj, type, _priority, _dispatchOnce);
            }
            return listener;
        }
        static ReturnEventListenerData(listener) {
            if (listener) {
                listener.dis.removeEventListener(listener.type, listener.callback, listener.thisObj);
                listener.dis = null;
                listener.callback = null;
                listener.thisObj = null;
                listener.type = null;
                this.mEventListenerData.push(listener);
            }
        }
        AttachListener() {
            if (this.dis.hasEventListener(this.type, this.callback, this.thisObj)) {
                this.DetachListener();
                return false;
            }
            this.dis.addEventListener(this.type, this.callback, this.thisObj, this.priority, this.dispatchOnce);
            return true;
        }
        DetachListener() {
            EventListenerData.ReturnEventListenerData(this);
        }
    }
    EventListenerData.mEventListenerData = new Array();
    YK.EventListenerData = EventListenerData;
})(YK || (YK = {}));
//# sourceMappingURL=EventListenerMgr.js.map