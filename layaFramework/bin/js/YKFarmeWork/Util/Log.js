var YK;
(function (YK) {
    class Log {
    }
    Log.Log = console.log;
    Log.Error = console.error;
    Log.Warn = console.warn();
    YK.Log = Log;
})(YK || (YK = {}));
//# sourceMappingURL=Log.js.map