var YK;
(function (YK) {
    class SceneBase {
        constructor() {
            this.firstWind = null;
            this.mLoaded = false;
            this.mTaskFinished = false;
            this.needLoadRes = new YK.LoadGruopInfo();
            this.needLoadRes.onCompletion(this.Loaded, this);
            this.tasks = new YK.TaskMgr(true, new YK.Func(this, this.TaskFinished));
            this.eventMgr = new YK.InterchangeableEventListenerMgr(this, this.OnHandler);
        }
        Enter(param) {
            YK.ResMgr.Instance.push();
            //UIMgr.Instance.HideAllWind()
            this.mLoaded = false;
            this.mTaskFinished = false;
            this.tasks.Stop();
            this.mParam = param;
            this.OnInit(param);
            this.needLoadRes.start();
            this.tasks.Execute();
        }
        Leave() {
            if (this.eventMgr != null)
                this.eventMgr.RemoveAll();
            if (this.tasks != null)
                this.tasks.Stop();
            this.OnLeave();
        }
        Destroy() {
            this.OnDestroy();
        }
        /**
         * 任务完成
         * @param error 错误
         */
        TaskFinished(error) {
            if (error != null) {
                console.error(error);
            }
            else {
                this.OnTaskFinished();
                this.mTaskFinished = true;
                this.ChechEnter();
            }
        }
        /**
         * 加载完成
         * @param error 加载错误
         */
        Loaded(error) {
            if (error != null) {
                console.error(error);
            }
            else {
                this.OnLoaded();
                this.mLoaded = true;
                this.ChechEnter();
            }
        }
        ChechEnter() {
            if (this.mLoaded && this.mTaskFinished) {
                YK.UIMgr.Instance.HideAllWind(true);
                YK.ResMgr.Instance.pop();
                if (this.firstWind != null) {
                    YK.UIMgr.Instance.ShowWind(this.firstWind);
                }
                this.OnEnter(this.mParam);
            }
        }
        /**
         * 加载完成
         */
        OnLoaded() {
        }
        /**
         * 任务完成
         */
        OnTaskFinished() {
        }
        /**
        * 处理消息
        * @param ev 参数
        */
        OnHandler(ev) {
        }
        /**
        * 场景初始化
        * @param param 参数
        */
        OnInit(param) {
        }
        /**
         * 进入场景
         */
        OnEnter(param) {
        }
        /**
         * 离开场景
         */
        OnLeave() {
        }
        /**
         * 当场景被销毁的时候
         */
        OnDestroy() {
        }
    }
    YK.SceneBase = SceneBase;
})(YK || (YK = {}));
//# sourceMappingURL=SceneBase.js.map