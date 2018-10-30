class LoginWind extends YK.BaseUI {
    constructor() {
        super(...arguments);
        this.packName = "LoginPack";
        this.resName = "LoginWindow";
        this.modal = false;
        this.dontDel = true;
        this.btnNameStartsWith = "Btn";
        this.isNeedShowAnimation = false;
        this.isNeedHideAnimation = false;
    }
    OninitWind() {
        this.eventMgr.setNetCallback(this.OnNetMsg);
        this.mLabelAcc = this.UIObj.get("LabelAcc");
        this.mLabelPass = this.UIObj.get("LabelPass");
    }
    OnShowWind() {
        YK.UIMgr.Instance.HideWind(LoadingWind);
        this.eventMgr.addNetEvent(200);
        this.eventMgr.addNetEvent(YK.NetMgrEventDef.onopen);
        this.eventMgr.addNetEvent(YK.NetMgrEventDef.onerror);
        this.eventMgr.addModeEvent(ModeMgr.EventType.SENDINITMSGOK);
    }
    OnHideWind() {
    }
    OnBtnClick(ev) {
        super.OnBtnClick(ev);
        if (ev.name == "BtnLogin") {
            this.HttpLogin();
        }
    }
    HttpLogin() {
        if (this.mLabelAcc.text == "" || this.mLabelPass.text == "") {
            MessageBox.Create("请输入账号密码").Show();
        }
        else {
            YK.UIMgr.Instance.ShowModalWait();
            ModeMgr.Instance.GetMode(RoleMode).SendHttpLogin(this.mLabelAcc.text, this.mLabelPass.text, new YK.Func(this, (res) => {
                if (res != null) {
                    if (res.errorcode == 0) {
                        this.ConnectServer();
                    }
                    else {
                        YK.UIMgr.Instance.CloseModalWait();
                        MessageBox.Create(res.msg).Show();
                    }
                }
                else {
                    YK.UIMgr.Instance.CloseModalWait();
                    MessageBox.Create("登陆失败尝试重新登陆").Show();
                }
            }));
        }
    }
    ConnectServer() {
        YK.NetMgr.Instance.connect();
    }
    OnConnetServer() {
        ModeMgr.Instance.GetMode(RoleMode).SendLogin();
    }
    OnLogin(ev) {
        YK.UIMgr.Instance.CloseModalWait();
        if (ev.head.errorcode == 0) {
            YK.UIMgr.Instance.ShowModalWait();
            ModeMgr.Instance.SendInitMsg();
        }
        else {
            MessageBox.Create(ev.msg).Show();
        }
    }
    OnInitMsged() {
        console.error("开始游戏");
        YK.UIMgr.Instance.CloseModalWait();
        YK.SceneMgr.Instance.GoToScene(MainScene);
    }
    OnConnetServerError(error) {
        MessageBox.Create("链接服务器失败，尝试重连")
            .SetBtnConfirmCallBack(new YK.Func(this, () => {
            this.ConnectServer();
        }), "重试")
            .Show();
    }
    OnNetMsg(ev) {
        if (ev.cmd == YK.NetMgrEventDef.onopen) {
            this.OnConnetServer();
        }
        else if (ev.cmd == YK.NetMgrEventDef.onerror
            || ev.cmd == YK.NetMgrEventDef.onclose) {
            this.OnConnetServerError(ev.data);
        }
        else {
            if (ev.Data.head.cmd == 200) {
                this.OnLogin(ev.Data);
            }
        }
    }
    OnHandler(ev) {
        if (ev.cmd == ModeMgr.EventType.SENDINITMSGOK) {
            this.OnInitMsged();
        }
    }
}
//# sourceMappingURL=LoginWind.js.map