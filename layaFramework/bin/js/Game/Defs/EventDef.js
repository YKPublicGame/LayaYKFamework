// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
class LoadingProgressEvenet extends YK.EventData {
    constructor() {
        super(LoadingProgressEvenet.EventID, { Progress: 0, showInfoString: "正在加载..." });
    }
    set Progress(progress) {
        this.data.progress = progress;
    }
    set ShowInfoString(ShowInfoString) {
        this.data.showInfoString = ShowInfoString;
    }
}
LoadingProgressEvenet.EventID = "LoadingProgressEvenet";
//# sourceMappingURL=EventDef.js.map