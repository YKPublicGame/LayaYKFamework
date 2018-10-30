var YK;
(function (YK) {
    var Groot = fairygui.GRoot;
    var UIPackage = fairygui.UIPackage;
    class UIMgr extends YK.DispatchEventNode {
        constructor() {
            super();
            if (UIMgr.mInstance == null)
                UIMgr.mInstance = this;
        }
        static get Instance() {
            if (this.mInstance == null)
                new UIMgr();
            return this.mInstance;
        }
        /**
         * 获取所有窗口
         */
        GetAllWinds() {
            let array = new Array();
            for (var index = 0; index < Groot.inst.numChildren; index++) {
                var element = Groot.inst.getChildAt(index);
                if (element instanceof fairygui.Window) {
                    array.push(element);
                }
            }
            return array;
        }
        /**
         * 寻找窗口
         * @param type 类型
         */
        FindWind(type) {
            let array = this.GetAllWinds();
            return array.find((value, index, obj) => {
                return value instanceof type;
            });
        }
        /**
         * 显示界面
         * @param type 界面类型
         * @param param 界面数据
         */
        ShowWind(type, param = null) {
            let wind = this.FindWind(type);
            if (wind == null) {
                wind = new type();
            }
            wind.data = param;
            fairygui.GRoot.inst.showWindow(wind);
        }
        /**
         * 隐藏窗口
         * @param type 界面类型
         */
        HideWind(type) {
            let wind = this.FindWind(type);
            if (wind != null) {
                fairygui.GRoot.inst.hideWindow(wind);
            }
        }
        /**
         * 获取窗口
         * @param isShow 是否只找显示
         * @param containDotDel 是否包含不需要被删除的界面
         */
        GetAllWind(isShow = false, containDotDel = true) {
            let keys = new Array();
            let array = this.GetAllWinds();
            array.forEach(((value, key, map) => {
                if (!isShow || value.isShowing) {
                    if (value instanceof BaseUI) {
                        let wind = value;
                        if (!value.dontDel || containDotDel) {
                            keys.push(value);
                        }
                    }
                    else {
                        keys.push(value);
                    }
                }
            }));
            return keys;
        }
        /**
         * 隐藏所有
         * @param dispose 销毁
         * @param containDotDel 是否包含不能删除的
         */
        HideAllWind(dispose = false, containDotDel = false) {
            let winds = this.GetAllWind(false, containDotDel);
            winds.forEach(element => {
                if (dispose)
                    element.dispose();
                else
                    fairygui.GRoot.inst.hideWindowImmediately(element);
            });
            fairygui.GRoot.inst.hidePopup();
        }
        /**
         * 显示等待
         * @param msg 消息
         */
        ShowModalWait(msg = null) {
            fairygui.GRoot.inst.showModalWait(msg);
            console.log("msg =" + msg);
        }
        /**
         * 关闭等待界面
         */
        CloseModalWait() {
            fairygui.GRoot.inst.closeModalWait();
        }
    }
    UIMgr.UIStartScale = 0.6;
    UIMgr.mInstance = null;
    YK.UIMgr = UIMgr;
    class BaseUI extends fairygui.Window {
        constructor() {
            super(...arguments);
            this.packName = "";
            this.resName = "Main";
            this.eventMgr = null;
            this.btnCloseNodeName = "BtnClose";
            this.modal = false;
            this.dontDel = false;
            this.UIObj = new Map();
            this.UICtrls = new Map();
            this.btnNameStartsWith = "Btn";
            this.isNeedShowAnimation = false;
            this.isNeedHideAnimation = false;
        }
        onInit() {
            super.onInit();
            this.eventMgr = new YK.InterchangeableEventListenerMgr(this, this.OnHandler);
            if (this.contentPane == null) {
                let windObj = UIPackage.createObject(this.packName, this.resName);
                windObj.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                this.contentPane = windObj.asCom;
            }
            this.center();
            this.UIObj.clear();
            this.UICtrls.clear();
            for (var index = 0; index < this.contentPane.numChildren; index++) {
                var element = this.contentPane.getChildAt(index);
                if (element.name.startsWith(this.btnNameStartsWith)) {
                    if (element.name == "BtnClose") {
                        element.onClick(this, this.OnBtnClose);
                    }
                    else {
                        let xx = element;
                        element.onClick(this, () => {
                            this.OnBtnClick(xx);
                        });
                    }
                }
                this.UIObj.set(element.name, element);
            }
            this.contentPane.controllers.forEach(element => {
                this.UICtrls.set(element.name, element);
            });
            this.setPivot(0.5, 0.5);
            this.OninitWind();
        }
        onHide() {
            this.data = null;
            this.eventMgr.RemoveAll();
            this.OnHideWind();
        }
        OnHandler(ev) {
        }
        doHideAnimation() {
            if (this.isNeedHideAnimation) {
                this.setScale(UIMgr.UIStartScale, UIMgr.UIStartScale);
                fairygui.tween.GTween.to(this.scaleX, 0, 0.3)
                    .onUpdate((v) => {
                    this.setScale(v.value.x, v.value.x);
                }, this)
                    .onComplete(() => {
                    super.doHideAnimation();
                }, this);
            }
            else {
                super.doHideAnimation();
            }
        }
        doShowAnimation() {
            if (this.isNeedHideAnimation) {
                this.scaleX = 0;
                this.scaleY = 0;
                fairygui.tween.GTween.to(this.scaleX, 1, 0.3)
                    .setEase(fairygui.tween.EaseType.BounceOut)
                    .onUpdate((v) => {
                    this.setScale(v.value.x, v.value.x);
                }, this)
                    .onComplete(() => {
                    super.doShowAnimation();
                }, this);
            }
            else {
                super.doShowAnimation();
            }
        }
        OnBtnClick(ev) {
        }
        OnBtnClose() {
            this.hide();
        }
        onShown() {
            super.onShown();
            this.OnShowWind();
        }
    }
    YK.BaseUI = BaseUI;
})(YK || (YK = {}));
//# sourceMappingURL=UIMgr.js.map