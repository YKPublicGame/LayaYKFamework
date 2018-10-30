module YK
{
    export class SceneBase
    {
        protected firstWind: any = null

        public needLoadRes: LoadGruopInfo;

        public eventMgr: InterchangeableEventListenerMgr
        public tasks: TaskMgr

        public constructor()
        {
            this.needLoadRes = new LoadGruopInfo()
            this.needLoadRes.onCompletion(this.Loaded, this)
            this.tasks = new TaskMgr(true, new Func(this, this.TaskFinished))
            this.eventMgr = new InterchangeableEventListenerMgr(this, this.OnHandler)
        }

        private mParam: any
        private mLoaded = false
        private mTaskFinished = false
        public Enter(param: any)
        {
            ResMgr.Instance.push()

            //UIMgr.Instance.HideAllWind()
            this.mLoaded = false
            this.mTaskFinished = false

            this.tasks.Stop()
            this.mParam = param
            this.OnInit(param)
            this.needLoadRes.start()
            this.tasks.Execute()
        }

        public Leave()
        {
            if (this.eventMgr != null)
                this.eventMgr.RemoveAll()

            if (this.tasks != null)
                this.tasks.Stop()
            this.OnLeave()
        }

        public Destroy(): void
        {
            this.OnDestroy()
        }



        /**
         * 任务完成
         * @param error 错误
         */
        protected TaskFinished(error)
        {
            if (error != null)
            {
                console.error(error)
            }
            else
            {
                this.OnTaskFinished()
                this.mTaskFinished = true
                this.ChechEnter()
            }
        }

        /**
         * 加载完成
         * @param error 加载错误
         */
        protected Loaded(error)
        {
            if (error != null)
            {
                console.error(error)
            }
            else
            {
                this.OnLoaded()
                this.mLoaded = true
                this.ChechEnter()
            }

        }

        private ChechEnter()
        {
            if (this.mLoaded && this.mTaskFinished)
            {
                UIMgr.Instance.HideAllWind(true)
                ResMgr.Instance.pop()
                if (this.firstWind != null)
                {
                    UIMgr.Instance.ShowWind(this.firstWind)
                }
                this.OnEnter(this.mParam)
            }
        }


        /**
         * 加载完成
         */
        protected OnLoaded()
        {

        }

        /**
         * 任务完成
         */
        protected OnTaskFinished()
        {

        }

        /**
        * 处理消息
        * @param ev 参数
        */
        protected OnHandler(ev: EventData)
        {

        }

        /**
        * 场景初始化
        * @param param 参数
        */
        protected OnInit(param: any)
        {

        }

        /**
         * 进入场景
         */
        protected OnEnter(param: any): void
        {

        }

        /**
         * 离开场景
         */
        protected OnLeave(): void
        {

        }

        /**
         * 当场景被销毁的时候
         */
        protected OnDestroy(): void
        {

        }
    }
}