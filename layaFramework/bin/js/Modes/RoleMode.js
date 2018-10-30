class RoleMode extends YK.IMode {
    constructor() {
        super(...arguments);
        this.accountInfo = { userid: 0, token: "" };
    }
    OnInitData(param) {
        this.eventMgr.setNetCallback(this.OnNetEvenet, 99);
        this.eventMgr.addNetEvent(200);
    }
    OnClear() {
    }
    OnDestroy() {
        super.OnDestroy();
    }
    OnNetEvenet(ev) {
        if (ev.Data.head.errorcode == 0) {
            if (ev.Data.head.cmd == 200) {
                this.OnLoginResp(ev.Data.msg);
            }
        }
    }
    SendHttpLogin(account, pwd, callBack) {
        YK.NetMgr.Instance.SendGet("modeName=account&api=login&account=" + account + "&pwd=" + pwd, new YK.Func(this, (res) => {
            if (res != null && res.errorcode == 0) {
                this.accountInfo.token = res.data.token;
                this.accountInfo.userid = res.data.userid;
            }
            if (callBack != null) {
                callBack.Invoke(res);
            }
        }));
    }
    /**
     * 发送登陆
     * @param userid 用户id
     * @param token 账号token
     */
    SendLogin() {
        let sendData = { token: this.accountInfo.token, roleid: this.accountInfo.userid };
        YK.NetMgr.Instance.Send(200, sendData);
    }
    /**
     * 登陆返回
     * @param loginResp 登陆的返回信息
     */
    OnLoginResp(loginResp) {
        this.roleInfo = loginResp.roleinfo;
    }
}
//# sourceMappingURL=RoleMode.js.map