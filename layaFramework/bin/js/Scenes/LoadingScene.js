class LoadingScene extends YK.SceneBase {
    OnInit(param) {
        super.OnInit(param);
        // this.needLoadRes
        //     .add("prefab/Loading/Loading", true)
        // this.initNeedLoadTask = new LoadGruopInfo()
        // this.initNeedLoadTask
        //     .add("prefab/MessageBox/MessageBoxCommon", true)
        //     .add("prefab/WaitWind", true)
        //     .onItemCompletion(this.loadItemCompletion, this)
        //     .onCompletion(this.loadGameResFinish, this)
    }
    loadItemCompletion() {
        let ev = new LoadingProgressEvenet();
        ev.Progress = this.initNeedLoadTask.Progress;
        YK.UIMgr.Instance.DispatchEvent(ev);
    }
    /**
     * 资源加载完成
     */
    loadGameResFinish() {
        this.AddProto();
        netpack.ProtocolDef.Protocols.forEach(element => {
            YK.ProtoMap.AddProto(element);
        });
    }
    AddProto() {
        YK.NetMgr.Instance.AddProto("netpack", netpack.ProtocolDef.ProtocolNames);
        this.StartGame();
    }
    StartGame() {
        let ev = new LoadingProgressEvenet();
        ev.Progress = 100;
        YK.UIMgr.Instance.DispatchEvent(ev);
        //SceneMgr.Instance.GoToScene(LoginScene)
    }
    OnEnter(param) {
        super.OnEnter(param);
        //UIMgr.Instance.ShowWind(LoadingWind)
        this.initNeedLoadTask.start();
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
//# sourceMappingURL=LoadingScene.js.map