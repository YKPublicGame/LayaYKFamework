var YK;
(function (YK) {
    class GameFlag {
        constructor(flag = 0) {
            /// <summary>
            /// 标志量
            /// </summary>
            this.mValue = 0;
            this.mValue = flag;
        }
        get Value() {
            return this.mValue;
        }
        set Value(v) {
            this.mValue = v;
        }
        Add(flag) {
            this.mValue |= flag;
            return this;
        }
        Remove(flag) {
            this.mValue &= ~flag;
            return this;
        }
        Has(flag) {
            return (this.mValue & flag) != 0;
        }
    }
    YK.GameFlag = GameFlag;
})(YK || (YK = {}));
//# sourceMappingURL=GameFlag.js.map