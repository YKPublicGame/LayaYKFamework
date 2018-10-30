var WebGL = Laya.WebGL;
// 程序入口
class GameMain {
    constructor() {
        Laya.MiniAdpter.init();
        Laya.init(640, 960, WebGL);
        Laya.stage.scaleMode = "fixedauto";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "vertical";
        YK.NetMgr.Instance.AddProto("netpack", YK.ProtocolDef.ProtocolNames);
        YK.NetMgr.Instance.connect();
    }
}
new GameMain();
//# sourceMappingURL=MainApp.js.map