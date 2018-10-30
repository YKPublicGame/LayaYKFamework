module YK
{
    import Groot = fairygui.GRoot
    import UIPackage = fairygui.UIPackage
    export class UIMgr extends DispatchEventNode
    {
        public constructor()
        {
            super()
            if (UIMgr.mInstance == null) UIMgr.mInstance = this
        }
        public static UIStartScale = 0.6
        private static mInstance: UIMgr = null
        public static get Instance(): UIMgr
        {
            if (this.mInstance == null)
                new UIMgr()
            return this.mInstance
        }

        /**
         * 获取所有窗口
         */
        public GetAllWinds(): Array<fairygui.Window>
        {
            let array: Array<fairygui.Window> = new Array<fairygui.Window>()

            for (var index = 0; index < Groot.inst.numChildren; index++)
            {
                var element: fairygui.GObject = Groot.inst.getChildAt(index)
                if (element instanceof fairygui.Window)
                {
                    array.push(element)
                }
            }
            return array
        }

        /**
         * 寻找窗口
         * @param type 类型
         */
        public FindWind(type: any)
        {
            let array = this.GetAllWinds()
            return array.find((value: fairygui.Window, index: number,
                obj: Array<fairygui.Window>) =>
            {
                return value instanceof type
            })
        }

        /**
         * 显示界面
         * @param type 界面类型
         * @param param 界面数据
         */
        public ShowWind(type: any, param = null)
        {
            let wind = this.FindWind(type)
            if (wind == null)
            {
                wind = new type()
            }
            wind.data = param

            fairygui.GRoot.inst.showWindow(wind)
        }

        /**
         * 隐藏窗口
         * @param type 界面类型
         */
        public HideWind(type: any)
        {
            let wind = this.FindWind(type)
            if (wind != null)
            {
                fairygui.GRoot.inst.hideWindow(wind)
            }
        }

        /**
         * 获取窗口
         * @param isShow 是否只找显示
         * @param containDotDel 是否包含不需要被删除的界面 
         */
        public GetAllWind(isShow = false, containDotDel = true): Array<fairygui.Window>
        {
            let keys = new Array<fairygui.Window>()

            let array = this.GetAllWinds()

            array.forEach(((value: fairygui.Window, key: any, map: Array<fairygui.Window>) => 
            {
                if (!isShow || value.isShowing)
                {
                    if (value instanceof BaseUI)
                    {
                        let wind: BaseUI = value as BaseUI
                        if (!value.dontDel || containDotDel)
                        {
                            keys.push(value)
                        }
                    }
                    else
                    {
                        keys.push(value)
                    }
                }
            }));

            return keys
        }

        /**
         * 隐藏所有
         * @param dispose 销毁
         * @param containDotDel 是否包含不能删除的
         */
        public HideAllWind(dispose = false, containDotDel = false)
        {
            let winds = this.GetAllWind(false, containDotDel)
            winds.forEach(element =>
            {
                if (dispose)
                    element.dispose()
                else
                    fairygui.GRoot.inst.hideWindowImmediately(element)
            });

            fairygui.GRoot.inst.hidePopup()
        }

        /**
         * 显示等待
         * @param msg 消息
         */
        public ShowModalWait(msg: string = null)
        {
            fairygui.GRoot.inst.showModalWait(msg)
            console.log("msg =" + msg)
        }

        /**
         * 关闭等待界面
         */
        public CloseModalWait(): void
        {
            fairygui.GRoot.inst.closeModalWait()
        }
    }

    export abstract class BaseUI extends fairygui.Window
    {
        protected packName = ""
        protected resName = "Main"
        public eventMgr: InterchangeableEventListenerMgr = null;

        protected btnCloseNodeName: string = "BtnClose"
        public modal: boolean = false
        public dontDel: boolean = false
        public UIObj: Map<string, any> = new Map<string, any>()
        public UICtrls: Map<string, fairygui.Controller> = new Map<string, fairygui.Controller>()
        protected btnNameStartsWith: string = "Btn"
        protected isNeedShowAnimation: boolean = false
        protected isNeedHideAnimation: boolean = false

        protected onInit()
        {
            super.onInit()
            this.eventMgr = new InterchangeableEventListenerMgr(this, this.OnHandler)
            if (this.contentPane == null)
            {
                let windObj = UIPackage.createObject(this.packName, this.resName);
                windObj.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                this.contentPane = windObj.asCom
            }

            this.center();
            this.UIObj.clear()
            this.UICtrls.clear()
            for (var index = 0; index < this.contentPane.numChildren; index++)
            {
                var element = this.contentPane.getChildAt(index);
                if (element.name.startsWith(this.btnNameStartsWith))
                {
                    if (element.name == "BtnClose")
                    {
                        element.onClick(this, this.OnBtnClose)
                    }
                    else
                    {
                        let xx = element
                        element.onClick(this, () =>
                        {
                            this.OnBtnClick(xx as fairygui.GButton)
                        })
                    }
                }
                this.UIObj.set(element.name, element)
            }

            this.contentPane.controllers.forEach(element =>
            {
                this.UICtrls.set(element.name, element)
            });

            this.setPivot(0.5, 0.5)
            this.OninitWind()

        }

        protected onHide()
        {
            this.data = null
            this.eventMgr.RemoveAll()
            this.OnHideWind()
        }

        protected OnHandler(ev: EventData)
        {
        }

        protected doHideAnimation()
        {
            if (this.isNeedHideAnimation)
            {
                this.setScale(UIMgr.UIStartScale, UIMgr.UIStartScale)
                fairygui.tween.GTween.to(this.scaleX, 0, 0.3)
                    .onUpdate((v: fairygui.tween.GTweener) => 
                    {
                        this.setScale(v.value.x, v.value.x)
                    }, this)
                    .onComplete(() =>
                    {
                        super.doHideAnimation()
                    }, this)
            }
            else
            {
                super.doHideAnimation()
            }
        }

        protected doShowAnimation()
        {
            if (this.isNeedHideAnimation)
            {
                this.scaleX = 0
                this.scaleY = 0
                fairygui.tween.GTween.to(this.scaleX, 1, 0.3)
                    .setEase(fairygui.tween.EaseType.BounceOut)
                    .onUpdate((v: fairygui.tween.GTweener) => 
                    {
                        this.setScale(v.value.x, v.value.x)
                    }, this)
                    .onComplete(() =>
                    {
                        super.doShowAnimation()
                    }, this)
            }
            else
            {
                super.doShowAnimation()
            }
        }

        protected OnBtnClick(ev: fairygui.GButton)
        {

        }

        protected OnBtnClose()
        {
            this.hide()
        }

        protected onShown()
        {
            super.onShown()
            this.OnShowWind()
        }


        protected abstract OninitWind()

        protected abstract OnShowWind()

        protected abstract OnHideWind()
    }
}