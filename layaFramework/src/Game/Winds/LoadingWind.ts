import BaseUI = YK.BaseUI
class LoadingWind extends YK.BaseUI
{
    protected packName = "Loading"
    protected resName = "loadingWind"
    public modal: boolean = false
    public dontDel: boolean = true
    protected btnNameStartsWith: string = "Btn"
    protected isNeedShowAnimation: boolean = false
    protected isNeedHideAnimation: boolean = false

    protected mlabelProgress: fairygui.GTextField
    protected mlablMsg: fairygui.GTextField
    private mProgress: number = 0
    private mShowInfoString: string = "正在加载..."

    protected OninitWind()
    {
        this.mlabelProgress = this.UIObj.get("labelProgress")
        this.mlablMsg = this.UIObj.get("lablMsg")
        this.mlabelProgress.text = "0%"

    }

    protected OnShowWind()
    {
        this.eventMgr.addUIEvent(LoadingProgressEvenet.EventID)

        this.mProgress = 0
        this.mShowInfoString = "正在加载..."
        this.mlabelProgress.text = this.mProgress.toFixed() + "%"
    }

    protected OnHideWind()
    {

    }
    protected OnHandler(ev: YK.EventData)
    {
        switch (ev.cmd)
        {
            case LoadingProgressEvenet.EventID:
                this.RefreshInfo(ev as LoadingProgressEvenet)
                break;
        }
    }

    public RefreshInfo(ev: LoadingProgressEvenet)
    {
        this.mProgress = ev.data.progress
        this.mlabelProgress.text = this.mProgress.toFixed() + "%"
    }
}