var YK;
(function (YK) {
    class SceneMgr extends YK.DispatchEventNode {
        constructor() {
            super();
            this.mScenes = new Map();
            this.mCurScene = null;
            if (SceneMgr.mInstance == null)
                SceneMgr.mInstance = this;
        }
        static get Instance() {
            if (this.mInstance == null)
                new SceneMgr();
            return this.mInstance;
        }
        /**
         * 跳转场景
         * @param type 场景脚本文件
         * @param param 参数
         */
        GoToScene(script, param = null) {
            if (!this.mScenes.has(script)) {
                if (this.mCurScene != null) {
                    this.mCurScene.Leave();
                }
                let scene = new script();
                this.mScenes.set(script, scene);
                this.mCurScene = scene;
                this.mCurScene.Enter(param);
            }
            else {
                let scene = this.mScenes.get(script);
                if (scene == this.mCurScene) {
                    console.error("当前场景与目标场景一样无法重新进入这个场景");
                    return;
                }
                else {
                    if (this.mCurScene != null) {
                        this.mCurScene.Leave();
                        this.mCurScene = this.mScenes.get(script);
                        this.mCurScene.Enter(param);
                    }
                }
            }
        }
    }
    //private mBolckBg : cc.Node = null
    SceneMgr.mInstance = null;
    YK.SceneMgr = SceneMgr;
})(YK || (YK = {}));
//# sourceMappingURL=SceneMgr.js.map