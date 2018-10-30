module YK
{
    export class EventListenerMgr
    {
        private mOwner = null
        public constructor(dis: DispatchEventNode = null)
        {
            this.mOwner = dis
        }

        private mListener: Array<EventListenerData> = new Array<EventListenerData>();
        /**
         * 
         * @param callback 回调
         * @param thisObj 作用对象
         * @param type 消息类型
         * @param _priority 优先级 
         * @param _dispatchOnce 是否只派发一次 
         */
        public addListener(type: string | number, callback: EventCallbackListener, thisObj: any, _priority: number = 0, _dispatchOnce: boolean = false)
        {
            if (this.mOwner.hasEventListener(type, callback, thisObj))
            {
                console.warn("重复注册消息 消息id" + type)
            }
            else
            {
                let listener = EventListenerData.CreateEventListenerData(this.mOwner, callback, thisObj, type.toString(), _priority, _dispatchOnce)
                listener.AttachListener()
                this.mListener.push(listener)
            }
        }

        /**
         * 
         * @param callback 回调
         * @param thisObj 作用对象
         * @param type 消息类型
         */
        public removeListener(callback: EventCallbackListener, thisObj: any, type: string | number)
        {
            if (this.mOwner.hasEventListener(type, callback, thisObj))
            {
                let listener: EventListenerData = null
                let index = this.mListener.findIndex((value, index, array) =>
                {
                    if (value.thisObj == thisObj && value.callback == callback)
                    {
                        listener = value
                        return true
                    }
                    return false
                })

                if (index != -1)
                {
                    listener.DetachListener()
                    this.mListener.splice(index, 1)
                }

            }
        }

        public removeAllListener()
        {
            this.mListener.forEach(listener =>
            {
                listener.DetachListener()
            });
            this.mListener.splice(0, this.mListener.length)
        }
    }


    export class InterchangeableEventListenerMgr
    {
        private networkEvnets: EventListenerMgr
        private sceneEvents: EventListenerMgr
        private uiEvents: EventListenerMgr
        private modeEvents: EventListenerMgr
        private otherEvents: Array<EventListenerData> = new Array<EventListenerData>()
        private mDefCallback: EventListenerData
        private mDefObj: any

        private mNetCallback: EventListenerData
        private mModeCallback: EventListenerData
        private mSceneCallback: EventListenerData
        private mUICallback: EventListenerData

        constructor(thisObj: any, defCallback: EventCallbackListener = null)
        {
            this.networkEvnets = new EventListenerMgr(NetMgr.Instance)
            this.sceneEvents = new EventListenerMgr(SceneMgr.Instance)
            this.uiEvents = new EventListenerMgr(UIMgr.Instance)
            this.modeEvents = new EventListenerMgr(ModeMgr.Instance)
            this.mDefObj = thisObj

            this.otherEvents = new Array<EventListenerData>()
            this.mDefCallback = new EventListenerData(NetMgr.Instance, defCallback, thisObj, null)


            this.mNetCallback = new EventListenerData(NetMgr.Instance, defCallback, thisObj, null)
            this.mModeCallback = new EventListenerData(NetMgr.Instance, defCallback, thisObj, null)
            this.mSceneCallback = new EventListenerData(NetMgr.Instance, defCallback, thisObj, null)
            this.mUICallback = new EventListenerData(NetMgr.Instance, defCallback, thisObj, null)
        }

        public setDegCallback(callback: EventCallbackListener, priority = 0)
        {
            this.mDefCallback.callback = callback
            this.mDefCallback.priority = priority
            return this
        }

        public setNetCallback(callback: EventCallbackListener, priority = 0)
        {
            this.mNetCallback.callback = callback
            this.mNetCallback.priority = priority
            return this
        }

        public setModeCallback(callback: EventCallbackListener, priority = 0)
        {
            this.mModeCallback.callback = callback
            this.mModeCallback.priority = priority
            return this
        }

        public setSceneCallback(callback: EventCallbackListener, priority = 0)
        {
            this.mSceneCallback.callback = callback
            this.mSceneCallback.priority = priority
            return this
        }

        public setUICallback(callback: EventCallbackListener, priority = 0)
        {
            this.mUICallback.callback = callback
            this.mSceneCallback.priority = priority
            return this
        }


        public addListener(dis: DispatchEventNode, type: string | number
            , callback: EventCallbackListener = null, thisObj: any = null, _priority: number = 0, _dispatchOnce: boolean = false)
        {
            if (dis == NetMgr.Instance) this.addNetEvent(type, callback, thisObj)
            else if (dis == SceneMgr.Instance) this.addSceneEvent(type, callback, thisObj)
            else if (dis == UIMgr.Instance) this.addUIEvent(type, callback, thisObj)
            else if (dis == ModeMgr.Instance) this.addModeEvent(type, callback, thisObj)
            else
            {

                if (callback == null) callback = this.mDefCallback.callback
                if (thisObj == null) thisObj = this.mDefCallback.thisObj
                if (_priority == 0) _priority = this.mDefCallback.priority

                let x = this.otherEvents.findIndex((value: EventListenerData, index: number, obj: Array<EventListenerData>) =>
                {
                    if (value.dis == dis && type == value.type
                        && callback != value.callback
                        && thisObj == value.thisObj)
                    {
                        x = index
                        return true
                    }
                    else
                    {
                        return false
                    }
                })

                if (x != -1)
                {
                    let data = EventListenerData.CreateEventListenerData(dis, callback, this, type.toString(), _priority, _dispatchOnce)
                    data.AttachListener()
                    this.otherEvents.push(data)
                }
            }
        }

        public removeListener(dis: DispatchEventNode, type: string | number
            , callback: EventCallbackListener = null, thisObj: any = null)
        {
            if (dis == NetMgr.Instance) this.removeNetEvent(type, callback, thisObj)
            else if (dis == SceneMgr.Instance) this.removeSceneEvent(type, callback, thisObj)
            else if (dis == UIMgr.Instance) this.removeUIEvent(type, callback, thisObj)
            else if (dis == ModeMgr.Instance) this.removeModeEvent(type, callback, thisObj)
            else
            {
                if (callback == null) callback = this.mDefCallback.callback
                if (thisObj == null) thisObj = this.mDefCallback.callback
                let x = this.otherEvents.findIndex((value: EventListenerData, index: number, obj: Array<EventListenerData>) =>
                {
                    if (value.dis == dis && type == value.type
                        && callback != value.callback
                        && thisObj == value.thisObj)
                    {
                        x = index
                        return true
                    }
                    else
                    {
                        return false
                    }
                })

                if (x != -1)
                {
                    this.otherEvents[x].DetachListener()
                    this.otherEvents.splice(x, 1)
                }
            }
        }

        public addNetEvent(type: string | number, callback: EventCallbackListener = null, thisObj: any = null,
            _priority: number = 0, _dispatchOnce: boolean = false)
        {
            if (callback == null)
            {
                callback = this.mNetCallback.callback
                thisObj = this.mNetCallback.thisObj
            }
            if (_priority == 0)
            {
                _priority = this.mNetCallback.priority
            }
            this.networkEvnets.addListener(type, callback, thisObj, _priority, _dispatchOnce)
        }

        public removeNetEvent(type: string | number
            , callback: EventCallbackListener = null, thisObj: any = null)
        {
            if (callback == null)
            {
                callback = this.mNetCallback.callback
                thisObj = this.mDefCallback.thisObj
            }
            this.networkEvnets.removeListener(callback, thisObj, type)
        }

        public addUIEvent(type: string | number, callback: EventCallbackListener = null, thisObj: any = null, _priority: number = 0, _dispatchOnce: boolean = false)
        {
            if (callback == null)
            {
                callback = this.mUICallback.callback
                thisObj = this.mUICallback.thisObj
            }
            if (_priority == 0)
            {
                _priority = this.mUICallback.priority
            }
            this.uiEvents.addListener(type, callback, thisObj, _priority, _dispatchOnce)
        }

        public removeUIEvent(type: string | number, callback: EventCallbackListener = null, thisObj: any = null)
        {
            if (callback == null)
            {
                callback = this.mUICallback.callback
                thisObj = this.mUICallback.thisObj
            }
            this.uiEvents.removeListener(callback, thisObj, type)
        }

        public addSceneEvent(type: string | number, callback: EventCallbackListener = null, thisObj: any = null, _priority: number = 0, _dispatchOnce: boolean = false)
        {
            if (callback == null)
            {
                callback = this.mSceneCallback.callback
                thisObj = this.mSceneCallback.thisObj
            }
            if (_priority == 0)
            {
                _priority = this.mUICallback.priority
            }
            this.sceneEvents.addListener(type, callback, thisObj, _priority, _dispatchOnce)
        }

        public removeSceneEvent(type: string | number, callback: EventCallbackListener = null, thisObj: any = null)
        {
            if (callback == null)
            {
                callback = this.mSceneCallback.callback
                thisObj = this.mSceneCallback.thisObj
            }
            this.sceneEvents.removeListener(callback, thisObj, type)
        }

        public addModeEvent(type: string | number, callback: EventCallbackListener = null, thisObj: any = null, _priority: number = 0, _dispatchOnce: boolean = false)
        {
            if (callback == null)
            {
                callback = this.mModeCallback.callback
                thisObj = this.mModeCallback.thisObj
            }
            this.modeEvents.addListener(type, callback, thisObj)
        }

        public removeModeEvent(type: string | number, callback: EventCallbackListener = null, thisObj: any = null)
        {
            if (callback == null)
            {
                callback = this.mModeCallback.callback
                thisObj = this.mModeCallback.thisObj
            }
            this.modeEvents.removeListener(callback, thisObj, type)
        }

        public RemoveAll()
        {
            if (this.networkEvnets != null)
                this.networkEvnets.removeAllListener()
            if (this.sceneEvents != null)
                this.sceneEvents.removeAllListener()
            if (this.uiEvents != null)
                this.uiEvents.removeAllListener()
            if (this.modeEvents != null)
                this.modeEvents.removeAllListener()
            this.otherEvents.forEach(element =>
            {
                element.DetachListener()
            });
            this.otherEvents.splice(0, this.otherEvents.length)
        }
    }

    export class EventListenerData
    {
        private static mEventListenerData: Array<EventListenerData> = new Array<EventListenerData>()
        public static CreateEventListenerData(dis: DispatchEventNode, callback: EventCallbackListener, thisObj: any, type: string,
            _priority: number = 0, _dispatchOnce: boolean = false)
        {
            let listener: EventListenerData = null
            if (this.mEventListenerData.length > 0)
            {
                listener = this.mEventListenerData.pop()
                listener.dis = dis
                listener.callback = callback
                listener.thisObj = thisObj
                listener.type = type
                listener
            }
            else
            {
                listener = new EventListenerData(dis, callback, thisObj, type, _priority, _dispatchOnce)
            }
            return listener
        }

        public static ReturnEventListenerData(listener: EventListenerData)
        {
            if (listener)
            {
                listener.dis.removeEventListener(listener.type, listener.callback, listener.thisObj)
                listener.dis = null
                listener.callback = null
                listener.thisObj = null
                listener.type = null
                this.mEventListenerData.push(listener)
            }
        }

        public dis: DispatchEventNode
        public callback: EventCallbackListener
        public thisObj: any
        public type: string
        public priority: number
        public dispatchOnce: boolean = false

        public constructor(dis: DispatchEventNode, callback: EventCallbackListener, thisObj: any, type: string
            , _priority: number = 0, _dispatchOnce: boolean = false)
        {
            this.dis = dis
            this.thisObj = thisObj
            this.type = type
            this.callback = callback
            this.priority = _priority
            this.dispatchOnce = _dispatchOnce
            // this.AttachListener()
        }

        public AttachListener(): boolean
        {
            if (this.dis.hasEventListener(this.type, this.callback, this.thisObj))
            {
                this.DetachListener()
                return false
            }
            this.dis.addEventListener(this.type, this.callback, this.thisObj, this.priority, this.dispatchOnce)
            return true
        }

        public DetachListener()
        {
            EventListenerData.ReturnEventListenerData(this)
        }
    }
}