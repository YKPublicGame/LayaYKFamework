import SceneBase = YK.SceneBase
import EventData = YK.EventData

class LoginScene extends SceneBase
{
    protected firstWind: any = LoginWind
    protected OnInit(param: any)
    {
        super.OnInit(param)
        this.needLoadRes
        .add("res/external/LoginPack.bin", Laya.Loader.BUFFER, true, true)
        .add("res/external/BasePack.bin", Laya.Loader.BUFFER, true, true)
        .add("res/external/BasePack_atlas0.png", Laya.Loader.IMAGE, true)
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
