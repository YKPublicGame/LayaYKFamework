class MessageBox extends YK.BaseUI {
    constructor() {
        super(...arguments);
        this.modal = true;
        this.dontDel = true;
        this.packName = "BasePack";
        this.resName = "MessageBox";
        this.clickBbackgroundClose = false;
        this.mData = null;
    }
    static Create(content) {
        if (this.mMessageBoxDataPools.length > 0) {
            let da = this.mMessageBoxDataPools.pop();
            da.SetContent(content);
            return da;
        }
        return new MessageBoxData(content);
    }
    dispose() {
        super.dispose();
        MessageBox.mMessageBoxDataPools.splice(0, MessageBox.mMessageBoxDataPools.length);
    }
    OnBtnClick(ev) {
        super.OnBtnClick(ev);
        if (ev == this.BtnOK) {
            if (this.mData.BtnOkCallBack != null)
                this.mData.BtnOkCallBack.Invoke();
            this.OnBtnClose();
        }
        else if (ev == this.BtnCancel) {
            if (this.mData.BtnCancelCallBack != null)
                this.mData.BtnCancelCallBack.Invoke();
            this.OnBtnClose();
        }
        else if (ev == this.BtnConfirm) {
            if (this.mData.BtnBtnConfirmCallBack != null)
                this.mData.BtnBtnConfirmCallBack.Invoke();
            this.OnBtnClose();
        }
    }
    OninitWind() {
        this.BtnOK = this.UIObj.get("BtnOK");
        this.BtnCancel = this.UIObj.get("BtnCancel");
        this.BtnConfirm = this.UIObj.get("BtnConfirm");
        this.labelMsg = this.UIObj.get("labelMsg");
    }
    OnShowWind() {
        this.mData = this.data;
        if (this.mData.type == MessageBoxType.None) {
        }
        else if (this.mData.type == MessageBoxType.ShowConfirm) {
            this.BtnConfirm.text = this.mData.labBtnConfirmStr;
        }
        else {
            this.BtnOK.text = this.mData.labBtnOkStr;
            this.BtnCancel.text = this.mData.labBtnCancelStr;
        }
        this.UICtrls.get("stateCtrl").selectedIndex = this.mData.type;
        this.labelMsg.text = this.mData.content;
    }
    OnHideWind() {
        if (this.mData != null) {
            this.mData.reset();
            MessageBox.mMessageBoxDataPools.push(this.mData);
            this.mData = null;
        }
    }
}
MessageBox.mMessageBoxDataPools = new Array();
var MessageBoxType;
(function (MessageBoxType) {
    MessageBoxType[MessageBoxType["None"] = 0] = "None";
    MessageBoxType[MessageBoxType["ShowConfirm"] = 1] = "ShowConfirm";
    MessageBoxType[MessageBoxType["ShowOkAndCancel"] = 2] = "ShowOkAndCancel";
})(MessageBoxType || (MessageBoxType = {}));
class MessageBoxData {
    constructor(content) {
        this.content = null;
        this.BtnOkCallBack = null;
        this.labBtnOkStr = null;
        this.BtnCancelCallBack = null;
        this.labBtnCancelStr = null;
        this.BtnBtnConfirmCallBack = null;
        this.labBtnConfirmStr = null;
        this.content = content;
    }
    get type() {
        let t = MessageBoxType.None;
        if (this.BtnBtnConfirmCallBack != null) {
            t = MessageBoxType.ShowConfirm;
        }
        else if (this.BtnOkCallBack != null || this.BtnCancelCallBack != null) {
            t = MessageBoxType.ShowOkAndCancel;
        }
        return t;
    }
    SetBtnOkAndCancelCallBack(okCallBack, okStr = "好的", cancelCallBack = null, cancelStr = "好的") {
        this.BtnOkCallBack = okCallBack;
        this.labBtnOkStr = okStr;
        this.BtnCancelCallBack = cancelCallBack;
        this.labBtnCancelStr = cancelStr;
        return this;
    }
    SetBtnConfirmCallBack(callBack, labStr = "确定") {
        this.BtnBtnConfirmCallBack = callBack;
        this.labBtnConfirmStr = labStr;
        this.BtnOkCallBack = null;
        this.labBtnOkStr = null;
        this.BtnCancelCallBack = null;
        this.labBtnCancelStr = null;
        return this;
    }
    SetContent(content) {
        this.content = content;
    }
    reset() {
        this.BtnOkCallBack = null;
        this.labBtnOkStr = null;
        this.BtnCancelCallBack = null;
        this.labBtnCancelStr = null;
        this.BtnBtnConfirmCallBack = null;
        this.labBtnConfirmStr = null;
        this.content = null;
    }
    Show() {
        YK.UIMgr.Instance.ShowWind(MessageBox, this);
    }
}
//# sourceMappingURL=MessageBox.js.map