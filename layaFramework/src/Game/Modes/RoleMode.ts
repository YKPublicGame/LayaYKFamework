
class RoleMode extends YK.IMode
{
    public accountInfo = { userid: 0, token: "" }
    public roleInfo: netpack.UserData
    public OnInitData(param: any): void
    {
        this.eventMgr.setNetCallback(this.OnNetEvenet, 99)
        this.eventMgr.addNetEvent(200);
    }
    public OnClear(): void
    {
    }

    public OnDestroy(): void
    {
        super.OnDestroy()
    }

    public OnNetEvenet(ev: YK.ResponseMessageEvent)
    {
        if (ev.Data.head.errorcode == 0)
        {
            if (ev.Data.head.cmd == 200)
            {
                this.OnLoginResp(ev.Data.msg)
            }
        }

    }

    public SendHttpLogin(account: string, pwd: string, callBack: YK.Func)
    {
        YK.NetMgr.Instance.SendGet("modeName=account&api=login&account=" + account + "&pwd=" + pwd, new YK.Func(this, (res: YK.HttpRespData) =>
        {
            if (res != null && res.errorcode == 0)
            {
                this.accountInfo.token = res.data.token
                this.accountInfo.userid = res.data.userid
            }
            if (callBack != null)
            {
                callBack.Invoke(res)
            }
        }));
    }

    /**
     * 发送登陆
     * @param userid 用户id
     * @param token 账号token
     */
    public SendLogin(): void
    {
        let sendData: netpack.loginReq = { token: this.accountInfo.token, roleid: this.accountInfo.userid }
        YK.NetMgr.Instance.Send(200, sendData)
    }

    /**
     * 登陆返回
     * @param loginResp 登陆的返回信息
     */
    public OnLoginResp(loginResp: netpack.loginResp)
    {
        this.roleInfo = loginResp.roleinfo as netpack.UserData
    }
}