var YK;
(function (YK) {
    class ProtoMap {
        static Add(key, type) {
            this.classMap[key] = type;
        }
        static Pack(head, data = null) {
            let proto = this.protos[head.cmd];
            if (proto == null) {
                console.error("尝试封包一个没有注册的消息 id=" + head.cmd);
                return null;
            }
            let _c = proto.request;
            if (_c != null && data != null) {
                head.contentBuff = this.PackByClasName(_c, data);
            }
            return this.PackByClasName("packbase", head);
        }
        static UnPack(head, buff = null) {
            let proto = this.protos[head.cmd];
            if (proto == null) {
                console.error("尝试解包一个没有注册的消息 id=" + head.cmd);
                return null;
            }
            let _c = proto.response;
            if (_c != null) {
                buff = buff == null ? head.contentBuff : buff;
                return this.UnPackByClasName(_c, buff);
            }
            else {
                return null;
            }
        }
        static UnPackHead(buffer) {
            if (buffer == null || buffer.byteLength == 0)
                return null;
            return this.UnPackByClasName("packbase", buffer);
        }
        static PackByClasName(cname, data) {
            let c = this.classMap[cname];
            if (c != null) {
                let obj = new c(data);
                return c.encode(obj).finish();
            }
            else {
                console.error("反序列化一条没有实现的消息id：" + cname);
            }
            return null;
        }
        static UnPackByClasName(cname, buff) {
            let c = this.classMap[cname];
            if (c != null && buff != null) {
                let bf = new Uint8Array(buff);
                return c.decode(bf);
            }
            if (c == null) {
                console.error("反序列化一条没有实现的消息id：" + cname);
            }
            return null;
        }
        static AddProto(proto) {
            if (this.protos[proto.id] != null) {
                console.log(this.protos);
                console.error("不能重复注册消息  id=" + proto.id);
            }
            this.protos[proto.id] = proto;
        }
    }
    ProtoMap.protos = {
        1: {
            id: 1,
            request: null,
            response: null,
        },
    };
    ProtoMap.classMap = {};
    YK.ProtoMap = ProtoMap;
})(YK || (YK = {}));
//# sourceMappingURL=ProtoMap.js.map