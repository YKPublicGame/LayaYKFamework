module netpack
{
	export class ProtocolDef 
	{
		public static ProtocolNames =
		[
			"test",
			"packbase",
			"UserData",
			"loginReq",
			"loginResp",
			"tickOutEvent",
			"ParamConfig",
			"PrivateRoomInfo",
			"roomIdData",
			"PrivateDeskInfoReply",
			"MatchPlayer",
			"CallOpInfo",
			"OpReq",
			"OpEvent",
			"GameStartEvent",
			"opData",
			"DissRoleRep",
			"DissRoomData",
			"GameOverPlayerData",
			"ParamConfigList",

		]
		public static Protocols: Array<any> = [
			{
				id: 100,
				request: "test",
				response: "test",
			},
			{
				id: 101,
				request: "test",
				response: "",
			},
			{
				id: 200,
				request: "loginReq",
				response: "loginResp",
			},
			{
				id: 201,
				request: null,
				response: "tickOutEvent",
			},
			{
				id: 401,
				request: "ParamConfigList",
				response: "PrivateDeskInfoReply",
			},
			{
				id: 402,
				request: "roomIdData",
				response: "PrivateDeskInfoReply",
			},
			{
				id: 403,
				request: null,
				response: null,
			},
			{
				id: 404,
				request: null,
				response: "CallOpInfo",
			},
			{
				id: 405,
				request: null,
				response: "GameStartEvent",
			},
			{
				id: 406,
				request: "OpReq",
				response: null,
			},
			{
				id: 407,
				request: null,
				response: "OpEvent",
			},
			{
				id: 408,
				request: "roomIdData",
				response: "opData",
			},
			{
				id: 409,
				request: null,
				response: "DissRoomData",
			},
			{
				id: 410,
				request: null,
				response: "CallOpInfo",
			},
			{
				id: 411,
				request: null,
				response: null,
			},
			{
				id: 412,
				request: null,
				response: null,
			},
			{
				id: 413,
				request: null,
				response: "MatchPlayer",
			},

		]

	}
	export class ActionType
	{
		public static test = 100;
		public static TestUserData = 101;
		public static login = 200;
		public static tickOutPlayer = 201;
		public static CreatePrivRoomReq = 401;
		public static LoginPirvRoom = 402;
		public static userReady = 403;
		public static userReadyEvent = 404;
		public static PrivGameStart = 405;
		public static PrivOp = 406;
		public static PrivOpEvent = 407;
		public static userReturn = 408;
		public static userDissEvent = 409;
		public static userReturnEvent = 410;
		public static privGameOverEvent = 411;
		public static privGameEndEvent = 412;
		public static loginPirvRoomEvent = 413;

	}
	export class ErrorCode
	{
		public static errorDic: Map<number, string> = new Map<number, string>()

		private static Add(id: number, msg: string): number
		{
			ErrorCode.errorDic.set(id, msg)
			return id
		}

		public static Get(id)
		{
			if (ErrorCode.errorDic.has(id))
				return ErrorCode.Get(id)
			return "未知错误：id=" + id
		}
		public static SystemError =
		{
			success: ErrorCode.Add(0, "请求成功"),
			unknow: ErrorCode.Add(1, "未知错误"),
			argument: ErrorCode.Add(2, "参数错误"),
			protoNotExists: ErrorCode.Add(3, "不存在此协议"),
			serviceIsStoped: ErrorCode.Add(4, "服务故障"),
			sessionNotExists: ErrorCode.Add(5, "不存在此Session"),
			moduleNotImpl: ErrorCode.Add(6, "此模块未实现"),
			protoNotImpl: ErrorCode.Add(7, "此协议未实现"),
			noLogin: ErrorCode.Add(8, "尚未登录"),
			packHeaderNil: ErrorCode.Add(9, "包头是空的"),
			forward: ErrorCode.Add(10, "重定向"),
			serverMaintenance: ErrorCode.Add(11, "服务器维护"),
			busy: ErrorCode.Add(12, "服务忙"),
			logined: ErrorCode.Add(13, "已登录"),
			dbServerStoped: ErrorCode.Add(14, "数据服务故障"),
			noLoginGame: ErrorCode.Add(15, "未进入游戏"),
			notOnline: ErrorCode.Add(16, "玩家不在线"),
			saveCacheFailed: ErrorCode.Add(17, "写入缓存失败"),
			logoutingGame: ErrorCode.Add(18, "正在退出游戏中"),
			noUseableService: ErrorCode.Add(19, "没有可用的服务"),
			sessionInvalid: ErrorCode.Add(20, "此session是非法的"),
			sessionTimeout: ErrorCode.Add(21, "此session已过期"),
			sessionNoMatch: ErrorCode.Add(22, "会话不匹配"),
			serviceNotImpl: ErrorCode.Add(23, "此服务未实现"),
			functionNotOpen: ErrorCode.Add(24, "此功能尚未开放"),
			serviceIsOpened: ErrorCode.Add(25, "服务已开放"),
			serviceIsClosed: ErrorCode.Add(26, "服务已关闭"),
			serviceIsOffline: ErrorCode.Add(27, "服务已下线"),
			msgTimeOut: ErrorCode.Add(-1, "超时"),
		}
		public static authError =
		{
			loginAccountFill: ErrorCode.Add(1001, "账号或者密码错误"),
			accountExist: ErrorCode.Add(1002, "账号重复"),
			accountAndPwdIsNull: ErrorCode.Add(1003, "账号或者密码不能为空"),
			roleIdNoExist: ErrorCode.Add(1004, "无效的用户id或者token无效"),
		}

	}
}