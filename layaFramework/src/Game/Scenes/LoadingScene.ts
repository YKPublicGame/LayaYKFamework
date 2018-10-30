
class LoadingScene extends YK.SceneBase
{
    private initNeedLoadTask: YK.LoadGruopInfo
    protected OnInit(param: any)
    {
        super.OnInit(param)
        this.needLoadRes.add("res/source/Loading_atlas_vckm32.jpg", Laya.Loader.IMAGE, true)
            .add("res/source/Loading_atlas0.png", Laya.Loader.IMAGE, true)
            .add("res/source/Loading.bin", Laya.Loader.BUFFER, true, true)

        this.initNeedLoadTask = new YK.LoadGruopInfo()

        this.initNeedLoadTask.add("res/external/BasePack_atlas0.png", Laya.Loader.IMAGE, true)
            .add("res/external/BasePack.bin", Laya.Loader.BUFFER, true, true)
            .onItemCompletion(this.loadItemCompletion, this)
            .onCompletion(this.loadGameResFinish, this)
    }


    private loadItemCompletion()
    {
        console.log(this.initNeedLoadTask.Progress)
        let ev = new LoadingProgressEvenet();
        ev.Progress = this.initNeedLoadTask.Progress
        YK.UIMgr.Instance.DispatchEvent(ev)
    }

    /**
     * 资源加载完成
     */
    private loadGameResFinish()
    {
        fairygui.UIObjectFactory.setPackageItemExtension(fairygui.UIConfig.globalModalWaiting,WaitWind)
        this.AddProto()
        netpack.ProtocolDef.Protocols.forEach(element =>
        {
            YK.ProtoMap.AddProto(element)
        });
    }

    private AddProto()
    {
        YK.NetMgr.Instance.AddProto("netpack", netpack.ProtocolDef.ProtocolNames)
        this.StartGame()
    }


    public StartGame()
    {
        let ev = new LoadingProgressEvenet();
        ev.Progress = 100
        YK.UIMgr.Instance.DispatchEvent(ev)
        SceneMgr.Instance.GoToScene(LoginScene)
    }

    protected OnEnter(param: any)
    {
        super.OnEnter(param)
        YK.UIMgr.Instance.ShowWind(LoadingWind)
        this.initNeedLoadTask.start()
    }

    protected OnHandler(ev: YK.EventData)
    {
        super.OnHandler(ev)
    }

    protected OnLeave()
    {
        super.OnLeave()
    }

    protected OnDestroy()
    {
        super.OnDestroy()
    }

    protected OnLoaded()
    {
        super.OnLoaded()
    }

    protected OnTaskFinished()
    {
        super.OnTaskFinished()
    }
}
