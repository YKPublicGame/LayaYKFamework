type Long = protobuf.Long;

/** Namespace netpack. */
declare namespace netpack {

    /** Properties of a test. */
    interface Itest {

        /** test str */
        str?: (string|null);
    }

    /** Represents a test. */
    class test implements Itest {

        /**
         * Constructs a new test.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.Itest);

        /** test str. */
        public str: string;

        /**
         * Creates a new test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns test instance
         */
        public static create(properties?: netpack.Itest): netpack.test;

        /**
         * Encodes the specified test message. Does not implicitly {@link netpack.test.verify|verify} messages.
         * @param message test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.Itest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified test message, length delimited. Does not implicitly {@link netpack.test.verify|verify} messages.
         * @param message test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.Itest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.test;

        /**
         * Decodes a test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.test;

        /**
         * Verifies a test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a packbase. */
    interface Ipackbase {

        /** packbase cmd */
        cmd?: (number|null);

        /** packbase msgid */
        msgid?: (number|null);

        /** packbase errorcode */
        errorcode?: (number|null);

        /** packbase contentBuff */
        contentBuff?: (Uint8Array|null);
    }

    /** Represents a packbase. */
    class packbase implements Ipackbase {

        /**
         * Constructs a new packbase.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.Ipackbase);

        /** packbase cmd. */
        public cmd: number;

        /** packbase msgid. */
        public msgid: number;

        /** packbase errorcode. */
        public errorcode: number;

        /** packbase contentBuff. */
        public contentBuff: Uint8Array;

        /**
         * Creates a new packbase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns packbase instance
         */
        public static create(properties?: netpack.Ipackbase): netpack.packbase;

        /**
         * Encodes the specified packbase message. Does not implicitly {@link netpack.packbase.verify|verify} messages.
         * @param message packbase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.Ipackbase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified packbase message, length delimited. Does not implicitly {@link netpack.packbase.verify|verify} messages.
         * @param message packbase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.Ipackbase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a packbase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns packbase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.packbase;

        /**
         * Decodes a packbase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns packbase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.packbase;

        /**
         * Verifies a packbase message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a UserData. */
    interface IUserData {

        /** UserData roleId */
        roleId?: (number|null);

        /** UserData nickName */
        nickName?: (string|null);

        /** UserData headUrl */
        headUrl?: (string|null);

        /** UserData sex */
        sex?: (number|null);

        /** UserData signature */
        signature?: (string|null);

        /** UserData constellation */
        constellation?: (number|null);

        /** UserData county */
        county?: (string|null);

        /** UserData city */
        city?: (string|null);

        /** UserData weChat */
        weChat?: (string|null);

        /** UserData gold */
        gold?: (number|null);

        /** UserData diamond */
        diamond?: (number|null);

        /** UserData playerNum */
        playerNum?: (number|null);

        /** UserData winNum */
        winNum?: (number|null);

        /** UserData awardNum */
        awardNum?: (string|null);
    }

    /** Represents a UserData. */
    class UserData implements IUserData {

        /**
         * Constructs a new UserData.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IUserData);

        /** UserData roleId. */
        public roleId: number;

        /** UserData nickName. */
        public nickName: string;

        /** UserData headUrl. */
        public headUrl: string;

        /** UserData sex. */
        public sex: number;

        /** UserData signature. */
        public signature: string;

        /** UserData constellation. */
        public constellation: number;

        /** UserData county. */
        public county: string;

        /** UserData city. */
        public city: string;

        /** UserData weChat. */
        public weChat: string;

        /** UserData gold. */
        public gold: number;

        /** UserData diamond. */
        public diamond: number;

        /** UserData playerNum. */
        public playerNum: number;

        /** UserData winNum. */
        public winNum: number;

        /** UserData awardNum. */
        public awardNum: string;

        /**
         * Creates a new UserData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserData instance
         */
        public static create(properties?: netpack.IUserData): netpack.UserData;

        /**
         * Encodes the specified UserData message. Does not implicitly {@link netpack.UserData.verify|verify} messages.
         * @param message UserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IUserData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UserData message, length delimited. Does not implicitly {@link netpack.UserData.verify|verify} messages.
         * @param message UserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IUserData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.UserData;

        /**
         * Decodes a UserData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.UserData;

        /**
         * Verifies a UserData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a loginReq. */
    interface IloginReq {

        /** loginReq token */
        token?: (string|null);

        /** loginReq roleid */
        roleid?: (number|null);
    }

    /** Represents a loginReq. */
    class loginReq implements IloginReq {

        /**
         * Constructs a new loginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IloginReq);

        /** loginReq token. */
        public token: string;

        /** loginReq roleid. */
        public roleid: number;

        /**
         * Creates a new loginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns loginReq instance
         */
        public static create(properties?: netpack.IloginReq): netpack.loginReq;

        /**
         * Encodes the specified loginReq message. Does not implicitly {@link netpack.loginReq.verify|verify} messages.
         * @param message loginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IloginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified loginReq message, length delimited. Does not implicitly {@link netpack.loginReq.verify|verify} messages.
         * @param message loginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IloginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a loginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns loginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.loginReq;

        /**
         * Decodes a loginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns loginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.loginReq;

        /**
         * Verifies a loginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a loginResp. */
    interface IloginResp {

        /** loginResp roleinfo */
        roleinfo?: (netpack.IUserData|null);
    }

    /** Represents a loginResp. */
    class loginResp implements IloginResp {

        /**
         * Constructs a new loginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IloginResp);

        /** loginResp roleinfo. */
        public roleinfo?: (netpack.IUserData|null);

        /**
         * Creates a new loginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns loginResp instance
         */
        public static create(properties?: netpack.IloginResp): netpack.loginResp;

        /**
         * Encodes the specified loginResp message. Does not implicitly {@link netpack.loginResp.verify|verify} messages.
         * @param message loginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IloginResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified loginResp message, length delimited. Does not implicitly {@link netpack.loginResp.verify|verify} messages.
         * @param message loginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IloginResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a loginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns loginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.loginResp;

        /**
         * Decodes a loginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns loginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.loginResp;

        /**
         * Verifies a loginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a tickOutEvent. */
    interface ItickOutEvent {

        /** tickOutEvent tickType */
        tickType?: (number|null);
    }

    /** Represents a tickOutEvent. */
    class tickOutEvent implements ItickOutEvent {

        /**
         * Constructs a new tickOutEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.ItickOutEvent);

        /** tickOutEvent tickType. */
        public tickType: number;

        /**
         * Creates a new tickOutEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tickOutEvent instance
         */
        public static create(properties?: netpack.ItickOutEvent): netpack.tickOutEvent;

        /**
         * Encodes the specified tickOutEvent message. Does not implicitly {@link netpack.tickOutEvent.verify|verify} messages.
         * @param message tickOutEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.ItickOutEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified tickOutEvent message, length delimited. Does not implicitly {@link netpack.tickOutEvent.verify|verify} messages.
         * @param message tickOutEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.ItickOutEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a tickOutEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tickOutEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.tickOutEvent;

        /**
         * Decodes a tickOutEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tickOutEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.tickOutEvent;

        /**
         * Verifies a tickOutEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ParamConfig. */
    interface IParamConfig {

        /** ParamConfig name */
        name?: (string|null);

        /** ParamConfig value */
        value?: (number|null);
    }

    /** Represents a ParamConfig. */
    class ParamConfig implements IParamConfig {

        /**
         * Constructs a new ParamConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IParamConfig);

        /** ParamConfig name. */
        public name: string;

        /** ParamConfig value. */
        public value: number;

        /**
         * Creates a new ParamConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamConfig instance
         */
        public static create(properties?: netpack.IParamConfig): netpack.ParamConfig;

        /**
         * Encodes the specified ParamConfig message. Does not implicitly {@link netpack.ParamConfig.verify|verify} messages.
         * @param message ParamConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IParamConfig, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ParamConfig message, length delimited. Does not implicitly {@link netpack.ParamConfig.verify|verify} messages.
         * @param message ParamConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IParamConfig, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ParamConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.ParamConfig;

        /**
         * Decodes a ParamConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.ParamConfig;

        /**
         * Verifies a ParamConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PrivateRoomInfo. */
    interface IPrivateRoomInfo {

        /** PrivateRoomInfo param */
        param?: (netpack.IParamConfig[]|null);

        /** PrivateRoomInfo roomid */
        roomid?: (number|null);

        /** PrivateRoomInfo ownerid */
        ownerid?: (number|null);

        /** PrivateRoomInfo dealNum */
        dealNum?: (number|null);

        /** PrivateRoomInfo roleNum */
        roleNum?: (number|null);

        /** PrivateRoomInfo gameid */
        gameid?: (number|null);
    }

    /** Represents a PrivateRoomInfo. */
    class PrivateRoomInfo implements IPrivateRoomInfo {

        /**
         * Constructs a new PrivateRoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IPrivateRoomInfo);

        /** PrivateRoomInfo param. */
        public param: netpack.IParamConfig[];

        /** PrivateRoomInfo roomid. */
        public roomid: number;

        /** PrivateRoomInfo ownerid. */
        public ownerid: number;

        /** PrivateRoomInfo dealNum. */
        public dealNum: number;

        /** PrivateRoomInfo roleNum. */
        public roleNum: number;

        /** PrivateRoomInfo gameid. */
        public gameid: number;

        /**
         * Creates a new PrivateRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateRoomInfo instance
         */
        public static create(properties?: netpack.IPrivateRoomInfo): netpack.PrivateRoomInfo;

        /**
         * Encodes the specified PrivateRoomInfo message. Does not implicitly {@link netpack.PrivateRoomInfo.verify|verify} messages.
         * @param message PrivateRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IPrivateRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PrivateRoomInfo message, length delimited. Does not implicitly {@link netpack.PrivateRoomInfo.verify|verify} messages.
         * @param message PrivateRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IPrivateRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PrivateRoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.PrivateRoomInfo;

        /**
         * Decodes a PrivateRoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.PrivateRoomInfo;

        /**
         * Verifies a PrivateRoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a roomIdData. */
    interface IroomIdData {

        /** roomIdData roomId */
        roomId?: (number|null);
    }

    /** Represents a roomIdData. */
    class roomIdData implements IroomIdData {

        /**
         * Constructs a new roomIdData.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IroomIdData);

        /** roomIdData roomId. */
        public roomId: number;

        /**
         * Creates a new roomIdData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns roomIdData instance
         */
        public static create(properties?: netpack.IroomIdData): netpack.roomIdData;

        /**
         * Encodes the specified roomIdData message. Does not implicitly {@link netpack.roomIdData.verify|verify} messages.
         * @param message roomIdData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IroomIdData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified roomIdData message, length delimited. Does not implicitly {@link netpack.roomIdData.verify|verify} messages.
         * @param message roomIdData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IroomIdData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a roomIdData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns roomIdData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.roomIdData;

        /**
         * Decodes a roomIdData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns roomIdData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.roomIdData;

        /**
         * Verifies a roomIdData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PrivateDeskInfoReply. */
    interface IPrivateDeskInfoReply {

        /** PrivateDeskInfoReply dealId */
        dealId?: (number|null);

        /** PrivateDeskInfoReply state */
        state?: (number|null);

        /** PrivateDeskInfoReply banker */
        banker?: (number|null);

        /** PrivateDeskInfoReply matchPlayers */
        matchPlayers?: (netpack.IMatchPlayer[]|null);

        /** PrivateDeskInfoReply curSeat */
        curSeat?: (number|null);

        /** PrivateDeskInfoReply lowCards */
        lowCards?: (number[]|null);

        /** PrivateDeskInfoReply nowMultiple */
        nowMultiple?: (number|null);

        /** PrivateDeskInfoReply opInfos */
        opInfos?: (netpack.IOpEvent[]|null);

        /** PrivateDeskInfoReply dzState */
        dzState?: (number|null);

        /** PrivateDeskInfoReply roomInfo */
        roomInfo?: (netpack.IPrivateRoomInfo|null);
    }

    /** Represents a PrivateDeskInfoReply. */
    class PrivateDeskInfoReply implements IPrivateDeskInfoReply {

        /**
         * Constructs a new PrivateDeskInfoReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IPrivateDeskInfoReply);

        /** PrivateDeskInfoReply dealId. */
        public dealId: number;

        /** PrivateDeskInfoReply state. */
        public state: number;

        /** PrivateDeskInfoReply banker. */
        public banker: number;

        /** PrivateDeskInfoReply matchPlayers. */
        public matchPlayers: netpack.IMatchPlayer[];

        /** PrivateDeskInfoReply curSeat. */
        public curSeat: number;

        /** PrivateDeskInfoReply lowCards. */
        public lowCards: number[];

        /** PrivateDeskInfoReply nowMultiple. */
        public nowMultiple: number;

        /** PrivateDeskInfoReply opInfos. */
        public opInfos: netpack.IOpEvent[];

        /** PrivateDeskInfoReply dzState. */
        public dzState: number;

        /** PrivateDeskInfoReply roomInfo. */
        public roomInfo?: (netpack.IPrivateRoomInfo|null);

        /**
         * Creates a new PrivateDeskInfoReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateDeskInfoReply instance
         */
        public static create(properties?: netpack.IPrivateDeskInfoReply): netpack.PrivateDeskInfoReply;

        /**
         * Encodes the specified PrivateDeskInfoReply message. Does not implicitly {@link netpack.PrivateDeskInfoReply.verify|verify} messages.
         * @param message PrivateDeskInfoReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IPrivateDeskInfoReply, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PrivateDeskInfoReply message, length delimited. Does not implicitly {@link netpack.PrivateDeskInfoReply.verify|verify} messages.
         * @param message PrivateDeskInfoReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IPrivateDeskInfoReply, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PrivateDeskInfoReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateDeskInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.PrivateDeskInfoReply;

        /**
         * Decodes a PrivateDeskInfoReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateDeskInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.PrivateDeskInfoReply;

        /**
         * Verifies a PrivateDeskInfoReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MatchPlayer. */
    interface IMatchPlayer {

        /** MatchPlayer seat */
        seat?: (number|null);

        /** MatchPlayer score */
        score?: (number|null);

        /** MatchPlayer cards */
        cards?: (number[]|null);

        /** MatchPlayer cardsNum */
        cardsNum?: (number|null);

        /** MatchPlayer isDZ */
        isDZ?: (boolean|null);

        /** MatchPlayer boomNums */
        boomNums?: (number|null);

        /** MatchPlayer outCards */
        outCards?: (number[]|null);

        /** MatchPlayer userData */
        userData?: (netpack.IUserData|null);

        /** MatchPlayer state */
        state?: (number|null);
    }

    /** Represents a MatchPlayer. */
    class MatchPlayer implements IMatchPlayer {

        /**
         * Constructs a new MatchPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IMatchPlayer);

        /** MatchPlayer seat. */
        public seat: number;

        /** MatchPlayer score. */
        public score: number;

        /** MatchPlayer cards. */
        public cards: number[];

        /** MatchPlayer cardsNum. */
        public cardsNum: number;

        /** MatchPlayer isDZ. */
        public isDZ: boolean;

        /** MatchPlayer boomNums. */
        public boomNums: number;

        /** MatchPlayer outCards. */
        public outCards: number[];

        /** MatchPlayer userData. */
        public userData?: (netpack.IUserData|null);

        /** MatchPlayer state. */
        public state: number;

        /**
         * Creates a new MatchPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchPlayer instance
         */
        public static create(properties?: netpack.IMatchPlayer): netpack.MatchPlayer;

        /**
         * Encodes the specified MatchPlayer message. Does not implicitly {@link netpack.MatchPlayer.verify|verify} messages.
         * @param message MatchPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IMatchPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MatchPlayer message, length delimited. Does not implicitly {@link netpack.MatchPlayer.verify|verify} messages.
         * @param message MatchPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IMatchPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MatchPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.MatchPlayer;

        /**
         * Decodes a MatchPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.MatchPlayer;

        /**
         * Verifies a MatchPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CallOpInfo. */
    interface ICallOpInfo {

        /** CallOpInfo seat */
        seat?: (number|null);

        /** CallOpInfo value */
        value?: (number|null);
    }

    /** Represents a CallOpInfo. */
    class CallOpInfo implements ICallOpInfo {

        /**
         * Constructs a new CallOpInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.ICallOpInfo);

        /** CallOpInfo seat. */
        public seat: number;

        /** CallOpInfo value. */
        public value: number;

        /**
         * Creates a new CallOpInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallOpInfo instance
         */
        public static create(properties?: netpack.ICallOpInfo): netpack.CallOpInfo;

        /**
         * Encodes the specified CallOpInfo message. Does not implicitly {@link netpack.CallOpInfo.verify|verify} messages.
         * @param message CallOpInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.ICallOpInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CallOpInfo message, length delimited. Does not implicitly {@link netpack.CallOpInfo.verify|verify} messages.
         * @param message CallOpInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.ICallOpInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CallOpInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CallOpInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.CallOpInfo;

        /**
         * Decodes a CallOpInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CallOpInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.CallOpInfo;

        /**
         * Verifies a CallOpInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an OpReq. */
    interface IOpReq {

        /** OpReq weaveKind */
        weaveKind?: (number|null);

        /** OpReq value */
        value?: (number|null);

        /** OpReq cards */
        cards?: (number[]|null);
    }

    /** Represents an OpReq. */
    class OpReq implements IOpReq {

        /**
         * Constructs a new OpReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IOpReq);

        /** OpReq weaveKind. */
        public weaveKind: number;

        /** OpReq value. */
        public value: number;

        /** OpReq cards. */
        public cards: number[];

        /**
         * Creates a new OpReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpReq instance
         */
        public static create(properties?: netpack.IOpReq): netpack.OpReq;

        /**
         * Encodes the specified OpReq message. Does not implicitly {@link netpack.OpReq.verify|verify} messages.
         * @param message OpReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IOpReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpReq message, length delimited. Does not implicitly {@link netpack.OpReq.verify|verify} messages.
         * @param message OpReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IOpReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.OpReq;

        /**
         * Decodes an OpReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.OpReq;

        /**
         * Verifies an OpReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an OpEvent. */
    interface IOpEvent {

        /** OpEvent weaveKind */
        weaveKind?: (number|null);

        /** OpEvent value */
        value?: (number|null);

        /** OpEvent seat */
        seat?: (number|null);

        /** OpEvent cards */
        cards?: (number[]|null);
    }

    /** Represents an OpEvent. */
    class OpEvent implements IOpEvent {

        /**
         * Constructs a new OpEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IOpEvent);

        /** OpEvent weaveKind. */
        public weaveKind: number;

        /** OpEvent value. */
        public value: number;

        /** OpEvent seat. */
        public seat: number;

        /** OpEvent cards. */
        public cards: number[];

        /**
         * Creates a new OpEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpEvent instance
         */
        public static create(properties?: netpack.IOpEvent): netpack.OpEvent;

        /**
         * Encodes the specified OpEvent message. Does not implicitly {@link netpack.OpEvent.verify|verify} messages.
         * @param message OpEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IOpEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpEvent message, length delimited. Does not implicitly {@link netpack.OpEvent.verify|verify} messages.
         * @param message OpEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IOpEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.OpEvent;

        /**
         * Decodes an OpEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.OpEvent;

        /**
         * Verifies an OpEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameStartEvent. */
    interface IGameStartEvent {

        /** GameStartEvent matchPlayers */
        matchPlayers?: (netpack.IMatchPlayer[]|null);

        /** GameStartEvent curSeat */
        curSeat?: (number|null);

        /** GameStartEvent dzState */
        dzState?: (number|null);

        /** GameStartEvent lowCards */
        lowCards?: (number[]|null);

        /** GameStartEvent laizIndex */
        laizIndex?: (number|null);
    }

    /** Represents a GameStartEvent. */
    class GameStartEvent implements IGameStartEvent {

        /**
         * Constructs a new GameStartEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IGameStartEvent);

        /** GameStartEvent matchPlayers. */
        public matchPlayers: netpack.IMatchPlayer[];

        /** GameStartEvent curSeat. */
        public curSeat: number;

        /** GameStartEvent dzState. */
        public dzState: number;

        /** GameStartEvent lowCards. */
        public lowCards: number[];

        /** GameStartEvent laizIndex. */
        public laizIndex: number;

        /**
         * Creates a new GameStartEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStartEvent instance
         */
        public static create(properties?: netpack.IGameStartEvent): netpack.GameStartEvent;

        /**
         * Encodes the specified GameStartEvent message. Does not implicitly {@link netpack.GameStartEvent.verify|verify} messages.
         * @param message GameStartEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IGameStartEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameStartEvent message, length delimited. Does not implicitly {@link netpack.GameStartEvent.verify|verify} messages.
         * @param message GameStartEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IGameStartEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameStartEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStartEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.GameStartEvent;

        /**
         * Decodes a GameStartEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStartEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.GameStartEvent;

        /**
         * Verifies a GameStartEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an opData. */
    interface IopData {

        /** opData state */
        state?: (number|null);
    }

    /** Represents an opData. */
    class opData implements IopData {

        /**
         * Constructs a new opData.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IopData);

        /** opData state. */
        public state: number;

        /**
         * Creates a new opData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns opData instance
         */
        public static create(properties?: netpack.IopData): netpack.opData;

        /**
         * Encodes the specified opData message. Does not implicitly {@link netpack.opData.verify|verify} messages.
         * @param message opData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IopData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified opData message, length delimited. Does not implicitly {@link netpack.opData.verify|verify} messages.
         * @param message opData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IopData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an opData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns opData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.opData;

        /**
         * Decodes an opData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns opData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.opData;

        /**
         * Verifies an opData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DissRoleRep. */
    interface IDissRoleRep {

        /** DissRoleRep id */
        id?: (number|null);

        /** DissRoleRep nickname */
        nickname?: (string|null);

        /** DissRoleRep agree */
        agree?: (number|null);

        /** DissRoleRep suggest */
        suggest?: (boolean|null);
    }

    /** Represents a DissRoleRep. */
    class DissRoleRep implements IDissRoleRep {

        /**
         * Constructs a new DissRoleRep.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IDissRoleRep);

        /** DissRoleRep id. */
        public id: number;

        /** DissRoleRep nickname. */
        public nickname: string;

        /** DissRoleRep agree. */
        public agree: number;

        /** DissRoleRep suggest. */
        public suggest: boolean;

        /**
         * Creates a new DissRoleRep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissRoleRep instance
         */
        public static create(properties?: netpack.IDissRoleRep): netpack.DissRoleRep;

        /**
         * Encodes the specified DissRoleRep message. Does not implicitly {@link netpack.DissRoleRep.verify|verify} messages.
         * @param message DissRoleRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IDissRoleRep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DissRoleRep message, length delimited. Does not implicitly {@link netpack.DissRoleRep.verify|verify} messages.
         * @param message DissRoleRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IDissRoleRep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DissRoleRep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissRoleRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.DissRoleRep;

        /**
         * Decodes a DissRoleRep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissRoleRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.DissRoleRep;

        /**
         * Verifies a DissRoleRep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DissRoomData. */
    interface IDissRoomData {

        /** DissRoomData roles */
        roles?: (netpack.IDissRoleRep[]|null);

        /** DissRoomData state */
        state?: (number|null);

        /** DissRoomData endtime */
        endtime?: (number|null);

        /** DissRoomData type */
        type?: (number|null);
    }

    /** Represents a DissRoomData. */
    class DissRoomData implements IDissRoomData {

        /**
         * Constructs a new DissRoomData.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IDissRoomData);

        /** DissRoomData roles. */
        public roles: netpack.IDissRoleRep[];

        /** DissRoomData state. */
        public state: number;

        /** DissRoomData endtime. */
        public endtime: number;

        /** DissRoomData type. */
        public type: number;

        /**
         * Creates a new DissRoomData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissRoomData instance
         */
        public static create(properties?: netpack.IDissRoomData): netpack.DissRoomData;

        /**
         * Encodes the specified DissRoomData message. Does not implicitly {@link netpack.DissRoomData.verify|verify} messages.
         * @param message DissRoomData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IDissRoomData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DissRoomData message, length delimited. Does not implicitly {@link netpack.DissRoomData.verify|verify} messages.
         * @param message DissRoomData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IDissRoomData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DissRoomData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissRoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.DissRoomData;

        /**
         * Decodes a DissRoomData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissRoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.DissRoomData;

        /**
         * Verifies a DissRoomData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameOverPlayerData. */
    interface IGameOverPlayerData {

        /** GameOverPlayerData seat */
        seat?: (number|null);

        /** GameOverPlayerData cards */
        cards?: (number[]|null);

        /** GameOverPlayerData curScore */
        curScore?: (number|null);

        /** GameOverPlayerData score */
        score?: (number|null);

        /** GameOverPlayerData boom */
        boom?: (number|null);

        /** GameOverPlayerData overState */
        overState?: (number|null);
    }

    /** Represents a GameOverPlayerData. */
    class GameOverPlayerData implements IGameOverPlayerData {

        /**
         * Constructs a new GameOverPlayerData.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IGameOverPlayerData);

        /** GameOverPlayerData seat. */
        public seat: number;

        /** GameOverPlayerData cards. */
        public cards: number[];

        /** GameOverPlayerData curScore. */
        public curScore: number;

        /** GameOverPlayerData score. */
        public score: number;

        /** GameOverPlayerData boom. */
        public boom: number;

        /** GameOverPlayerData overState. */
        public overState: number;

        /**
         * Creates a new GameOverPlayerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverPlayerData instance
         */
        public static create(properties?: netpack.IGameOverPlayerData): netpack.GameOverPlayerData;

        /**
         * Encodes the specified GameOverPlayerData message. Does not implicitly {@link netpack.GameOverPlayerData.verify|verify} messages.
         * @param message GameOverPlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IGameOverPlayerData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameOverPlayerData message, length delimited. Does not implicitly {@link netpack.GameOverPlayerData.verify|verify} messages.
         * @param message GameOverPlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IGameOverPlayerData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameOverPlayerData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.GameOverPlayerData;

        /**
         * Decodes a GameOverPlayerData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameOverPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.GameOverPlayerData;

        /**
         * Verifies a GameOverPlayerData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ParamConfigList. */
    interface IParamConfigList {

        /** ParamConfigList datas */
        datas?: (netpack.IParamConfig[]|null);
    }

    /** Represents a ParamConfigList. */
    class ParamConfigList implements IParamConfigList {

        /**
         * Constructs a new ParamConfigList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netpack.IParamConfigList);

        /** ParamConfigList datas. */
        public datas: netpack.IParamConfig[];

        /**
         * Creates a new ParamConfigList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamConfigList instance
         */
        public static create(properties?: netpack.IParamConfigList): netpack.ParamConfigList;

        /**
         * Encodes the specified ParamConfigList message. Does not implicitly {@link netpack.ParamConfigList.verify|verify} messages.
         * @param message ParamConfigList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netpack.IParamConfigList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ParamConfigList message, length delimited. Does not implicitly {@link netpack.ParamConfigList.verify|verify} messages.
         * @param message ParamConfigList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netpack.IParamConfigList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ParamConfigList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamConfigList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): netpack.ParamConfigList;

        /**
         * Decodes a ParamConfigList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamConfigList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): netpack.ParamConfigList;

        /**
         * Verifies a ParamConfigList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
