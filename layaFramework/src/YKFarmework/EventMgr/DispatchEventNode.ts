module YK
{
    export class DispatchEventNode 
    {
        private eventDataPools: Array<EventData> = new Array<EventData>();

        private createEventData(cmd, data)
        {
            let ev: EventData
            if (this.eventDataPools.length > 0)
            {
                ev = this.eventDataPools.pop()
                ev.cmd = cmd
                ev.data = data
                ev.isSotp = false
            }
            else
            {
                ev = new EventData(cmd, data)
            }
            return ev
        }

        private returnEventData(ev: EventData)
        {
            ev.data = null
            ev.cmd = null
            ev.isSotp = false
            this.eventDataPools.push(ev)
        }
        private eventDic: EventListenerClassDic =
        {

        }

        /**
         * 添加一个消息监听器
         * @param type 消息类型
         * @param callBack 回调函数
         * @param target 作用对象
         * @param priority 消息的优先级
         * @param once 是否只监听一次
         */
        public addEventListener(type: string | number, callBack: EventCallbackListener, target: any, priority: number = 0, once: boolean = false)
        {
            type = type.toString()
            let info: EventListenerInfoData = {
                callBack: callBack,
                target: target,
                priority: priority,
                once: once
            }

            let array = this.eventDic[type]
            let has = false
            let pos = 0
            if (array != null)
            {
                array.forEach(element =>
                {
                    if (element.target == target && element.callBack == callBack)
                    {
                        has = true
                    }
                    if (element.priority > info.priority)
                    {
                        pos++
                    }
                });
            }
            else
            {
                array = new Array<EventListenerInfoData>()
                this.eventDic[type] = array
            }
            if (has)
            {
                console.error("重复注册消息：type=" + type)
            }
            else
            {
                array.splice(pos, 0, info)
            }
        }

        /**
         * 移除一个消息监听器
         * @param type 消息id
         * @param callBack 回调函数
         * @param target 作用的对象
         */
        public removeEventListener(type: string | number, callBack: EventCallbackListener, target: any)
        {
            type = type.toString()
            let info: EventListenerInfoData = null
            let array = this.eventDic[type]
            if (array != null)
            {
                let infoIndex = -1
                array.every((value: EventListenerInfoData, index: number, array: EventListenerInfoData[]) =>
                {
                    if (value.target == target && value.callBack == callBack)
                    {
                        infoIndex = index
                        info = value
                        return false
                    }
                    return true
                })

                if (infoIndex != -1)
                {
                    array.splice(infoIndex, 1)
                }
            }
        }

        /**
         * 是否存在这个监听消息
         * @param type 消息类型
         * @param callBack 回调类型
         * @param target 回调对象
         */
        public hasEventListener(type: string | number, callBack: EventCallbackListener, target: any)
        {
            let flag = false
            let array = this.eventDic[type]
            if (array)
            {
                let index = array.findIndex((obj, index, any) => 
                {
                    return obj.target == target && obj.callBack == callBack
                })
                flag = index != -1
            }
            return flag
        }

        /**
         * 派发消息
         * @param ev 派发的消息内容
         */
        public DispatchEvent(ev: EventData)
        {
            this._DispatchEvent(ev)
        }

        /**
         * 派发消息
         * @param type 消息id
         * @param data 消息内容
         */
        public DispatchEventByType(type: string | number, data: any = null)
        {
            let ev = this.createEventData(type, data)
            this._DispatchEvent(ev)
            if (ev != null)
            {
                this.returnEventData(ev)
            }
        }

        private _DispatchEvent(ev: EventData)
        {
            let array = this.eventDic[ev.cmd]
            if (array != null)
            {

                for (let i = 0; i < array.length; i++)
                {
                    let info = array[i]
                    if (info.callBack != null)
                    {
                        info.callBack.call(info.target, ev)
                    }
                    if (info.once)
                    {
                        array.splice(i--, 1)
                    }
                    if (ev.isSotp)
                    {
                        break;
                    }
                }
            }
        }
    }

    export type EventListenerInfoData =
        {
            callBack: EventCallbackListener,
            target: any,
            priority: number,
            once: boolean
        }

    export type EventListenerClassDic = {
        [key: string]: Array<EventListenerInfoData>
    }


    export type EventCallbackListener = ((ev: EventData) => void);

    export class EventData
    {
        constructor(cmd: string, obj: any)
        {
            this.cmd = cmd
            this.data = obj
            this.isSotp = false
        }
        public cmd: string
        public data: any
        public isSotp = false
        /**
         * Stop
         */
        public Stop()
        {
            this.isSotp = true
        }
    }

    export class Func
    {
        private mThisObj: any
        private mCallBack: Function

        public constructor(thisObj: any, callBack: Function)
        {
            this.mThisObj = thisObj
            this.mCallBack = callBack
        }

        public Invoke(...args: any[])
        {
            this.mCallBack.call(this.mThisObj, ...args)
        }
    }
}
