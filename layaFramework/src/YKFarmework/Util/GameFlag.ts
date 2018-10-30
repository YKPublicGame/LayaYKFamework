module YK
{
    export class GameFlag
    {
        /// <summary>
        /// 标志量
        /// </summary>
        private mValue: number = 0;

        public get Value(): number
        {
            return this.mValue
        }

        public set Value(v)
        {
            this.mValue = v
        }

        public constructor(flag = 0)
        {
            this.mValue = flag
        }

        public Add(flag)
        {
            this.mValue |= flag
            return this
        }

        public Remove(flag)
        {
            this.mValue &= ~flag
            return this
        }

        public Has(flag)
        {
            return (this.mValue & flag) != 0
        }
    }
}