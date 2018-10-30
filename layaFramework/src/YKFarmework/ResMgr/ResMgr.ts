module YK
{
    import Handler = Laya.Handler;
    class ResInfo
    {
        public url: string;
        public type: string
        public isKeepMemory = false
        public isFGUIPack = false

        public get fullUrl()
        {
            if (this.isFGUIPack)
            {
                return this.url.replace("." + fairygui.UIConfig.packageFileExtension, "")
            }
            return this.url
        }
    }

    type resDicType = { [key: string]: ResInfo }
    export class LoadGruopInfo
    {
        public Progress: number = 0
        public needLoad: Array<ResInfo> = new Array<ResInfo>()
        public add(url: string, type: string, isKeepMemory = false, isFGUIPack = false)
        {
            let index = this.needLoad.findIndex((value: ResInfo, index: number, obj: Array<ResInfo>) =>
            {
                return value.url == url
            })
            if (index == -1)
            {
                let info = new ResInfo()
                info.isKeepMemory = isKeepMemory
                info.url = url
                info.type = type
                info.isFGUIPack = isFGUIPack
                this.needLoad.push(info)
            }
            return this
        }

        public onCompletion(callback: Function, thisObjs: any)
        {
            this.finish = new Func(thisObjs, callback)
            return this
        }

        public onItemCompletion(callback: Function, thisObjs: any)
        {
            this.loadItem = new Func(thisObjs, callback)
            return this
        }


        public start()
        {
            ResMgr.Instance.LoadGroup(this)
        }
        public loadItem: Func
        public finish: Func
    }

    export class ResMgr extends DispatchEventNode
    {
        constructor()
        {
            super()
            if(ResMgr.mInstance == null) ResMgr.mInstance = this
        }
        private mOldRes: Array<string> = new Array<string>()
        private resDic: Map<string, ResInfo> = new Map<string, ResInfo>()
        private static mInstance: ResMgr = null
        public static get Instance(): ResMgr
        {
            if (this.mInstance == null)new ResMgr()
            return this.mInstance
        }

        public GetRes(url)
        {
            return Laya.loader.getRes(url)
        }

        public LoadGroup(loads: LoadGruopInfo)
        {

            let urls: Array<any> = new Array<any>()
            loads.needLoad.forEach(element =>
            {
                urls.push({ url: element.url, type: element.type })
            });
            Laya.loader.load(urls, Handler.create(this, (success: boolean) =>
            {
                if (success)
                {
                    for (let index = 0; index < loads.needLoad.length; index++)
                    {
                        let info = loads.needLoad[index]
                        if (info.isFGUIPack)
                        {
                            fairygui.UIPackage.addPackage(info.fullUrl)
                        }
                        if (!this.resDic.has(info.url))
                        {
                            this.resDic.set(info.url, info)
                        }
                    }
                    if (loads.finish != null)
                    {
                        loads.finish.Invoke()
                    }
                }
                else
                {
                    console.error("加载资源失败：")
                    console.log(urls)
                }
            }), Handler.create(this, (progress: number) => 
            {
                loads.Progress = progress * 100
                if (loads.loadItem != null)
                {
                    loads.loadItem.Invoke()
                }
            }))
        }

        /**
         * 释放资源
         * @param forced 是否强制释放所有
         */
        public pop(forced = false)
        {
            if (forced)
            {
                this.mOldRes.splice(0, this.mOldRes.length)

                this.resDic.forEach((v: ResInfo, key: string) =>
                {
                    this.mOldRes.push(key)
                });
            }
            while (this.mOldRes.length > 0)
            {
                let url = this.mOldRes.pop()
                let info = this.resDic.get(url)
                if (info != null)
                {
                    if (info.isFGUIPack) fairygui.UIPackage.removePackage(info.fullUrl)
                    this.resDic.delete(info.url)
                }
                Laya.loader.clearRes(url, false)

            }

            if (forced)
            {
                this.resDic.clear()
            }
            else
            {

            }
        }

        /**
         * 压入要释放的资源
         */
        public push()
        {
            this.resDic.forEach((v: ResInfo, key: string) =>
            {
                if (!v.isKeepMemory)
                    this.mOldRes.push(key)
            });
        }
    }
}