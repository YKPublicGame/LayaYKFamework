var YK;
(function (YK) {
    class TimeDelay {
        constructor() {
            /**
             * 当前事件执行的次数
             */
            this.repeat = 0;
            this.items = new Array();
            this.toAdd = new Array();
            this.toRemove = new Array();
            this.pool = new Array();
            this.lastTime = 0;
            this.deltaTime = 0;
            Laya.timer.frameLoop(0.01, this, this.update);
        }
        static get Instance() {
            if (this.mInstance == null) {
                this.mInstance = new TimeDelay();
            }
            return this.mInstance;
        }
        GetFromPool() {
            let t;
            if (this.pool.length > 0) {
                t = this.pool.pop();
            }
            else
                t = new TimeDelayData();
            return t;
        }
        ReturnToPool(t) {
            t.set(0, 0, null, null, null);
            t.elapsed = 0;
            t.deleted = false;
            this.pool.push(t);
        }
        Exists(callback, thisObj) {
            let t = this.toAdd.find((value, index, obj) => {
                return value.callback == callback && value.thisObj == thisObj;
            });
            if (t != null) {
                return true;
            }
            t = this.items.find((value, index, obj) => {
                return value.callback == callback && value.thisObj == thisObj;
            });
            if (t != null && !t.deleted) {
                return true;
            }
            return false;
        }
        Add(interval, repeat, callback, thisObj, callbackParam = null) {
            let t;
            t = this.items.find((value, index, obj) => {
                return value.callback == callback && value.thisObj == thisObj;
            });
            if (t == null) {
                t = this.toAdd.find((value, index, obj) => {
                    return value.callback == callback && value.thisObj == thisObj;
                });
            }
            if (t == null) {
                t = this.GetFromPool();
                this.toAdd.push(t);
            }
            t.set(interval, repeat, callback, thisObj, callbackParam);
            t.deleted = false;
            t.elapsed = 0;
        }
        AddUpdate(callback, thisObj, callbackParam = null) {
            this.Add(0.001, 0, callback, thisObj, callbackParam);
        }
        Remove(callback, thisObj) {
            let findindex = -1;
            let t = this.toAdd.find((value, index, obj) => {
                if (value.callback == callback && value.thisObj == thisObj) {
                    findindex = index;
                    return true;
                }
                else {
                    return false;
                }
            });
            if (t != null) {
                this.toAdd.splice(findindex, 1);
                this.ReturnToPool(t);
            }
            t = this.items.find((value, index, obj) => { return value.callback == callback && value.thisObj == thisObj; });
            if (t != null)
                t.deleted = true;
        }
        start() {
            this.lastTime = Laya.timer.currTimer;
        }
        update() {
            this.deltaTime = (Laya.timer.currTimer - this.lastTime) / 1000;
            this.lastTime = Laya.timer.currTimer;
            for (let index = 0; index < this.items.length; index++) {
                let t = this.items[index];
                if (t.deleted) {
                    this.toRemove.push(t);
                    continue;
                }
                t.elapsed += this.deltaTime;
                if (t.elapsed < t.interval) {
                    continue;
                }
                t.elapsed = 0;
                if (t.repeat > 0) {
                    t.repeat--;
                    if (t.repeat == 0) {
                        t.deleted = true;
                        this.toRemove.push(t);
                    }
                }
                this.repeat = t.repeat;
                if (t.callback != null) {
                    try {
                        t.callback.call(t.thisObj, t.param);
                    }
                    catch (error) {
                        t.deleted = true;
                    }
                }
            }
            let len = this.toRemove.length;
            while (len) {
                let t = this.toRemove.pop();
                let index = this.items.indexOf(t);
                if (t.deleted && index != -1) {
                    this.items.splice(index, 1);
                    this.ReturnToPool(t);
                }
                len--;
            }
            len = this.toAdd.length;
            while (len) {
                let t = this.toAdd.pop();
                this.items.push(t);
                len--;
            }
        }
    }
    TimeDelay.mInstance = null;
    YK.TimeDelay = TimeDelay;
    class TimeDelayData {
        set(interval, repeat, callback, thisObj, param) {
            this.interval = interval;
            this.repeat = repeat;
            this.callback = callback;
            this.param = param;
            this.thisObj = thisObj;
        }
    }
    YK.TimeDelayData = TimeDelayData;
})(YK || (YK = {}));
//# sourceMappingURL=TimeDelay.js.map