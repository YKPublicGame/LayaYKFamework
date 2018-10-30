class WaitWind extends fairygui.GComponent {
    constructor() {
        super();
    }
    constructFromXML(xml) {
        super.constructFromXML(xml);
        this.displayObject.on(Laya.Event.DISPLAY, this, this.__onShown);
        this.displayObject.on(Laya.Event.UNDISPLAY, this, this.__onHidden);
        this.lablMsg = this.getChild("lablMsg").asTextField;
        this.lablMsg = this.getChild("lablMsg").asTextField;
        this.state = this.getController("c1");
    }
    set text(value) {
        if (value != null) {
            this.lablMsg.text = value;
        }
        else {
            this.lablMsg.text = "";
        }
    }
    __onShown() {
        YK.TimeDelay.Instance.Remove(this.ShownLoadingRing, this);
        YK.TimeDelay.Instance.Remove(this.TimeOut, this);
        YK.TimeDelay.Instance.Add(1, 1, this.ShownLoadingRing, this);
        YK.TimeDelay.Instance.Add(10, 1, this.TimeOut, this);
        this.state.selectedIndex = 1;
    }
    __onHidden() {
        YK.TimeDelay.Instance.Remove(this.ShownLoadingRing, this);
        YK.TimeDelay.Instance.Remove(this.TimeOut, this);
    }
    ShownLoadingRing() {
        this.state.selectedIndex = 0;
    }
    /**
     * 十秒自动关闭
     */
    TimeOut() {
        fairygui.GRoot.inst.closeModalWait();
    }
}
//# sourceMappingURL=WaitWind.js.map