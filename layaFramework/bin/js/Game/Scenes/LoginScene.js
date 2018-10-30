var SceneBase = YK.SceneBase;
var EventData = YK.EventData;
class LoginScene extends SceneBase {
    constructor() {
        super(...arguments);
        this.firstWind = LoginWind;
    }
    OnInit(param) {
        super.OnInit(param);
        this.needLoadRes
            .add("res/external/LoginPack.bin", Laya.Loader.BUFFER, true, true)
            .add("res/external/BasePack.bin", Laya.Loader.BUFFER, true, true)
            .add("res/external/BasePack_atlas0.png", Laya.Loader.IMAGE, true);
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
//# sourceMappingURL=LoginScene.js.map