var YK;
(function (YK) {
    var Handler = Laya.Handler;
    class ResInfo {
        constructor() {
            this.isKeepMemory = false;
            this.isFGUIPack = false;
        }
        get fullUrl() {
            if (this.isFGUIPack) {
                return this.url.replace("." + fairygui.UIConfig.packageFileExtension, "");
            }
            return this.url;
        }
    }
    class LoadGruopInfo {
        constructor() {
            this.Progress = 0;
            this.needLoad = new Array();
        }
        add(url, type, isKeepMemory = false, isFGUIPack = false) {
            let index = this.needLoad.findIndex((value, index, obj) => {
                return value.url == url;
            });
            if (index == -1) {
                let info = new ResInfo();
                info.isKeepMemory = isKeepMemory;
                info.url = url;
                info.type = type;
                info.isFGUIPack = isFGUIPack;
                this.needLoad.push(info);
            }
            return this;
        }
        onCompletion(callback, thisObjs) {
            this.finish = new YK.Func(thisObjs, callback);
            return this;
        }
        onItemCompletion(callback, thisObjs) {
            this.loadItem = new YK.Func(thisObjs, callback);
            return this;
        }
        start() {
            ResMgr.Instance.LoadGroup(this);
        }
    }
    YK.LoadGruopInfo = LoadGruopInfo;
    class ResMgr extends YK.DispatchEventNode {
        constructor() {
            super();
            this.mOldRes = new Array();
            this.resDic = new Map();
            if (ResMgr.mInstance == null)
                ResMgr.mInstance = this;
        }
        static get Instance() {
            if (this.mInstance == null)
                new ResMgr();
            return this.mInstance;
        }
        GetRes(url) {
            return Laya.loader.getRes(url);
        }
        LoadGroup(loads) {
            let urls = new Array();
            loads.needLoad.forEach(element => {
                urls.push({ url: element.url, type: element.type });
            });
            Laya.loader.load(urls, Handler.create(this, (success) => {
                if (success) {
                    for (let index = 0; index < loads.needLoad.length; index++) {
                        let info = loads.needLoad[index];
                        if (info.isFGUIPack) {
                            fairygui.UIPackage.addPackage(info.fullUrl);
                        }
                        if (!this.resDic.has(info.url)) {
                            this.resDic.set(info.url, info);
                        }
                    }
                    if (loads.finish != null) {
                        loads.finish.Invoke();
                    }
                }
                else {
                    console.error("加载资源失败：");
                    console.log(urls);
                }
            }), Handler.create(this, (progress) => {
                loads.Progress = progress * 100;
                if (loads.loadItem != null) {
                    loads.loadItem.Invoke();
                }
            }));
        }
        /**
         * 释放资源
         * @param forced 是否强制释放所有
         */
        pop(forced = false) {
            if (forced) {
                this.mOldRes.splice(0, this.mOldRes.length);
                this.resDic.forEach((v, key) => {
                    this.mOldRes.push(key);
                });
            }
            while (this.mOldRes.length > 0) {
                let url = this.mOldRes.pop();
                let info = this.resDic.get(url);
                if (info != null) {
                    if (info.isFGUIPack)
                        fairygui.UIPackage.removePackage(info.fullUrl);
                    this.resDic.delete(info.url);
                }
                Laya.loader.clearRes(url, false);
            }
            if (forced) {
                this.resDic.clear();
            }
            else {
            }
        }
        /**
         * 压入要释放的资源
         */
        push() {
            this.resDic.forEach((v, key) => {
                if (!v.isKeepMemory)
                    this.mOldRes.push(key);
            });
        }
    }
    ResMgr.mInstance = null;
    YK.ResMgr = ResMgr;
})(YK || (YK = {}));
//# sourceMappingURL=ResMgr.js.map