class MessageBox extends YK.BaseUI
{
    public modal: boolean = true
    public dontDel: boolean = true
    protected packName = "BasePack"
    protected resName = "MessageBox"
    protected clickBbackgroundClose = false

    protected labelMsg: fairygui.GTextField

    private BtnOK: fairygui.GButton

    private BtnCancel: fairygui.GButton

    private BtnConfirm: fairygui.GButton

    private static mMessageBoxDataPools: Array<MessageBoxData> = new Array<MessageBoxData>()

    public static Create(content: string): MessageBoxData
    {
        if (this.mMessageBoxDataPools.length > 0)
        {
            let da = this.mMessageBoxDataPools.pop()
            da.SetContent(content)
            return da
        }
        return new MessageBoxData(content)
    }


    public dispose()
    {
        super.dispose()
        MessageBox.mMessageBoxDataPools.splice(0, MessageBox.mMessageBoxDataPools.length)
    }

    protected OnBtnClick(ev: fairygui.GButton)
    {
        super.OnBtnClick(ev)
        if (ev == this.BtnOK)
        {
            if (this.mData.BtnOkCallBack != null)
                this.mData.BtnOkCallBack.Invoke()
            this.OnBtnClose()
        }
        else if (ev == this.BtnCancel)
        {
            if (this.mData.BtnCancelCallBack != null)
                this.mData.BtnCancelCallBack.Invoke()
            this.OnBtnClose()
        }
        else if (ev == this.BtnConfirm)
        {
            if (this.mData.BtnBtnConfirmCallBack != null)
                this.mData.BtnBtnConfirmCallBack.Invoke()
            this.OnBtnClose()
        }
    }

    protected OninitWind()
    {
        this.BtnOK = this.UIObj.get("BtnOK")
        this.BtnCancel = this.UIObj.get("BtnCancel")
        this.BtnConfirm = this.UIObj.get("BtnConfirm")
        this.labelMsg = this.UIObj.get("labelMsg")
    }

    protected OnShowWind()
    {
        this.mData = this.data as MessageBoxData
        if (this.mData.type == MessageBoxType.None)
        {
        }
        else if (this.mData.type == MessageBoxType.ShowConfirm)
        {
            this.BtnConfirm.text = this.mData.labBtnConfirmStr
        }
        else
        {
            this.BtnOK.text = this.mData.labBtnOkStr
            this.BtnCancel.text = this.mData.labBtnCancelStr
        }

        this.UICtrls.get("stateCtrl").selectedIndex = this.mData.type
        this.labelMsg.text = this.mData.content
    }

    private mData: MessageBoxData = null
    protected OnHideWind()
    {

        if (this.mData != null)
        {
            this.mData.reset()
            MessageBox.mMessageBoxDataPools.push(this.mData)
            this.mData = null
        }
    }
}

enum MessageBoxType
{
    None,
    ShowConfirm,
    ShowOkAndCancel,
}
class MessageBoxData
{
    public constructor(content)
    {
        this.content = content
    }

    public get type(): MessageBoxType
    {
        let t = MessageBoxType.None;
        if (this.BtnBtnConfirmCallBack != null)
        {
            t = MessageBoxType.ShowConfirm
        }
        else if (this.BtnOkCallBack != null || this.BtnCancelCallBack != null)
        {
            t = MessageBoxType.ShowOkAndCancel
        }
        return t
    }

    public content: string = null

    public BtnOkCallBack: YK.Func = null
    public labBtnOkStr: string = null

    public BtnCancelCallBack: YK.Func = null
    public labBtnCancelStr: string = null

    public BtnBtnConfirmCallBack: YK.Func = null
    public labBtnConfirmStr: string = null

    public SetBtnOkAndCancelCallBack(okCallBack: YK.Func, okStr: string = "好的",
        cancelCallBack: YK.Func = null, cancelStr: string = "好的")
    {
        this.BtnOkCallBack = okCallBack
        this.labBtnOkStr = okStr
        this.BtnCancelCallBack = cancelCallBack
        this.labBtnCancelStr = cancelStr
        return this
    }

    public SetBtnConfirmCallBack(callBack: YK.Func, labStr: string = "确定")
    {
        this.BtnBtnConfirmCallBack = callBack
        this.labBtnConfirmStr = labStr

        this.BtnOkCallBack = null
        this.labBtnOkStr = null
        this.BtnCancelCallBack = null
        this.labBtnCancelStr = null
        return this
    }

    public SetContent(content: string)
    {
        this.content = content
    }

    public reset()
    {
        this.BtnOkCallBack = null
        this.labBtnOkStr = null
        this.BtnCancelCallBack = null
        this.labBtnCancelStr = null
        this.BtnBtnConfirmCallBack = null
        this.labBtnConfirmStr = null
        this.content = null
    }

    public Show()
    {
        YK.UIMgr.Instance.ShowWind(MessageBox, this)
    }
}