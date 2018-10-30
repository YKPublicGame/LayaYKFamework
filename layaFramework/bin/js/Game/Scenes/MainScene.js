class MainScene extends YK.SceneBase {
    constructor() {
        super(...arguments);
        this.firstWind = MainWind;
    }
    OnInit(param) {
        super.OnInit(param);
        this.needLoadRes.add("res/external/MainPack_atlas0.png", Laya.Loader.IMAGE, true);
        this.needLoadRes.add("res/external/MainPack.bin", Laya.Loader.BUFFER, true, true);
    }
    OnEnter(param) {
        super.OnEnter(param);
    }
    OnHandler(ev) {
        super.OnHandler(ev);
    }
    OnLeave() {
        super.OnLeave();
    }
    OnDestroy() {
        super.OnDestroy();
    }
    OnLoaded() {
        super.OnLoaded();
    }
    OnTaskFinished() {
        super.OnTaskFinished();
    }
}
//# sourceMappingURL=MainScene.js.map