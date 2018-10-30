
class WaitWind extends fairygui.GComponent
{
    private lablMsg: fairygui.GTextField
    private state: fairygui.Controller
    constructor()
    {
        super()


    }

    protected constructFromXML(xml: any): void
    {
        super.constructFromXML(xml);
        this.displayObject.on(Laya.Event.DISPLAY, this, this.__onShown);
        this.displayObject.on(Laya.Event.UNDISPLAY, this, this.__onHidden);
        this.lablMsg = this.getChild("lablMsg").asTextField
        this.lablMsg = this.getChild("lablMsg").asTextField

        this.state = this.getController("c1")


    }

    public set text(value: string)
    {
        if (value != null)
        {
            this.lablMsg.text = value
        }
        else
        {
            this.lablMsg.text = ""
        }
    }

    protected __onShown()
    {

        YK.TimeDelay.Instance.Remove(this.ShownLoadingRing, this)
        YK.TimeDelay.Instance.Remove(this.TimeOut, this)

        YK.TimeDelay.Instance.Add(1, 1, this.ShownLoadingRing, this)
        YK.TimeDelay.Instance.Add(10, 1, this.TimeOut, this)
        this.state.selectedIndex = 1
    }

    protected __onHidden()
    {
        YK.TimeDelay.Instance.Remove(this.ShownLoadingRing, this)
        YK.TimeDelay.Instance.Remove(this.TimeOut, this)
    }


    public ShownLoadingRing()
    {
        this.state.selectedIndex = 0
    }

    /**
     * 十秒自动关闭
     */
    public TimeOut()
    {
        fairygui.GRoot.inst.closeModalWait()
    }

}