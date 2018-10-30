module YK
{
    export class SceneMgr extends DispatchEventNode
    {
        constructor()
        {
            super();
            if(SceneMgr.mInstance == null) SceneMgr.mInstance = this
        }
        private mScenes: Map<any, SceneBase> = new Map<any, SceneBase>()
        //private mBolckBg : cc.Node = null
        private static mInstance: SceneMgr = null
        public static get Instance(): SceneMgr
        {
            if (this.mInstance == null)new SceneMgr()
            return this.mInstance
        }

        private mCurScene: SceneBase = null

        /**
         * 跳转场景
         * @param type 场景脚本文件
         * @param param 参数
         */
        public GoToScene(script: any, param: any = null)
        {
            if (!this.mScenes.has(script))
            {
                if (this.mCurScene != null)
                {
                    this.mCurScene.Leave()
                }
                let scene: SceneBase = new script()
                this.mScenes.set(script, scene)
                this.mCurScene = scene
                this.mCurScene.Enter(param)
            }
            else
            {
                let scene = this.mScenes.get(script)
                if (scene == this.mCurScene)
                {
                    console.error("当前场景与目标场景一样无法重新进入这个场景")
                    return
                }
                else
                {
                    if (this.mCurScene != null)
                    {
                        this.mCurScene.Leave()
                        this.mCurScene = this.mScenes.get(script)
                        this.mCurScene.Enter(param)
                    }
                }
            }

        }
    }
}