module YK
{
    /**
     * 任务管理器
     */
    export class TaskMgr
    {
        /**
         * 任务数
         */
        protected mTaskNum: number = 0

        /**
         * 一个任务被完成
         */
        protected mTaskItemFinished: Func

        /**
         * 遇到错误是否停止
         */
        protected mFailureStop: boolean = true

        /**
         * 任务全部完成
         */
        protected mFinished: Func

        /**
         * 并行任务
         */
        protected mParallelTask: Array<ITask> = new Array<ITask>()

        /**
         * 顺序任务
         */
        protected mSequence: Array<ITask> = new Array<ITask>()

        /**
         * 是否在执行任务
         */
        protected mIsRuning = false

        /** 
        * 任务进度
        */
        public progress: number = 0;

        /**
         * 当前任务
         */
        public currentTask: ITask = null

        /**
         * 当前任务是否完成
         */
        public isFinished: boolean = false

        public constructor(failureStop: boolean
            , finished: Func)
        {
            this.mFinished = finished
            this.mParallelTask.splice(0, this.mParallelTask.length)
            this.mSequence.splice(0, this.mSequence.length)
            TimeDelay.Instance.Remove(this.Update, this)
            TimeDelay.Instance.AddUpdate(this.Update, this)
        }

        /**
         * 添加一个任务
         * @param task 任务对象
         * @param isSequence 是否是需要时序 
         * @return 任务id -1则为添加失败
         */
        public AddTask(task: ITask, isSequence: boolean = true): number
        {
            let array: Array<ITask>
            let ret = -1
            if (isSequence)
            {
                array = this.mSequence
            }
            else
            {
                array = this.mParallelTask
            }

            let index = array.findIndex((value: ITask, index: number, obj: Array<ITask>) =>
            {
                return value == task
            })
            if (index == -1)
            {
                task.Id = this.mTaskNum
                ret = task.Id
                array.push(task)
                this.mTaskNum = this.mSequence.length + this.mParallelTask.length
            }
            return ret
        }

        private Update()
        {

            if (!this.mIsRuning)
            {
                return
            }
            this.OnUpdate()
        }


        protected OnUpdate()
        {
            for (var index = 0; index < this.mParallelTask.length; index++)
            {
                var element = this.mParallelTask[index];
                if (element.IsRuning && element.IsDone)
                {
                    this.mParallelTask.splice(index, 1)
                    index--
                    this.progress = (this.mTaskNum - (this.mSequence.length + this.mParallelTask.length)) / this.mTaskNum * 100
                    let error = element.Error
                    if (error != null && this.mFailureStop)
                    {
                        this.Finished(error)
                    }
                    else
                    {
                        if (this.mTaskItemFinished)
                        {
                            this.mTaskItemFinished.Invoke(element, this.progress)
                        }
                    }

                }
                else if (!element.IsRuning && !element.IsDone)
                {
                    element.OnExecute()
                    this.currentTask = element
                }
            }

            for (var index = 0; index < this.mSequence.length; index++)
            {
                var element = this.mSequence[index]

                if (element.IsRuning)
                {
                    if (element.IsDone)
                    {
                        this.mSequence.splice(index, 1)
                        index--
                        let error = element.Error
                        if (error != null && this.mFailureStop)
                        {
                            this.Finished(error)
                        }
                        else
                        {
                            this.progress = (this.mTaskNum - (this.mSequence.length + this.mParallelTask.length)) / this.mTaskNum * 100
                            if (this.mTaskItemFinished)
                            {
                                this.mTaskItemFinished.Invoke(element, this.progress)
                            }
                        }
                    }
                    break
                }
                else if (!element.IsDone)
                {
                    this.currentTask = element
                    element.OnExecute()
                }
            }
            if (this.mSequence.length + this.mParallelTask.length <= 0)
            {
                this.Finished()
            }
        }

        protected Finished(error = null)
        {
            this.isFinished = true
            this.mIsRuning = false
            this.progress = 100
            if (this.mFinished != null)
            {
                this.mFinished.Invoke(error)
            }

            if (error)
            {
                TimeDelay.Instance.Remove(this.Update, this)
            }
        }

        /**
         * 
         * @param id 任务id
         */
        public HasTask(id): boolean
        {
            let index = this.mSequence.findIndex((value: ITask, index: number, obj: Array<ITask>) =>
            {
                return value.Id == id
            })

            index = this.mParallelTask.findIndex((value: ITask, index: number, obj: Array<ITask>) =>
            {
                return value.Id == id
            })

            return index != -1
        }

        public Stop()
        {
            this.mIsRuning = false
            //TimeDelay.Instance.Remove(this.Update, this)
        }

        public Execute()
        {
            this.mIsRuning = true
        }
    }

    /**
     * 任务接口
     */
    export interface ITask
    {
        IsRuning: boolean
        Id: number
        IsDone: boolean
        Error: string
        TaskName: () => string
        OnExecute: () => void
        Reset: () => void
    }

    /**
     * 任务基类
     */
    export class TaskBase implements ITask
    {
        IsRuning: boolean = false;
        Id: number = 0;
        IsDone: boolean = false;
        Error: string = null;

        public TaskName(): string
        {
            return null
        }
        public OnExecute(): void
        {
            this.IsRuning = true
        }
        public Reset(): void
        {
            this.IsRuning = false
        }

    }
}