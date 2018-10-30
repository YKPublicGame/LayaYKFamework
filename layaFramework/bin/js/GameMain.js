var WebGL = Laya.WebGL;
var ModeMgr = YK.ModeMgr;
var SceneMgr = YK.SceneMgr;
// 程序入口
class GameMain {
    constructor() {
        Laya.MiniAdpter.init();
        Laya.init(640, 1136, WebGL);
        laya.utils.Stat.show(0, 0);
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        Laya.stage.scaleMode = "fixedauto";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "vertical";
        fairygui.UIConfig.packageFileExtension = "bin";
        fairygui.UIConfig.bringWindowToFrontOnClick = false;
        //YK.NetMgr.Instance.connect()
        this.initGame();
    }
    initGame() {
        fairygui.UIConfig.globalModalWaiting = "ui://Loading/waitWind";
        YK.NetMgr.Instance.AddProto("netpack", netpack.ProtocolDef.ProtocolNames);
        ModeMgr.Instance.AddMode(RoleMode);
        ModeMgr.Instance.InitData();
        SceneMgr.Instance.GoToScene(LoadingScene);
    }
}
new GameMain();
//# sourceMappingURL=GameMain.js.map