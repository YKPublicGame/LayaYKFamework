var YK;
(function (YK) {
    /**
     * 任务管理器
     */
    class TaskMgr {
        constructor(failureStop, finished) {
            /**
             * 任务数
             */
            this.mTaskNum = 0;
            /**
             * 遇到错误是否停止
             */
            this.mFailureStop = true;
            /**
             * 并行任务
             */
            this.mParallelTask = new Array();
            /**
             * 顺序任务
             */
            this.mSequence = new Array();
            /**
             * 是否在执行任务
             */
            this.mIsRuning = false;
            /**
            * 任务进度
            */
            this.progress = 0;
            /**
             * 当前任务
             */
            this.currentTask = null;
            /**
             * 当前任务是否完成
             */
            this.isFinished = false;
            this.mFinished = finished;
            this.mParallelTask.splice(0, this.mParallelTask.length);
            this.mSequence.splice(0, this.mSequence.length);
            YK.TimeDelay.Instance.Remove(this.Update, this);
            YK.TimeDelay.Instance.AddUpdate(this.Update, this);
        }
        /**
         * 添加一个任务
         * @param task 任务对象
         * @param isSequence 是否是需要时序
         * @return 任务id -1则为添加失败
         */
        AddTask(task, isSequence = true) {
            let array;
            let ret = -1;
            if (isSequence) {
                array = this.mSequence;
            }
            else {
                array = this.mParallelTask;
            }
            let index = array.findIndex((value, index, obj) => {
                return value == task;
            });
            if (index == -1) {
                task.Id = this.mTaskNum;
                ret = task.Id;
                array.push(task);
                this.mTaskNum = this.mSequence.length + this.mParallelTask.length;
            }
            return ret;
        }
        Update() {
            if (!this.mIsRuning) {
                return;
            }
            this.OnUpdate();
        }
        OnUpdate() {
            for (var index = 0; index < this.mParallelTask.length; index++) {
                var element = this.mParallelTask[index];
                if (element.IsRuning && element.IsDone) {
                    this.mParallelTask.splice(index, 1);
                    index--;
                    this.progress = (this.mTaskNum - (this.mSequence.length + this.mParallelTask.length)) / this.mTaskNum * 100;
                    let error = element.Error;
                    if (error != null && this.mFailureStop) {
                        this.Finished(error);
                    }
                    else {
                        if (this.mTaskItemFinished) {
                            this.mTaskItemFinished.Invoke(element, this.progress);
                        }
                    }
                }
                else if (!element.IsRuning && !element.IsDone) {
                    element.OnExecute();
                    this.currentTask = element;
                }
            }
            for (var index = 0; index < this.mSequence.length; index++) {
                var element = this.mSequence[index];
                if (element.IsRuning) {
                    if (element.IsDone) {
                        this.mSequence.splice(index, 1);
                        index--;
                        let error = element.Error;
                        if (error != null && this.mFailureStop) {
                            this.Finished(error);
                        }
                        else {
                            this.progress = (this.mTaskNum - (this.mSequence.length + this.mParallelTask.length)) / this.mTaskNum * 100;
                            if (this.mTaskItemFinished) {
                                this.mTaskItemFinished.Invoke(element, this.progress);
                            }
                        }
                    }
                    break;
                }
                else if (!element.IsDone) {
                    this.currentTask = element;
                    element.OnExecute();
                }
            }
            if (this.mSequence.length + this.mParallelTask.length <= 0) {
                this.Finished();
            }
        }
        Finished(error = null) {
            this.isFinished = true;
            this.mIsRuning = false;
            this.progress = 100;
            if (this.mFinished != null) {
                this.mFinished.Invoke(error);
            }
            if (error) {
                YK.TimeDelay.Instance.Remove(this.Update, this);
            }
        }
        /**
         *
         * @param id 任务id
         */
        HasTask(id) {
            let index = this.mSequence.findIndex((value, index, obj) => {
                return value.Id == id;
            });
            index = this.mParallelTask.findIndex((value, index, obj) => {
                return value.Id == id;
            });
            return index != -1;
        }
        Stop() {
            this.mIsRuning = false;
            //TimeDelay.Instance.Remove(this.Update, this)
        }
        Execute() {
            this.mIsRuning = true;
        }
    }
    YK.TaskMgr = TaskMgr;
    /**
     * 任务基类
     */
    class TaskBase {
        constructor() {
            this.IsRuning = false;
            this.Id = 0;
            this.IsDone = false;
            this.Error = null;
        }
        TaskName() {
            return null;
        }
        OnExecute() {
            this.IsRuning = true;
        }
        Reset() {
            this.IsRuning = false;
        }
    }
    YK.TaskBase = TaskBase;
})(YK || (YK = {}));
//# sourceMappingURL=TaskBase.js.map