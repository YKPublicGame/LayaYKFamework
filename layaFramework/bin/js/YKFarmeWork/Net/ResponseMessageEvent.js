var YK;
(function (YK) {
    class ResponseMessageEvent extends YK.EventData {
        constructor(type) {
            super(type, null);
            this.data = null;
        }
        SetData(head, msg) {
            this.cmd = head.cmd.toString();
            this.data = { head: head, msg: msg };
        }
        get Data() {
            return this.data;
        }
    }
    YK.ResponseMessageEvent = ResponseMessageEvent;
})(YK || (YK = {}));
//# sourceMappingURL=ResponseMessageEvent.js.map