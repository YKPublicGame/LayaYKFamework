module YK
{
    export class TimeDelay
    {
        constructor()
        {
            Laya.timer.frameLoop(0.01, this, this.update)
        }
        /**
         * 当前事件执行的次数
         */
        public repeat: number = 0
        private items: Array<TimeDelayData> = new Array<TimeDelayData>()
        private toAdd: Array<TimeDelayData> = new Array<TimeDelayData>()
        private toRemove: Array<TimeDelayData> = new Array<TimeDelayData>()
        private pool: Array<TimeDelayData> = new Array<TimeDelayData>()

        private static mInstance: TimeDelay = null
        public static get Instance()
        {
            if (this.mInstance == null)
            {
                this.mInstance = new TimeDelay()
            }
            return this.mInstance
        }

        private GetFromPool(): TimeDelayData
        {
            let t: TimeDelayData;
            if (this.pool.length > 0)
            {
                t = this.pool.pop()
            }
            else
                t = new TimeDelayData();
            return t;
        }

        private ReturnToPool(t: TimeDelayData)
        {
            t.set(0, 0, null, null, null)
            t.elapsed = 0
            t.deleted = false
            this.pool.push(t)
        }

        public Exists(callback: TimerCallback, thisObj: any)
        {
            let t = this.toAdd.find((value: TimeDelayData, index: number, obj: Array<TimeDelayData>) =>
            {
                return value.callback == callback && value.thisObj == thisObj
            })

            if (t != null)
            {
                return true
            }
            t = this.items.find((value: TimeDelayData, index: number, obj: Array<TimeDelayData>) =>
            {
                return value.callback == callback && value.thisObj == thisObj
            })
            if (t != null && !t.deleted)
            {
                return true
            }
            return false
        }

        public Add(interval: number, repeat: number, callback: TimerCallback, thisObj: any, callbackParam: any = null)
        {
            let t: TimeDelayData;
            t = this.items.find((value: TimeDelayData, index: number, obj: Array<TimeDelayData>) =>
            {
                return value.callback == callback && value.thisObj == thisObj
            })

            if (t == null)
            {
                t = this.toAdd.find((value: TimeDelayData, index: number, obj: Array<TimeDelayData>) =>
                {
                    return value.callback == callback && value.thisObj == thisObj
                })
            }

            if (t == null)
            {
                t = this.GetFromPool()
                this.toAdd.push(t);
            }

            t.set(interval, repeat, callback, thisObj, callbackParam)
            t.deleted = false
            t.elapsed = 0
        }

        public AddUpdate(callback: TimerCallback, thisObj: any, callbackParam: any = null)
        {
            this.Add(0.001, 0, callback, thisObj, callbackParam);
        }

        public Remove(callback: TimerCallback, thisObj: any)
        {
            let findindex = -1
            let t = this.toAdd.find((value: TimeDelayData, index: number, obj: Array<TimeDelayData>) =>
            {
                if (value.callback == callback && value.thisObj == thisObj)
                {
                    findindex = index
                    return true
                }
                else
                {
                    return false
                }
            })
            if (t != null)
            {
                this.toAdd.splice(findindex, 1)
                this.ReturnToPool(t)
            }

            t = this.items.find((value: TimeDelayData, index: number, obj: Array<TimeDelayData>) => { return value.callback == callback && value.thisObj == thisObj })
            if (t != null)
                t.deleted = true
        }

        private lastTime: number = 0
        private deltaTime: number = 0
        start()
        {
            this.lastTime = Laya.timer.currTimer;
        }

        update()
        {
            this.deltaTime = (Laya.timer.currTimer - this.lastTime) / 1000
            this.lastTime = Laya.timer.currTimer

            for (let index = 0; index < this.items.length; index++)
            {
                let t = this.items[index];
                if (t.deleted)
                {
                    this.toRemove.push(t)
                    continue;
                }

                t.elapsed += this.deltaTime
                if (t.elapsed < t.interval)
                {
                    continue
                }

                t.elapsed = 0;

                if (t.repeat > 0)
                {
                    t.repeat--
                    if (t.repeat == 0)
                    {
                        t.deleted = true
                        this.toRemove.push(t)
                    }
                }
                this.repeat = t.repeat
                if (t.callback != null)
                {
                    try
                    {
                        t.callback.call(t.thisObj, t.param)
                    } catch (error)
                    {
                        t.deleted = true
                    }
                }
            }
            let len = this.toRemove.length
            while (len)
            {
                let t = this.toRemove.pop()
                let index = this.items.indexOf(t)
                if (t.deleted && index != -1)
                {
                    this.items.splice(index, 1)
                    this.ReturnToPool(t)
                }
                len--
            }
            len = this.toAdd.length
            while (len)
            {
                let t = this.toAdd.pop()
                this.items.push(t)
                len--
            }
        }
    }

    export class TimeDelayData
    {
        public repeat: number
        public interval: number
        public param: any
        public callback: TimerCallback
        public thisObj: any
        public deleted: boolean
        public elapsed: number

        public set(interval: number, repeat: number, callback: TimerCallback, thisObj: any, param: any): void
        {
            this.interval = interval
            this.repeat = repeat
            this.callback = callback
            this.param = param
            this.thisObj = thisObj
        }
    }

    export type TimerCallback = (param: any) => void
}

