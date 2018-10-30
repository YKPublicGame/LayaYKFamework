var BaseUI = YK.BaseUI;
class LoadingWind extends YK.BaseUI {
    constructor() {
        super(...arguments);
        this.packName = "Loading";
        this.resName = "loadingWind";
        this.modal = false;
        this.dontDel = true;
        this.btnNameStartsWith = "Btn";
        this.isNeedShowAnimation = false;
        this.isNeedHideAnimation = false;
        this.mProgress = 0;
        this.mShowInfoString = "正在加载...";
    }
    OninitWind() {
        this.mlabelProgress = this.UIObj.get("labelProgress");
        this.mlablMsg = this.UIObj.get("lablMsg");
        this.mlabelProgress.text = "0%";
    }
    OnShowWind() {
        this.eventMgr.addUIEvent(LoadingProgressEvenet.EventID);
        this.mProgress = 0;
        this.mShowInfoString = "正在加载...";
        this.mlabelProgress.text = this.mProgress.toFixed() + "%";
    }
    OnHideWind() {
    }
    OnHandler(ev) {
        switch (ev.cmd) {
            case LoadingProgressEvenet.EventID:
                this.RefreshInfo(ev);
                break;
        }
    }
    RefreshInfo(ev) {
        this.mProgress = ev.data.progress;
        this.mlabelProgress.text = this.mProgress.toFixed() + "%";
    }
}
//# sourceMappingURL=LoadingWind.js.map