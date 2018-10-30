class MainScene extends YK.SceneBase
{
    protected firstWind: any = MainWind
    protected OnInit(param: any)
    {
        super.OnInit(param)
        this.needLoadRes.add("res/external/MainPack_atlas0.png"
            , Laya.Loader.IMAGE, true)

        this.needLoadRes.add("res/external/MainPack.bin"
            , Laya.Loader.BUFFER, true, true)
    }

    protected OnEnter(param: any)
    {
        super.OnEnter(param)
    }

    protected OnHandler(ev: EventData)
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