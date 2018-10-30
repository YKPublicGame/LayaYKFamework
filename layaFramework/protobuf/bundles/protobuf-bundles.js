var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.netpack = (function() {

    /**
     * Namespace netpack.
     * @exports netpack
     * @namespace
     */
    var netpack = {};

    netpack.test = (function() {

        /**
         * Properties of a test.
         * @memberof netpack
         * @interface Itest
         * @property {string|null} [str] test str
         */

        /**
         * Constructs a new test.
         * @memberof netpack
         * @classdesc Represents a test.
         * @implements Itest
         * @constructor
         * @param {netpack.Itest=} [properties] Properties to set
         */
        function test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * test str.
         * @member {string} str
         * @memberof netpack.test
         * @instance
         */
        test.prototype.str = "";

        /**
         * Creates a new test instance using the specified properties.
         * @function create
         * @memberof netpack.test
         * @static
         * @param {netpack.Itest=} [properties] Properties to set
         * @returns {netpack.test} test instance
         */
        test.create = function create(properties) {
            return new test(properties);
        };

        /**
         * Encodes the specified test message. Does not implicitly {@link netpack.test.verify|verify} messages.
         * @function encode
         * @memberof netpack.test
         * @static
         * @param {netpack.Itest} message test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.str != null && message.hasOwnProperty("str"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
            return writer;
        };

        /**
         * Encodes the specified test message, length delimited. Does not implicitly {@link netpack.test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.test
         * @static
         * @param {netpack.Itest} message test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a test message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.test} test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.str = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.test} test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a test message.
         * @function verify
         * @memberof netpack.test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.str != null && message.hasOwnProperty("str"))
                if (!$util.isString(message.str))
                    return "str: string expected";
            return null;
        };

        return test;
    })();

    netpack.packbase = (function() {

        /**
         * Properties of a packbase.
         * @memberof netpack
         * @interface Ipackbase
         * @property {number|null} [cmd] packbase cmd
         * @property {number|null} [msgid] packbase msgid
         * @property {number|null} [errorcode] packbase errorcode
         * @property {Uint8Array|null} [contentBuff] packbase contentBuff
         */

        /**
         * Constructs a new packbase.
         * @memberof netpack
         * @classdesc Represents a packbase.
         * @implements Ipackbase
         * @constructor
         * @param {netpack.Ipackbase=} [properties] Properties to set
         */
        function packbase(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * packbase cmd.
         * @member {number} cmd
         * @memberof netpack.packbase
         * @instance
         */
        packbase.prototype.cmd = 0;

        /**
         * packbase msgid.
         * @member {number} msgid
         * @memberof netpack.packbase
         * @instance
         */
        packbase.prototype.msgid = 0;

        /**
         * packbase errorcode.
         * @member {number} errorcode
         * @memberof netpack.packbase
         * @instance
         */
        packbase.prototype.errorcode = 0;

        /**
         * packbase contentBuff.
         * @member {Uint8Array} contentBuff
         * @memberof netpack.packbase
         * @instance
         */
        packbase.prototype.contentBuff = $util.newBuffer([]);

        /**
         * Creates a new packbase instance using the specified properties.
         * @function create
         * @memberof netpack.packbase
         * @static
         * @param {netpack.Ipackbase=} [properties] Properties to set
         * @returns {netpack.packbase} packbase instance
         */
        packbase.create = function create(properties) {
            return new packbase(properties);
        };

        /**
         * Encodes the specified packbase message. Does not implicitly {@link netpack.packbase.verify|verify} messages.
         * @function encode
         * @memberof netpack.packbase
         * @static
         * @param {netpack.Ipackbase} message packbase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        packbase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.msgid);
            if (message.errorcode != null && message.hasOwnProperty("errorcode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.errorcode);
            if (message.contentBuff != null && message.hasOwnProperty("contentBuff"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.contentBuff);
            return writer;
        };

        /**
         * Encodes the specified packbase message, length delimited. Does not implicitly {@link netpack.packbase.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.packbase
         * @static
         * @param {netpack.Ipackbase} message packbase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        packbase.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a packbase message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.packbase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.packbase} packbase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        packbase.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.packbase();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.msgid = reader.int32();
                    break;
                case 3:
                    message.errorcode = reader.int32();
                    break;
                case 4:
                    message.contentBuff = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a packbase message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.packbase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.packbase} packbase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        packbase.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a packbase message.
         * @function verify
         * @memberof netpack.packbase
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        packbase.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid))
                    return "msgid: integer expected";
            if (message.errorcode != null && message.hasOwnProperty("errorcode"))
                if (!$util.isInteger(message.errorcode))
                    return "errorcode: integer expected";
            if (message.contentBuff != null && message.hasOwnProperty("contentBuff"))
                if (!(message.contentBuff && typeof message.contentBuff.length === "number" || $util.isString(message.contentBuff)))
                    return "contentBuff: buffer expected";
            return null;
        };

        return packbase;
    })();

    netpack.UserData = (function() {

        /**
         * Properties of a UserData.
         * @memberof netpack
         * @interface IUserData
         * @property {number|null} [roleId] UserData roleId
         * @property {string|null} [nickName] UserData nickName
         * @property {string|null} [headUrl] UserData headUrl
         * @property {number|null} [sex] UserData sex
         * @property {string|null} [signature] UserData signature
         * @property {number|null} [constellation] UserData constellation
         * @property {string|null} [county] UserData county
         * @property {string|null} [city] UserData city
         * @property {string|null} [weChat] UserData weChat
         * @property {number|null} [gold] UserData gold
         * @property {number|null} [diamond] UserData diamond
         * @property {number|null} [playerNum] UserData playerNum
         * @property {number|null} [winNum] UserData winNum
         * @property {string|null} [awardNum] UserData awardNum
         */

        /**
         * Constructs a new UserData.
         * @memberof netpack
         * @classdesc Represents a UserData.
         * @implements IUserData
         * @constructor
         * @param {netpack.IUserData=} [properties] Properties to set
         */
        function UserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserData roleId.
         * @member {number} roleId
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.roleId = 0;

        /**
         * UserData nickName.
         * @member {string} nickName
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.nickName = "";

        /**
         * UserData headUrl.
         * @member {string} headUrl
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.headUrl = "";

        /**
         * UserData sex.
         * @member {number} sex
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.sex = 0;

        /**
         * UserData signature.
         * @member {string} signature
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.signature = "";

        /**
         * UserData constellation.
         * @member {number} constellation
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.constellation = 0;

        /**
         * UserData county.
         * @member {string} county
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.county = "";

        /**
         * UserData city.
         * @member {string} city
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.city = "";

        /**
         * UserData weChat.
         * @member {string} weChat
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.weChat = "";

        /**
         * UserData gold.
         * @member {number} gold
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.gold = 0;

        /**
         * UserData diamond.
         * @member {number} diamond
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.diamond = 0;

        /**
         * UserData playerNum.
         * @member {number} playerNum
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.playerNum = 0;

        /**
         * UserData winNum.
         * @member {number} winNum
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.winNum = 0;

        /**
         * UserData awardNum.
         * @member {string} awardNum
         * @memberof netpack.UserData
         * @instance
         */
        UserData.prototype.awardNum = "";

        /**
         * Creates a new UserData instance using the specified properties.
         * @function create
         * @memberof netpack.UserData
         * @static
         * @param {netpack.IUserData=} [properties] Properties to set
         * @returns {netpack.UserData} UserData instance
         */
        UserData.create = function create(properties) {
            return new UserData(properties);
        };

        /**
         * Encodes the specified UserData message. Does not implicitly {@link netpack.UserData.verify|verify} messages.
         * @function encode
         * @memberof netpack.UserData
         * @static
         * @param {netpack.IUserData} message UserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            if (message.headUrl != null && message.hasOwnProperty("headUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headUrl);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.signature);
            if (message.constellation != null && message.hasOwnProperty("constellation"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.constellation);
            if (message.county != null && message.hasOwnProperty("county"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.county);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.city);
            if (message.weChat != null && message.hasOwnProperty("weChat"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.weChat);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.gold);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.diamond);
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.playerNum);
            if (message.winNum != null && message.hasOwnProperty("winNum"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.winNum);
            if (message.awardNum != null && message.hasOwnProperty("awardNum"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.awardNum);
            return writer;
        };

        /**
         * Encodes the specified UserData message, length delimited. Does not implicitly {@link netpack.UserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.UserData
         * @static
         * @param {netpack.IUserData} message UserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserData message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.UserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.UserData} UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.UserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headUrl = reader.string();
                    break;
                case 4:
                    message.sex = reader.int32();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                case 6:
                    message.constellation = reader.int32();
                    break;
                case 7:
                    message.county = reader.string();
                    break;
                case 8:
                    message.city = reader.string();
                    break;
                case 9:
                    message.weChat = reader.string();
                    break;
                case 10:
                    message.gold = reader.int32();
                    break;
                case 11:
                    message.diamond = reader.int32();
                    break;
                case 12:
                    message.playerNum = reader.int32();
                    break;
                case 13:
                    message.winNum = reader.int32();
                    break;
                case 14:
                    message.awardNum = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.UserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.UserData} UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserData message.
         * @function verify
         * @memberof netpack.UserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isInteger(message.roleId))
                    return "roleId: integer expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.headUrl != null && message.hasOwnProperty("headUrl"))
                if (!$util.isString(message.headUrl))
                    return "headUrl: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!$util.isString(message.signature))
                    return "signature: string expected";
            if (message.constellation != null && message.hasOwnProperty("constellation"))
                if (!$util.isInteger(message.constellation))
                    return "constellation: integer expected";
            if (message.county != null && message.hasOwnProperty("county"))
                if (!$util.isString(message.county))
                    return "county: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            if (message.weChat != null && message.hasOwnProperty("weChat"))
                if (!$util.isString(message.weChat))
                    return "weChat: string expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                if (!$util.isInteger(message.playerNum))
                    return "playerNum: integer expected";
            if (message.winNum != null && message.hasOwnProperty("winNum"))
                if (!$util.isInteger(message.winNum))
                    return "winNum: integer expected";
            if (message.awardNum != null && message.hasOwnProperty("awardNum"))
                if (!$util.isString(message.awardNum))
                    return "awardNum: string expected";
            return null;
        };

        return UserData;
    })();

    netpack.loginReq = (function() {

        /**
         * Properties of a loginReq.
         * @memberof netpack
         * @interface IloginReq
         * @property {string|null} [token] loginReq token
         * @property {number|null} [roleid] loginReq roleid
         */

        /**
         * Constructs a new loginReq.
         * @memberof netpack
         * @classdesc Represents a loginReq.
         * @implements IloginReq
         * @constructor
         * @param {netpack.IloginReq=} [properties] Properties to set
         */
        function loginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginReq token.
         * @member {string} token
         * @memberof netpack.loginReq
         * @instance
         */
        loginReq.prototype.token = "";

        /**
         * loginReq roleid.
         * @member {number} roleid
         * @memberof netpack.loginReq
         * @instance
         */
        loginReq.prototype.roleid = 0;

        /**
         * Creates a new loginReq instance using the specified properties.
         * @function create
         * @memberof netpack.loginReq
         * @static
         * @param {netpack.IloginReq=} [properties] Properties to set
         * @returns {netpack.loginReq} loginReq instance
         */
        loginReq.create = function create(properties) {
            return new loginReq(properties);
        };

        /**
         * Encodes the specified loginReq message. Does not implicitly {@link netpack.loginReq.verify|verify} messages.
         * @function encode
         * @memberof netpack.loginReq
         * @static
         * @param {netpack.IloginReq} message loginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roleid);
            return writer;
        };

        /**
         * Encodes the specified loginReq message, length delimited. Does not implicitly {@link netpack.loginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.loginReq
         * @static
         * @param {netpack.IloginReq} message loginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginReq message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.loginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.loginReq} loginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.loginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.roleid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.loginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.loginReq} loginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginReq message.
         * @function verify
         * @memberof netpack.loginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                if (!$util.isInteger(message.roleid))
                    return "roleid: integer expected";
            return null;
        };

        return loginReq;
    })();

    netpack.loginResp = (function() {

        /**
         * Properties of a loginResp.
         * @memberof netpack
         * @interface IloginResp
         * @property {netpack.IUserData|null} [roleinfo] loginResp roleinfo
         */

        /**
         * Constructs a new loginResp.
         * @memberof netpack
         * @classdesc Represents a loginResp.
         * @implements IloginResp
         * @constructor
         * @param {netpack.IloginResp=} [properties] Properties to set
         */
        function loginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginResp roleinfo.
         * @member {netpack.IUserData|null|undefined} roleinfo
         * @memberof netpack.loginResp
         * @instance
         */
        loginResp.prototype.roleinfo = null;

        /**
         * Creates a new loginResp instance using the specified properties.
         * @function create
         * @memberof netpack.loginResp
         * @static
         * @param {netpack.IloginResp=} [properties] Properties to set
         * @returns {netpack.loginResp} loginResp instance
         */
        loginResp.create = function create(properties) {
            return new loginResp(properties);
        };

        /**
         * Encodes the specified loginResp message. Does not implicitly {@link netpack.loginResp.verify|verify} messages.
         * @function encode
         * @memberof netpack.loginResp
         * @static
         * @param {netpack.IloginResp} message loginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleinfo != null && message.hasOwnProperty("roleinfo"))
                $root.netpack.UserData.encode(message.roleinfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified loginResp message, length delimited. Does not implicitly {@link netpack.loginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.loginResp
         * @static
         * @param {netpack.IloginResp} message loginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginResp message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.loginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.loginResp} loginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.loginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleinfo = $root.netpack.UserData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.loginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.loginResp} loginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginResp message.
         * @function verify
         * @memberof netpack.loginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleinfo != null && message.hasOwnProperty("roleinfo")) {
                var error = $root.netpack.UserData.verify(message.roleinfo);
                if (error)
                    return "roleinfo." + error;
            }
            return null;
        };

        return loginResp;
    })();

    netpack.tickOutEvent = (function() {

        /**
         * Properties of a tickOutEvent.
         * @memberof netpack
         * @interface ItickOutEvent
         * @property {number|null} [tickType] tickOutEvent tickType
         */

        /**
         * Constructs a new tickOutEvent.
         * @memberof netpack
         * @classdesc Represents a tickOutEvent.
         * @implements ItickOutEvent
         * @constructor
         * @param {netpack.ItickOutEvent=} [properties] Properties to set
         */
        function tickOutEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tickOutEvent tickType.
         * @member {number} tickType
         * @memberof netpack.tickOutEvent
         * @instance
         */
        tickOutEvent.prototype.tickType = 0;

        /**
         * Creates a new tickOutEvent instance using the specified properties.
         * @function create
         * @memberof netpack.tickOutEvent
         * @static
         * @param {netpack.ItickOutEvent=} [properties] Properties to set
         * @returns {netpack.tickOutEvent} tickOutEvent instance
         */
        tickOutEvent.create = function create(properties) {
            return new tickOutEvent(properties);
        };

        /**
         * Encodes the specified tickOutEvent message. Does not implicitly {@link netpack.tickOutEvent.verify|verify} messages.
         * @function encode
         * @memberof netpack.tickOutEvent
         * @static
         * @param {netpack.ItickOutEvent} message tickOutEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tickOutEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tickType != null && message.hasOwnProperty("tickType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tickType);
            return writer;
        };

        /**
         * Encodes the specified tickOutEvent message, length delimited. Does not implicitly {@link netpack.tickOutEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.tickOutEvent
         * @static
         * @param {netpack.ItickOutEvent} message tickOutEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tickOutEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tickOutEvent message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.tickOutEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.tickOutEvent} tickOutEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tickOutEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.tickOutEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tickType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tickOutEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.tickOutEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.tickOutEvent} tickOutEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tickOutEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tickOutEvent message.
         * @function verify
         * @memberof netpack.tickOutEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tickOutEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tickType != null && message.hasOwnProperty("tickType"))
                if (!$util.isInteger(message.tickType))
                    return "tickType: integer expected";
            return null;
        };

        return tickOutEvent;
    })();

    netpack.ParamConfig = (function() {

        /**
         * Properties of a ParamConfig.
         * @memberof netpack
         * @interface IParamConfig
         * @property {string|null} [name] ParamConfig name
         * @property {number|null} [value] ParamConfig value
         */

        /**
         * Constructs a new ParamConfig.
         * @memberof netpack
         * @classdesc Represents a ParamConfig.
         * @implements IParamConfig
         * @constructor
         * @param {netpack.IParamConfig=} [properties] Properties to set
         */
        function ParamConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamConfig name.
         * @member {string} name
         * @memberof netpack.ParamConfig
         * @instance
         */
        ParamConfig.prototype.name = "";

        /**
         * ParamConfig value.
         * @member {number} value
         * @memberof netpack.ParamConfig
         * @instance
         */
        ParamConfig.prototype.value = 0;

        /**
         * Creates a new ParamConfig instance using the specified properties.
         * @function create
         * @memberof netpack.ParamConfig
         * @static
         * @param {netpack.IParamConfig=} [properties] Properties to set
         * @returns {netpack.ParamConfig} ParamConfig instance
         */
        ParamConfig.create = function create(properties) {
            return new ParamConfig(properties);
        };

        /**
         * Encodes the specified ParamConfig message. Does not implicitly {@link netpack.ParamConfig.verify|verify} messages.
         * @function encode
         * @memberof netpack.ParamConfig
         * @static
         * @param {netpack.IParamConfig} message ParamConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified ParamConfig message, length delimited. Does not implicitly {@link netpack.ParamConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.ParamConfig
         * @static
         * @param {netpack.IParamConfig} message ParamConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamConfig message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.ParamConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.ParamConfig} ParamConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.ParamConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParamConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.ParamConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.ParamConfig} ParamConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamConfig message.
         * @function verify
         * @memberof netpack.ParamConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        return ParamConfig;
    })();

    netpack.PrivateRoomInfo = (function() {

        /**
         * Properties of a PrivateRoomInfo.
         * @memberof netpack
         * @interface IPrivateRoomInfo
         * @property {Array.<netpack.IParamConfig>|null} [param] PrivateRoomInfo param
         * @property {number|null} [roomid] PrivateRoomInfo roomid
         * @property {number|null} [ownerid] PrivateRoomInfo ownerid
         * @property {number|null} [dealNum] PrivateRoomInfo dealNum
         * @property {number|null} [roleNum] PrivateRoomInfo roleNum
         * @property {number|null} [gameid] PrivateRoomInfo gameid
         */

        /**
         * Constructs a new PrivateRoomInfo.
         * @memberof netpack
         * @classdesc Represents a PrivateRoomInfo.
         * @implements IPrivateRoomInfo
         * @constructor
         * @param {netpack.IPrivateRoomInfo=} [properties] Properties to set
         */
        function PrivateRoomInfo(properties) {
            this.param = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateRoomInfo param.
         * @member {Array.<netpack.IParamConfig>} param
         * @memberof netpack.PrivateRoomInfo
         * @instance
         */
        PrivateRoomInfo.prototype.param = $util.emptyArray;

        /**
         * PrivateRoomInfo roomid.
         * @member {number} roomid
         * @memberof netpack.PrivateRoomInfo
         * @instance
         */
        PrivateRoomInfo.prototype.roomid = 0;

        /**
         * PrivateRoomInfo ownerid.
         * @member {number} ownerid
         * @memberof netpack.PrivateRoomInfo
         * @instance
         */
        PrivateRoomInfo.prototype.ownerid = 0;

        /**
         * PrivateRoomInfo dealNum.
         * @member {number} dealNum
         * @memberof netpack.PrivateRoomInfo
         * @instance
         */
        PrivateRoomInfo.prototype.dealNum = 0;

        /**
         * PrivateRoomInfo roleNum.
         * @member {number} roleNum
         * @memberof netpack.PrivateRoomInfo
         * @instance
         */
        PrivateRoomInfo.prototype.roleNum = 0;

        /**
         * PrivateRoomInfo gameid.
         * @member {number} gameid
         * @memberof netpack.PrivateRoomInfo
         * @instance
         */
        PrivateRoomInfo.prototype.gameid = 0;

        /**
         * Creates a new PrivateRoomInfo instance using the specified properties.
         * @function create
         * @memberof netpack.PrivateRoomInfo
         * @static
         * @param {netpack.IPrivateRoomInfo=} [properties] Properties to set
         * @returns {netpack.PrivateRoomInfo} PrivateRoomInfo instance
         */
        PrivateRoomInfo.create = function create(properties) {
            return new PrivateRoomInfo(properties);
        };

        /**
         * Encodes the specified PrivateRoomInfo message. Does not implicitly {@link netpack.PrivateRoomInfo.verify|verify} messages.
         * @function encode
         * @memberof netpack.PrivateRoomInfo
         * @static
         * @param {netpack.IPrivateRoomInfo} message PrivateRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateRoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.param != null && message.param.length)
                for (var i = 0; i < message.param.length; ++i)
                    $root.netpack.ParamConfig.encode(message.param[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomid);
            if (message.ownerid != null && message.hasOwnProperty("ownerid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ownerid);
            if (message.dealNum != null && message.hasOwnProperty("dealNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dealNum);
            if (message.roleNum != null && message.hasOwnProperty("roleNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roleNum);
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameid);
            return writer;
        };

        /**
         * Encodes the specified PrivateRoomInfo message, length delimited. Does not implicitly {@link netpack.PrivateRoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.PrivateRoomInfo
         * @static
         * @param {netpack.IPrivateRoomInfo} message PrivateRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateRoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateRoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.PrivateRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.PrivateRoomInfo} PrivateRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateRoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.PrivateRoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.param && message.param.length))
                        message.param = [];
                    message.param.push($root.netpack.ParamConfig.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.roomid = reader.int32();
                    break;
                case 3:
                    message.ownerid = reader.int32();
                    break;
                case 4:
                    message.dealNum = reader.int32();
                    break;
                case 5:
                    message.roleNum = reader.int32();
                    break;
                case 6:
                    message.gameid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateRoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.PrivateRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.PrivateRoomInfo} PrivateRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateRoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivateRoomInfo message.
         * @function verify
         * @memberof netpack.PrivateRoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivateRoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.param != null && message.hasOwnProperty("param")) {
                if (!Array.isArray(message.param))
                    return "param: array expected";
                for (var i = 0; i < message.param.length; ++i) {
                    var error = $root.netpack.ParamConfig.verify(message.param[i]);
                    if (error)
                        return "param." + error;
                }
            }
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (!$util.isInteger(message.roomid))
                    return "roomid: integer expected";
            if (message.ownerid != null && message.hasOwnProperty("ownerid"))
                if (!$util.isInteger(message.ownerid))
                    return "ownerid: integer expected";
            if (message.dealNum != null && message.hasOwnProperty("dealNum"))
                if (!$util.isInteger(message.dealNum))
                    return "dealNum: integer expected";
            if (message.roleNum != null && message.hasOwnProperty("roleNum"))
                if (!$util.isInteger(message.roleNum))
                    return "roleNum: integer expected";
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                if (!$util.isInteger(message.gameid))
                    return "gameid: integer expected";
            return null;
        };

        return PrivateRoomInfo;
    })();

    netpack.roomIdData = (function() {

        /**
         * Properties of a roomIdData.
         * @memberof netpack
         * @interface IroomIdData
         * @property {number|null} [roomId] roomIdData roomId
         */

        /**
         * Constructs a new roomIdData.
         * @memberof netpack
         * @classdesc Represents a roomIdData.
         * @implements IroomIdData
         * @constructor
         * @param {netpack.IroomIdData=} [properties] Properties to set
         */
        function roomIdData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * roomIdData roomId.
         * @member {number} roomId
         * @memberof netpack.roomIdData
         * @instance
         */
        roomIdData.prototype.roomId = 0;

        /**
         * Creates a new roomIdData instance using the specified properties.
         * @function create
         * @memberof netpack.roomIdData
         * @static
         * @param {netpack.IroomIdData=} [properties] Properties to set
         * @returns {netpack.roomIdData} roomIdData instance
         */
        roomIdData.create = function create(properties) {
            return new roomIdData(properties);
        };

        /**
         * Encodes the specified roomIdData message. Does not implicitly {@link netpack.roomIdData.verify|verify} messages.
         * @function encode
         * @memberof netpack.roomIdData
         * @static
         * @param {netpack.IroomIdData} message roomIdData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        roomIdData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified roomIdData message, length delimited. Does not implicitly {@link netpack.roomIdData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.roomIdData
         * @static
         * @param {netpack.IroomIdData} message roomIdData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        roomIdData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a roomIdData message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.roomIdData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.roomIdData} roomIdData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        roomIdData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.roomIdData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a roomIdData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.roomIdData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.roomIdData} roomIdData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        roomIdData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a roomIdData message.
         * @function verify
         * @memberof netpack.roomIdData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        roomIdData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        return roomIdData;
    })();

    netpack.PrivateDeskInfoReply = (function() {

        /**
         * Properties of a PrivateDeskInfoReply.
         * @memberof netpack
         * @interface IPrivateDeskInfoReply
         * @property {number|null} [dealId] PrivateDeskInfoReply dealId
         * @property {number|null} [state] PrivateDeskInfoReply state
         * @property {number|null} [banker] PrivateDeskInfoReply banker
         * @property {Array.<netpack.IMatchPlayer>|null} [matchPlayers] PrivateDeskInfoReply matchPlayers
         * @property {number|null} [curSeat] PrivateDeskInfoReply curSeat
         * @property {Array.<number>|null} [lowCards] PrivateDeskInfoReply lowCards
         * @property {number|null} [nowMultiple] PrivateDeskInfoReply nowMultiple
         * @property {Array.<netpack.IOpEvent>|null} [opInfos] PrivateDeskInfoReply opInfos
         * @property {number|null} [dzState] PrivateDeskInfoReply dzState
         * @property {netpack.IPrivateRoomInfo|null} [roomInfo] PrivateDeskInfoReply roomInfo
         */

        /**
         * Constructs a new PrivateDeskInfoReply.
         * @memberof netpack
         * @classdesc Represents a PrivateDeskInfoReply.
         * @implements IPrivateDeskInfoReply
         * @constructor
         * @param {netpack.IPrivateDeskInfoReply=} [properties] Properties to set
         */
        function PrivateDeskInfoReply(properties) {
            this.matchPlayers = [];
            this.lowCards = [];
            this.opInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateDeskInfoReply dealId.
         * @member {number} dealId
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.dealId = 0;

        /**
         * PrivateDeskInfoReply state.
         * @member {number} state
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.state = 0;

        /**
         * PrivateDeskInfoReply banker.
         * @member {number} banker
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.banker = 0;

        /**
         * PrivateDeskInfoReply matchPlayers.
         * @member {Array.<netpack.IMatchPlayer>} matchPlayers
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.matchPlayers = $util.emptyArray;

        /**
         * PrivateDeskInfoReply curSeat.
         * @member {number} curSeat
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.curSeat = 0;

        /**
         * PrivateDeskInfoReply lowCards.
         * @member {Array.<number>} lowCards
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.lowCards = $util.emptyArray;

        /**
         * PrivateDeskInfoReply nowMultiple.
         * @member {number} nowMultiple
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.nowMultiple = 0;

        /**
         * PrivateDeskInfoReply opInfos.
         * @member {Array.<netpack.IOpEvent>} opInfos
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.opInfos = $util.emptyArray;

        /**
         * PrivateDeskInfoReply dzState.
         * @member {number} dzState
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.dzState = 0;

        /**
         * PrivateDeskInfoReply roomInfo.
         * @member {netpack.IPrivateRoomInfo|null|undefined} roomInfo
         * @memberof netpack.PrivateDeskInfoReply
         * @instance
         */
        PrivateDeskInfoReply.prototype.roomInfo = null;

        /**
         * Creates a new PrivateDeskInfoReply instance using the specified properties.
         * @function create
         * @memberof netpack.PrivateDeskInfoReply
         * @static
         * @param {netpack.IPrivateDeskInfoReply=} [properties] Properties to set
         * @returns {netpack.PrivateDeskInfoReply} PrivateDeskInfoReply instance
         */
        PrivateDeskInfoReply.create = function create(properties) {
            return new PrivateDeskInfoReply(properties);
        };

        /**
         * Encodes the specified PrivateDeskInfoReply message. Does not implicitly {@link netpack.PrivateDeskInfoReply.verify|verify} messages.
         * @function encode
         * @memberof netpack.PrivateDeskInfoReply
         * @static
         * @param {netpack.IPrivateDeskInfoReply} message PrivateDeskInfoReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateDeskInfoReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dealId != null && message.hasOwnProperty("dealId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dealId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.banker != null && message.hasOwnProperty("banker"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.banker);
            if (message.matchPlayers != null && message.matchPlayers.length)
                for (var i = 0; i < message.matchPlayers.length; ++i)
                    $root.netpack.MatchPlayer.encode(message.matchPlayers[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.curSeat != null && message.hasOwnProperty("curSeat"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.curSeat);
            if (message.lowCards != null && message.lowCards.length)
                for (var i = 0; i < message.lowCards.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.lowCards[i]);
            if (message.nowMultiple != null && message.hasOwnProperty("nowMultiple"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.nowMultiple);
            if (message.opInfos != null && message.opInfos.length)
                for (var i = 0; i < message.opInfos.length; ++i)
                    $root.netpack.OpEvent.encode(message.opInfos[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.dzState != null && message.hasOwnProperty("dzState"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.dzState);
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                $root.netpack.PrivateRoomInfo.encode(message.roomInfo, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PrivateDeskInfoReply message, length delimited. Does not implicitly {@link netpack.PrivateDeskInfoReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.PrivateDeskInfoReply
         * @static
         * @param {netpack.IPrivateDeskInfoReply} message PrivateDeskInfoReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateDeskInfoReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateDeskInfoReply message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.PrivateDeskInfoReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.PrivateDeskInfoReply} PrivateDeskInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateDeskInfoReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.PrivateDeskInfoReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dealId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.banker = reader.int32();
                    break;
                case 4:
                    if (!(message.matchPlayers && message.matchPlayers.length))
                        message.matchPlayers = [];
                    message.matchPlayers.push($root.netpack.MatchPlayer.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.curSeat = reader.int32();
                    break;
                case 6:
                    if (!(message.lowCards && message.lowCards.length))
                        message.lowCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.lowCards.push(reader.int32());
                    } else
                        message.lowCards.push(reader.int32());
                    break;
                case 7:
                    message.nowMultiple = reader.int32();
                    break;
                case 8:
                    if (!(message.opInfos && message.opInfos.length))
                        message.opInfos = [];
                    message.opInfos.push($root.netpack.OpEvent.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.dzState = reader.int32();
                    break;
                case 10:
                    message.roomInfo = $root.netpack.PrivateRoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateDeskInfoReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.PrivateDeskInfoReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.PrivateDeskInfoReply} PrivateDeskInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateDeskInfoReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivateDeskInfoReply message.
         * @function verify
         * @memberof netpack.PrivateDeskInfoReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivateDeskInfoReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dealId != null && message.hasOwnProperty("dealId"))
                if (!$util.isInteger(message.dealId))
                    return "dealId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.banker != null && message.hasOwnProperty("banker"))
                if (!$util.isInteger(message.banker))
                    return "banker: integer expected";
            if (message.matchPlayers != null && message.hasOwnProperty("matchPlayers")) {
                if (!Array.isArray(message.matchPlayers))
                    return "matchPlayers: array expected";
                for (var i = 0; i < message.matchPlayers.length; ++i) {
                    var error = $root.netpack.MatchPlayer.verify(message.matchPlayers[i]);
                    if (error)
                        return "matchPlayers." + error;
                }
            }
            if (message.curSeat != null && message.hasOwnProperty("curSeat"))
                if (!$util.isInteger(message.curSeat))
                    return "curSeat: integer expected";
            if (message.lowCards != null && message.hasOwnProperty("lowCards")) {
                if (!Array.isArray(message.lowCards))
                    return "lowCards: array expected";
                for (var i = 0; i < message.lowCards.length; ++i)
                    if (!$util.isInteger(message.lowCards[i]))
                        return "lowCards: integer[] expected";
            }
            if (message.nowMultiple != null && message.hasOwnProperty("nowMultiple"))
                if (!$util.isInteger(message.nowMultiple))
                    return "nowMultiple: integer expected";
            if (message.opInfos != null && message.hasOwnProperty("opInfos")) {
                if (!Array.isArray(message.opInfos))
                    return "opInfos: array expected";
                for (var i = 0; i < message.opInfos.length; ++i) {
                    var error = $root.netpack.OpEvent.verify(message.opInfos[i]);
                    if (error)
                        return "opInfos." + error;
                }
            }
            if (message.dzState != null && message.hasOwnProperty("dzState"))
                if (!$util.isInteger(message.dzState))
                    return "dzState: integer expected";
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                var error = $root.netpack.PrivateRoomInfo.verify(message.roomInfo);
                if (error)
                    return "roomInfo." + error;
            }
            return null;
        };

        return PrivateDeskInfoReply;
    })();

    netpack.MatchPlayer = (function() {

        /**
         * Properties of a MatchPlayer.
         * @memberof netpack
         * @interface IMatchPlayer
         * @property {number|null} [seat] MatchPlayer seat
         * @property {number|null} [score] MatchPlayer score
         * @property {Array.<number>|null} [cards] MatchPlayer cards
         * @property {number|null} [cardsNum] MatchPlayer cardsNum
         * @property {boolean|null} [isDZ] MatchPlayer isDZ
         * @property {number|null} [boomNums] MatchPlayer boomNums
         * @property {Array.<number>|null} [outCards] MatchPlayer outCards
         * @property {netpack.IUserData|null} [userData] MatchPlayer userData
         * @property {number|null} [state] MatchPlayer state
         */

        /**
         * Constructs a new MatchPlayer.
         * @memberof netpack
         * @classdesc Represents a MatchPlayer.
         * @implements IMatchPlayer
         * @constructor
         * @param {netpack.IMatchPlayer=} [properties] Properties to set
         */
        function MatchPlayer(properties) {
            this.cards = [];
            this.outCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchPlayer seat.
         * @member {number} seat
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.seat = 0;

        /**
         * MatchPlayer score.
         * @member {number} score
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.score = 0;

        /**
         * MatchPlayer cards.
         * @member {Array.<number>} cards
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.cards = $util.emptyArray;

        /**
         * MatchPlayer cardsNum.
         * @member {number} cardsNum
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.cardsNum = 0;

        /**
         * MatchPlayer isDZ.
         * @member {boolean} isDZ
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.isDZ = false;

        /**
         * MatchPlayer boomNums.
         * @member {number} boomNums
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.boomNums = 0;

        /**
         * MatchPlayer outCards.
         * @member {Array.<number>} outCards
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.outCards = $util.emptyArray;

        /**
         * MatchPlayer userData.
         * @member {netpack.IUserData|null|undefined} userData
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.userData = null;

        /**
         * MatchPlayer state.
         * @member {number} state
         * @memberof netpack.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.state = 0;

        /**
         * Creates a new MatchPlayer instance using the specified properties.
         * @function create
         * @memberof netpack.MatchPlayer
         * @static
         * @param {netpack.IMatchPlayer=} [properties] Properties to set
         * @returns {netpack.MatchPlayer} MatchPlayer instance
         */
        MatchPlayer.create = function create(properties) {
            return new MatchPlayer(properties);
        };

        /**
         * Encodes the specified MatchPlayer message. Does not implicitly {@link netpack.MatchPlayer.verify|verify} messages.
         * @function encode
         * @memberof netpack.MatchPlayer
         * @static
         * @param {netpack.IMatchPlayer} message MatchPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seat != null && message.hasOwnProperty("seat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cards[i]);
            if (message.cardsNum != null && message.hasOwnProperty("cardsNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cardsNum);
            if (message.isDZ != null && message.hasOwnProperty("isDZ"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isDZ);
            if (message.boomNums != null && message.hasOwnProperty("boomNums"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.boomNums);
            if (message.outCards != null && message.outCards.length)
                for (var i = 0; i < message.outCards.length; ++i)
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.outCards[i]);
            if (message.userData != null && message.hasOwnProperty("userData"))
                $root.netpack.UserData.encode(message.userData, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified MatchPlayer message, length delimited. Does not implicitly {@link netpack.MatchPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.MatchPlayer
         * @static
         * @param {netpack.IMatchPlayer} message MatchPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.MatchPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.MatchPlayer} MatchPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.MatchPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                case 2:
                    message.score = reader.int32();
                    break;
                case 3:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                case 4:
                    message.cardsNum = reader.int32();
                    break;
                case 5:
                    message.isDZ = reader.bool();
                    break;
                case 6:
                    message.boomNums = reader.int32();
                    break;
                case 7:
                    if (!(message.outCards && message.outCards.length))
                        message.outCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.outCards.push(reader.int32());
                    } else
                        message.outCards.push(reader.int32());
                    break;
                case 8:
                    message.userData = $root.netpack.UserData.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.MatchPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.MatchPlayer} MatchPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchPlayer message.
         * @function verify
         * @memberof netpack.MatchPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            if (message.cardsNum != null && message.hasOwnProperty("cardsNum"))
                if (!$util.isInteger(message.cardsNum))
                    return "cardsNum: integer expected";
            if (message.isDZ != null && message.hasOwnProperty("isDZ"))
                if (typeof message.isDZ !== "boolean")
                    return "isDZ: boolean expected";
            if (message.boomNums != null && message.hasOwnProperty("boomNums"))
                if (!$util.isInteger(message.boomNums))
                    return "boomNums: integer expected";
            if (message.outCards != null && message.hasOwnProperty("outCards")) {
                if (!Array.isArray(message.outCards))
                    return "outCards: array expected";
                for (var i = 0; i < message.outCards.length; ++i)
                    if (!$util.isInteger(message.outCards[i]))
                        return "outCards: integer[] expected";
            }
            if (message.userData != null && message.hasOwnProperty("userData")) {
                var error = $root.netpack.UserData.verify(message.userData);
                if (error)
                    return "userData." + error;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        return MatchPlayer;
    })();

    netpack.CallOpInfo = (function() {

        /**
         * Properties of a CallOpInfo.
         * @memberof netpack
         * @interface ICallOpInfo
         * @property {number|null} [seat] CallOpInfo seat
         * @property {number|null} [value] CallOpInfo value
         */

        /**
         * Constructs a new CallOpInfo.
         * @memberof netpack
         * @classdesc Represents a CallOpInfo.
         * @implements ICallOpInfo
         * @constructor
         * @param {netpack.ICallOpInfo=} [properties] Properties to set
         */
        function CallOpInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CallOpInfo seat.
         * @member {number} seat
         * @memberof netpack.CallOpInfo
         * @instance
         */
        CallOpInfo.prototype.seat = 0;

        /**
         * CallOpInfo value.
         * @member {number} value
         * @memberof netpack.CallOpInfo
         * @instance
         */
        CallOpInfo.prototype.value = 0;

        /**
         * Creates a new CallOpInfo instance using the specified properties.
         * @function create
         * @memberof netpack.CallOpInfo
         * @static
         * @param {netpack.ICallOpInfo=} [properties] Properties to set
         * @returns {netpack.CallOpInfo} CallOpInfo instance
         */
        CallOpInfo.create = function create(properties) {
            return new CallOpInfo(properties);
        };

        /**
         * Encodes the specified CallOpInfo message. Does not implicitly {@link netpack.CallOpInfo.verify|verify} messages.
         * @function encode
         * @memberof netpack.CallOpInfo
         * @static
         * @param {netpack.ICallOpInfo} message CallOpInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallOpInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seat != null && message.hasOwnProperty("seat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified CallOpInfo message, length delimited. Does not implicitly {@link netpack.CallOpInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.CallOpInfo
         * @static
         * @param {netpack.ICallOpInfo} message CallOpInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallOpInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CallOpInfo message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.CallOpInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.CallOpInfo} CallOpInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallOpInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.CallOpInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CallOpInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.CallOpInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.CallOpInfo} CallOpInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallOpInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CallOpInfo message.
         * @function verify
         * @memberof netpack.CallOpInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CallOpInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        return CallOpInfo;
    })();

    netpack.OpReq = (function() {

        /**
         * Properties of an OpReq.
         * @memberof netpack
         * @interface IOpReq
         * @property {number|null} [weaveKind] OpReq weaveKind
         * @property {number|null} [value] OpReq value
         * @property {Array.<number>|null} [cards] OpReq cards
         */

        /**
         * Constructs a new OpReq.
         * @memberof netpack
         * @classdesc Represents an OpReq.
         * @implements IOpReq
         * @constructor
         * @param {netpack.IOpReq=} [properties] Properties to set
         */
        function OpReq(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpReq weaveKind.
         * @member {number} weaveKind
         * @memberof netpack.OpReq
         * @instance
         */
        OpReq.prototype.weaveKind = 0;

        /**
         * OpReq value.
         * @member {number} value
         * @memberof netpack.OpReq
         * @instance
         */
        OpReq.prototype.value = 0;

        /**
         * OpReq cards.
         * @member {Array.<number>} cards
         * @memberof netpack.OpReq
         * @instance
         */
        OpReq.prototype.cards = $util.emptyArray;

        /**
         * Creates a new OpReq instance using the specified properties.
         * @function create
         * @memberof netpack.OpReq
         * @static
         * @param {netpack.IOpReq=} [properties] Properties to set
         * @returns {netpack.OpReq} OpReq instance
         */
        OpReq.create = function create(properties) {
            return new OpReq(properties);
        };

        /**
         * Encodes the specified OpReq message. Does not implicitly {@link netpack.OpReq.verify|verify} messages.
         * @function encode
         * @memberof netpack.OpReq
         * @static
         * @param {netpack.IOpReq} message OpReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weaveKind != null && message.hasOwnProperty("weaveKind"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.weaveKind);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cards[i]);
            return writer;
        };

        /**
         * Encodes the specified OpReq message, length delimited. Does not implicitly {@link netpack.OpReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.OpReq
         * @static
         * @param {netpack.IOpReq} message OpReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpReq message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.OpReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.OpReq} OpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.OpReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.weaveKind = reader.int32();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                case 3:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OpReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.OpReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.OpReq} OpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpReq message.
         * @function verify
         * @memberof netpack.OpReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weaveKind != null && message.hasOwnProperty("weaveKind"))
                if (!$util.isInteger(message.weaveKind))
                    return "weaveKind: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        return OpReq;
    })();

    netpack.OpEvent = (function() {

        /**
         * Properties of an OpEvent.
         * @memberof netpack
         * @interface IOpEvent
         * @property {number|null} [weaveKind] OpEvent weaveKind
         * @property {number|null} [value] OpEvent value
         * @property {number|null} [seat] OpEvent seat
         * @property {Array.<number>|null} [cards] OpEvent cards
         */

        /**
         * Constructs a new OpEvent.
         * @memberof netpack
         * @classdesc Represents an OpEvent.
         * @implements IOpEvent
         * @constructor
         * @param {netpack.IOpEvent=} [properties] Properties to set
         */
        function OpEvent(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpEvent weaveKind.
         * @member {number} weaveKind
         * @memberof netpack.OpEvent
         * @instance
         */
        OpEvent.prototype.weaveKind = 0;

        /**
         * OpEvent value.
         * @member {number} value
         * @memberof netpack.OpEvent
         * @instance
         */
        OpEvent.prototype.value = 0;

        /**
         * OpEvent seat.
         * @member {number} seat
         * @memberof netpack.OpEvent
         * @instance
         */
        OpEvent.prototype.seat = 0;

        /**
         * OpEvent cards.
         * @member {Array.<number>} cards
         * @memberof netpack.OpEvent
         * @instance
         */
        OpEvent.prototype.cards = $util.emptyArray;

        /**
         * Creates a new OpEvent instance using the specified properties.
         * @function create
         * @memberof netpack.OpEvent
         * @static
         * @param {netpack.IOpEvent=} [properties] Properties to set
         * @returns {netpack.OpEvent} OpEvent instance
         */
        OpEvent.create = function create(properties) {
            return new OpEvent(properties);
        };

        /**
         * Encodes the specified OpEvent message. Does not implicitly {@link netpack.OpEvent.verify|verify} messages.
         * @function encode
         * @memberof netpack.OpEvent
         * @static
         * @param {netpack.IOpEvent} message OpEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weaveKind != null && message.hasOwnProperty("weaveKind"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.weaveKind);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            if (message.seat != null && message.hasOwnProperty("seat"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seat);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cards[i]);
            return writer;
        };

        /**
         * Encodes the specified OpEvent message, length delimited. Does not implicitly {@link netpack.OpEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.OpEvent
         * @static
         * @param {netpack.IOpEvent} message OpEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpEvent message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.OpEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.OpEvent} OpEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.OpEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.weaveKind = reader.int32();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                case 3:
                    message.seat = reader.int32();
                    break;
                case 4:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OpEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.OpEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.OpEvent} OpEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpEvent message.
         * @function verify
         * @memberof netpack.OpEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weaveKind != null && message.hasOwnProperty("weaveKind"))
                if (!$util.isInteger(message.weaveKind))
                    return "weaveKind: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        return OpEvent;
    })();

    netpack.GameStartEvent = (function() {

        /**
         * Properties of a GameStartEvent.
         * @memberof netpack
         * @interface IGameStartEvent
         * @property {Array.<netpack.IMatchPlayer>|null} [matchPlayers] GameStartEvent matchPlayers
         * @property {number|null} [curSeat] GameStartEvent curSeat
         * @property {number|null} [dzState] GameStartEvent dzState
         * @property {Array.<number>|null} [lowCards] GameStartEvent lowCards
         * @property {number|null} [laizIndex] GameStartEvent laizIndex
         */

        /**
         * Constructs a new GameStartEvent.
         * @memberof netpack
         * @classdesc Represents a GameStartEvent.
         * @implements IGameStartEvent
         * @constructor
         * @param {netpack.IGameStartEvent=} [properties] Properties to set
         */
        function GameStartEvent(properties) {
            this.matchPlayers = [];
            this.lowCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStartEvent matchPlayers.
         * @member {Array.<netpack.IMatchPlayer>} matchPlayers
         * @memberof netpack.GameStartEvent
         * @instance
         */
        GameStartEvent.prototype.matchPlayers = $util.emptyArray;

        /**
         * GameStartEvent curSeat.
         * @member {number} curSeat
         * @memberof netpack.GameStartEvent
         * @instance
         */
        GameStartEvent.prototype.curSeat = 0;

        /**
         * GameStartEvent dzState.
         * @member {number} dzState
         * @memberof netpack.GameStartEvent
         * @instance
         */
        GameStartEvent.prototype.dzState = 0;

        /**
         * GameStartEvent lowCards.
         * @member {Array.<number>} lowCards
         * @memberof netpack.GameStartEvent
         * @instance
         */
        GameStartEvent.prototype.lowCards = $util.emptyArray;

        /**
         * GameStartEvent laizIndex.
         * @member {number} laizIndex
         * @memberof netpack.GameStartEvent
         * @instance
         */
        GameStartEvent.prototype.laizIndex = 0;

        /**
         * Creates a new GameStartEvent instance using the specified properties.
         * @function create
         * @memberof netpack.GameStartEvent
         * @static
         * @param {netpack.IGameStartEvent=} [properties] Properties to set
         * @returns {netpack.GameStartEvent} GameStartEvent instance
         */
        GameStartEvent.create = function create(properties) {
            return new GameStartEvent(properties);
        };

        /**
         * Encodes the specified GameStartEvent message. Does not implicitly {@link netpack.GameStartEvent.verify|verify} messages.
         * @function encode
         * @memberof netpack.GameStartEvent
         * @static
         * @param {netpack.IGameStartEvent} message GameStartEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchPlayers != null && message.matchPlayers.length)
                for (var i = 0; i < message.matchPlayers.length; ++i)
                    $root.netpack.MatchPlayer.encode(message.matchPlayers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.curSeat != null && message.hasOwnProperty("curSeat"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curSeat);
            if (message.dzState != null && message.hasOwnProperty("dzState"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dzState);
            if (message.lowCards != null && message.lowCards.length)
                for (var i = 0; i < message.lowCards.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lowCards[i]);
            if (message.laizIndex != null && message.hasOwnProperty("laizIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.laizIndex);
            return writer;
        };

        /**
         * Encodes the specified GameStartEvent message, length delimited. Does not implicitly {@link netpack.GameStartEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.GameStartEvent
         * @static
         * @param {netpack.IGameStartEvent} message GameStartEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStartEvent message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.GameStartEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.GameStartEvent} GameStartEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.GameStartEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.matchPlayers && message.matchPlayers.length))
                        message.matchPlayers = [];
                    message.matchPlayers.push($root.netpack.MatchPlayer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.curSeat = reader.int32();
                    break;
                case 3:
                    message.dzState = reader.int32();
                    break;
                case 4:
                    if (!(message.lowCards && message.lowCards.length))
                        message.lowCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.lowCards.push(reader.int32());
                    } else
                        message.lowCards.push(reader.int32());
                    break;
                case 5:
                    message.laizIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStartEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.GameStartEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.GameStartEvent} GameStartEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStartEvent message.
         * @function verify
         * @memberof netpack.GameStartEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStartEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchPlayers != null && message.hasOwnProperty("matchPlayers")) {
                if (!Array.isArray(message.matchPlayers))
                    return "matchPlayers: array expected";
                for (var i = 0; i < message.matchPlayers.length; ++i) {
                    var error = $root.netpack.MatchPlayer.verify(message.matchPlayers[i]);
                    if (error)
                        return "matchPlayers." + error;
                }
            }
            if (message.curSeat != null && message.hasOwnProperty("curSeat"))
                if (!$util.isInteger(message.curSeat))
                    return "curSeat: integer expected";
            if (message.dzState != null && message.hasOwnProperty("dzState"))
                if (!$util.isInteger(message.dzState))
                    return "dzState: integer expected";
            if (message.lowCards != null && message.hasOwnProperty("lowCards")) {
                if (!Array.isArray(message.lowCards))
                    return "lowCards: array expected";
                for (var i = 0; i < message.lowCards.length; ++i)
                    if (!$util.isInteger(message.lowCards[i]))
                        return "lowCards: integer[] expected";
            }
            if (message.laizIndex != null && message.hasOwnProperty("laizIndex"))
                if (!$util.isInteger(message.laizIndex))
                    return "laizIndex: integer expected";
            return null;
        };

        return GameStartEvent;
    })();

    netpack.opData = (function() {

        /**
         * Properties of an opData.
         * @memberof netpack
         * @interface IopData
         * @property {number|null} [state] opData state
         */

        /**
         * Constructs a new opData.
         * @memberof netpack
         * @classdesc Represents an opData.
         * @implements IopData
         * @constructor
         * @param {netpack.IopData=} [properties] Properties to set
         */
        function opData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * opData state.
         * @member {number} state
         * @memberof netpack.opData
         * @instance
         */
        opData.prototype.state = 0;

        /**
         * Creates a new opData instance using the specified properties.
         * @function create
         * @memberof netpack.opData
         * @static
         * @param {netpack.IopData=} [properties] Properties to set
         * @returns {netpack.opData} opData instance
         */
        opData.create = function create(properties) {
            return new opData(properties);
        };

        /**
         * Encodes the specified opData message. Does not implicitly {@link netpack.opData.verify|verify} messages.
         * @function encode
         * @memberof netpack.opData
         * @static
         * @param {netpack.IopData} message opData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        opData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified opData message, length delimited. Does not implicitly {@link netpack.opData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.opData
         * @static
         * @param {netpack.IopData} message opData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        opData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an opData message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.opData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.opData} opData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        opData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.opData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an opData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.opData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.opData} opData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        opData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an opData message.
         * @function verify
         * @memberof netpack.opData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        opData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        return opData;
    })();

    netpack.DissRoleRep = (function() {

        /**
         * Properties of a DissRoleRep.
         * @memberof netpack
         * @interface IDissRoleRep
         * @property {number|null} [id] DissRoleRep id
         * @property {string|null} [nickname] DissRoleRep nickname
         * @property {number|null} [agree] DissRoleRep agree
         * @property {boolean|null} [suggest] DissRoleRep suggest
         */

        /**
         * Constructs a new DissRoleRep.
         * @memberof netpack
         * @classdesc Represents a DissRoleRep.
         * @implements IDissRoleRep
         * @constructor
         * @param {netpack.IDissRoleRep=} [properties] Properties to set
         */
        function DissRoleRep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DissRoleRep id.
         * @member {number} id
         * @memberof netpack.DissRoleRep
         * @instance
         */
        DissRoleRep.prototype.id = 0;

        /**
         * DissRoleRep nickname.
         * @member {string} nickname
         * @memberof netpack.DissRoleRep
         * @instance
         */
        DissRoleRep.prototype.nickname = "";

        /**
         * DissRoleRep agree.
         * @member {number} agree
         * @memberof netpack.DissRoleRep
         * @instance
         */
        DissRoleRep.prototype.agree = 0;

        /**
         * DissRoleRep suggest.
         * @member {boolean} suggest
         * @memberof netpack.DissRoleRep
         * @instance
         */
        DissRoleRep.prototype.suggest = false;

        /**
         * Creates a new DissRoleRep instance using the specified properties.
         * @function create
         * @memberof netpack.DissRoleRep
         * @static
         * @param {netpack.IDissRoleRep=} [properties] Properties to set
         * @returns {netpack.DissRoleRep} DissRoleRep instance
         */
        DissRoleRep.create = function create(properties) {
            return new DissRoleRep(properties);
        };

        /**
         * Encodes the specified DissRoleRep message. Does not implicitly {@link netpack.DissRoleRep.verify|verify} messages.
         * @function encode
         * @memberof netpack.DissRoleRep
         * @static
         * @param {netpack.IDissRoleRep} message DissRoleRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissRoleRep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.agree != null && message.hasOwnProperty("agree"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.agree);
            if (message.suggest != null && message.hasOwnProperty("suggest"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.suggest);
            return writer;
        };

        /**
         * Encodes the specified DissRoleRep message, length delimited. Does not implicitly {@link netpack.DissRoleRep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.DissRoleRep
         * @static
         * @param {netpack.IDissRoleRep} message DissRoleRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissRoleRep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissRoleRep message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.DissRoleRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.DissRoleRep} DissRoleRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissRoleRep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.DissRoleRep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.agree = reader.int32();
                    break;
                case 4:
                    message.suggest = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissRoleRep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.DissRoleRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.DissRoleRep} DissRoleRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissRoleRep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissRoleRep message.
         * @function verify
         * @memberof netpack.DissRoleRep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissRoleRep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.agree != null && message.hasOwnProperty("agree"))
                if (!$util.isInteger(message.agree))
                    return "agree: integer expected";
            if (message.suggest != null && message.hasOwnProperty("suggest"))
                if (typeof message.suggest !== "boolean")
                    return "suggest: boolean expected";
            return null;
        };

        return DissRoleRep;
    })();

    netpack.DissRoomData = (function() {

        /**
         * Properties of a DissRoomData.
         * @memberof netpack
         * @interface IDissRoomData
         * @property {Array.<netpack.IDissRoleRep>|null} [roles] DissRoomData roles
         * @property {number|null} [state] DissRoomData state
         * @property {number|null} [endtime] DissRoomData endtime
         * @property {number|null} [type] DissRoomData type
         */

        /**
         * Constructs a new DissRoomData.
         * @memberof netpack
         * @classdesc Represents a DissRoomData.
         * @implements IDissRoomData
         * @constructor
         * @param {netpack.IDissRoomData=} [properties] Properties to set
         */
        function DissRoomData(properties) {
            this.roles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DissRoomData roles.
         * @member {Array.<netpack.IDissRoleRep>} roles
         * @memberof netpack.DissRoomData
         * @instance
         */
        DissRoomData.prototype.roles = $util.emptyArray;

        /**
         * DissRoomData state.
         * @member {number} state
         * @memberof netpack.DissRoomData
         * @instance
         */
        DissRoomData.prototype.state = 0;

        /**
         * DissRoomData endtime.
         * @member {number} endtime
         * @memberof netpack.DissRoomData
         * @instance
         */
        DissRoomData.prototype.endtime = 0;

        /**
         * DissRoomData type.
         * @member {number} type
         * @memberof netpack.DissRoomData
         * @instance
         */
        DissRoomData.prototype.type = 0;

        /**
         * Creates a new DissRoomData instance using the specified properties.
         * @function create
         * @memberof netpack.DissRoomData
         * @static
         * @param {netpack.IDissRoomData=} [properties] Properties to set
         * @returns {netpack.DissRoomData} DissRoomData instance
         */
        DissRoomData.create = function create(properties) {
            return new DissRoomData(properties);
        };

        /**
         * Encodes the specified DissRoomData message. Does not implicitly {@link netpack.DissRoomData.verify|verify} messages.
         * @function encode
         * @memberof netpack.DissRoomData
         * @static
         * @param {netpack.IDissRoomData} message DissRoomData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissRoomData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roles != null && message.roles.length)
                for (var i = 0; i < message.roles.length; ++i)
                    $root.netpack.DissRoleRep.encode(message.roles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.endtime != null && message.hasOwnProperty("endtime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.endtime);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified DissRoomData message, length delimited. Does not implicitly {@link netpack.DissRoomData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.DissRoomData
         * @static
         * @param {netpack.IDissRoomData} message DissRoomData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissRoomData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissRoomData message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.DissRoomData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.DissRoomData} DissRoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissRoomData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.DissRoomData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roles && message.roles.length))
                        message.roles = [];
                    message.roles.push($root.netpack.DissRoleRep.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.endtime = reader.int32();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissRoomData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.DissRoomData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.DissRoomData} DissRoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissRoomData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissRoomData message.
         * @function verify
         * @memberof netpack.DissRoomData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissRoomData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roles != null && message.hasOwnProperty("roles")) {
                if (!Array.isArray(message.roles))
                    return "roles: array expected";
                for (var i = 0; i < message.roles.length; ++i) {
                    var error = $root.netpack.DissRoleRep.verify(message.roles[i]);
                    if (error)
                        return "roles." + error;
                }
            }
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.endtime != null && message.hasOwnProperty("endtime"))
                if (!$util.isInteger(message.endtime))
                    return "endtime: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        return DissRoomData;
    })();

    netpack.GameOverPlayerData = (function() {

        /**
         * Properties of a GameOverPlayerData.
         * @memberof netpack
         * @interface IGameOverPlayerData
         * @property {number|null} [seat] GameOverPlayerData seat
         * @property {Array.<number>|null} [cards] GameOverPlayerData cards
         * @property {number|null} [curScore] GameOverPlayerData curScore
         * @property {number|null} [score] GameOverPlayerData score
         * @property {number|null} [boom] GameOverPlayerData boom
         * @property {number|null} [overState] GameOverPlayerData overState
         */

        /**
         * Constructs a new GameOverPlayerData.
         * @memberof netpack
         * @classdesc Represents a GameOverPlayerData.
         * @implements IGameOverPlayerData
         * @constructor
         * @param {netpack.IGameOverPlayerData=} [properties] Properties to set
         */
        function GameOverPlayerData(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameOverPlayerData seat.
         * @member {number} seat
         * @memberof netpack.GameOverPlayerData
         * @instance
         */
        GameOverPlayerData.prototype.seat = 0;

        /**
         * GameOverPlayerData cards.
         * @member {Array.<number>} cards
         * @memberof netpack.GameOverPlayerData
         * @instance
         */
        GameOverPlayerData.prototype.cards = $util.emptyArray;

        /**
         * GameOverPlayerData curScore.
         * @member {number} curScore
         * @memberof netpack.GameOverPlayerData
         * @instance
         */
        GameOverPlayerData.prototype.curScore = 0;

        /**
         * GameOverPlayerData score.
         * @member {number} score
         * @memberof netpack.GameOverPlayerData
         * @instance
         */
        GameOverPlayerData.prototype.score = 0;

        /**
         * GameOverPlayerData boom.
         * @member {number} boom
         * @memberof netpack.GameOverPlayerData
         * @instance
         */
        GameOverPlayerData.prototype.boom = 0;

        /**
         * GameOverPlayerData overState.
         * @member {number} overState
         * @memberof netpack.GameOverPlayerData
         * @instance
         */
        GameOverPlayerData.prototype.overState = 0;

        /**
         * Creates a new GameOverPlayerData instance using the specified properties.
         * @function create
         * @memberof netpack.GameOverPlayerData
         * @static
         * @param {netpack.IGameOverPlayerData=} [properties] Properties to set
         * @returns {netpack.GameOverPlayerData} GameOverPlayerData instance
         */
        GameOverPlayerData.create = function create(properties) {
            return new GameOverPlayerData(properties);
        };

        /**
         * Encodes the specified GameOverPlayerData message. Does not implicitly {@link netpack.GameOverPlayerData.verify|verify} messages.
         * @function encode
         * @memberof netpack.GameOverPlayerData
         * @static
         * @param {netpack.IGameOverPlayerData} message GameOverPlayerData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverPlayerData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seat != null && message.hasOwnProperty("seat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cards[i]);
            if (message.curScore != null && message.hasOwnProperty("curScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.curScore);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.score);
            if (message.boom != null && message.hasOwnProperty("boom"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.boom);
            if (message.overState != null && message.hasOwnProperty("overState"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.overState);
            return writer;
        };

        /**
         * Encodes the specified GameOverPlayerData message, length delimited. Does not implicitly {@link netpack.GameOverPlayerData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.GameOverPlayerData
         * @static
         * @param {netpack.IGameOverPlayerData} message GameOverPlayerData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverPlayerData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameOverPlayerData message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.GameOverPlayerData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.GameOverPlayerData} GameOverPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverPlayerData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.GameOverPlayerData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                case 3:
                    message.curScore = reader.int32();
                    break;
                case 4:
                    message.score = reader.int32();
                    break;
                case 5:
                    message.boom = reader.int32();
                    break;
                case 6:
                    message.overState = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameOverPlayerData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.GameOverPlayerData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.GameOverPlayerData} GameOverPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverPlayerData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameOverPlayerData message.
         * @function verify
         * @memberof netpack.GameOverPlayerData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameOverPlayerData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            if (message.curScore != null && message.hasOwnProperty("curScore"))
                if (!$util.isInteger(message.curScore))
                    return "curScore: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.boom != null && message.hasOwnProperty("boom"))
                if (!$util.isInteger(message.boom))
                    return "boom: integer expected";
            if (message.overState != null && message.hasOwnProperty("overState"))
                if (!$util.isInteger(message.overState))
                    return "overState: integer expected";
            return null;
        };

        return GameOverPlayerData;
    })();

    netpack.ParamConfigList = (function() {

        /**
         * Properties of a ParamConfigList.
         * @memberof netpack
         * @interface IParamConfigList
         * @property {Array.<netpack.IParamConfig>|null} [datas] ParamConfigList datas
         */

        /**
         * Constructs a new ParamConfigList.
         * @memberof netpack
         * @classdesc Represents a ParamConfigList.
         * @implements IParamConfigList
         * @constructor
         * @param {netpack.IParamConfigList=} [properties] Properties to set
         */
        function ParamConfigList(properties) {
            this.datas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamConfigList datas.
         * @member {Array.<netpack.IParamConfig>} datas
         * @memberof netpack.ParamConfigList
         * @instance
         */
        ParamConfigList.prototype.datas = $util.emptyArray;

        /**
         * Creates a new ParamConfigList instance using the specified properties.
         * @function create
         * @memberof netpack.ParamConfigList
         * @static
         * @param {netpack.IParamConfigList=} [properties] Properties to set
         * @returns {netpack.ParamConfigList} ParamConfigList instance
         */
        ParamConfigList.create = function create(properties) {
            return new ParamConfigList(properties);
        };

        /**
         * Encodes the specified ParamConfigList message. Does not implicitly {@link netpack.ParamConfigList.verify|verify} messages.
         * @function encode
         * @memberof netpack.ParamConfigList
         * @static
         * @param {netpack.IParamConfigList} message ParamConfigList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamConfigList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.datas != null && message.datas.length)
                for (var i = 0; i < message.datas.length; ++i)
                    $root.netpack.ParamConfig.encode(message.datas[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ParamConfigList message, length delimited. Does not implicitly {@link netpack.ParamConfigList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netpack.ParamConfigList
         * @static
         * @param {netpack.IParamConfigList} message ParamConfigList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamConfigList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamConfigList message from the specified reader or buffer.
         * @function decode
         * @memberof netpack.ParamConfigList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netpack.ParamConfigList} ParamConfigList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamConfigList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netpack.ParamConfigList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.datas && message.datas.length))
                        message.datas = [];
                    message.datas.push($root.netpack.ParamConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParamConfigList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netpack.ParamConfigList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netpack.ParamConfigList} ParamConfigList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamConfigList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamConfigList message.
         * @function verify
         * @memberof netpack.ParamConfigList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamConfigList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.datas != null && message.hasOwnProperty("datas")) {
                if (!Array.isArray(message.datas))
                    return "datas: array expected";
                for (var i = 0; i < message.datas.length; ++i) {
                    var error = $root.netpack.ParamConfig.verify(message.datas[i]);
                    if (error)
                        return "datas." + error;
                }
            }
            return null;
        };

        return ParamConfigList;
    })();

    return netpack;
})();