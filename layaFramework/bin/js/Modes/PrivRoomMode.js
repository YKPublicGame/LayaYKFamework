var YK;
(function (YK) {
    class PrivRoomMode extends YK.IMode {
        OnInitData(param) {
            console.log("PrivRoomMode init");
            this.privRoomData = null;
            this.eventMgr.setNetCallback(this.OnNetEvenet, 99);
            for (let index = ActionType.CreatePrivRoomReq; index <= ActionType.loginPirvRoomEvent; index++) {
                console.log("add event =" + index);
                this.eventMgr.addNetEvent(index);
            }
        }
        OnClear() {
        }
        OnDestroy() {
            super.OnDestroy();
        }
        OnNetEvenet(ev) {
            console.log("get=" + ev.Data.head.cmd);
            if (ev.Data.head.errorcode == 0) {
                if (ev.Data.head.cmd == 200) {
                    //this.OnLoginResp(ev.Data.msg)
                }
                else if (ev.Data.head.cmd == ActionType.CreatePrivRoomReq) {
                    this.privRoomData = ev.Data.msg;
                    console.log("创建房间返回");
                    console.log(ev);
                    console.log(this.privRoomData);
                }
                else if (ev.Data.head.cmd == ActionType.LoginPirvRoom) {
                    this.privRoomData = ev.Data.msg;
                    console.log("加入房间返回");
                    console.log(ev);
                }
                else if (ev.Data.head.cmd == ActionType.loginPirvRoomEvent) {
                    console.log("进入私人房主推");
                    console.log(ev);
                    this.UpdateMatchPlayerData(ev.Data.msg);
                }
                else if (ev.Data.head.cmd == ActionType.userReadyEvent) {
                    console.log("玩家准备主推");
                    console.log(ev);
                    //this.UpdateMatchPlayerData(ev.Data.msg);
                    this.UpdataPlayerState(ev.Data.msg);
                }
            }
            else {
                console.log("Error=" + ev.Data.head.cmd);
            }
        }
        /**
         * 更新玩家状态
         * @param data 返回的值
         */
        UpdataPlayerState(data) {
            let playerIndexAndData = this.FindPlayerIndexAndData(data.seat);
            if (playerIndexAndData != null) {
                console.log("前  更新玩家数据");
                console.log(this.privRoomData.matchPlayers[playerIndexAndData.index]);
                this.privRoomData.matchPlayers[playerIndexAndData.index].state = data.value;
                console.log("后  更新玩家数据");
                console.log(this.privRoomData.matchPlayers[playerIndexAndData.index]);
            }
        }
        /**
         * 更新玩家数据
         * @param playerData 要更新的玩家数据
         */
        UpdateMatchPlayerData(playerData) {
            if (this.privRoomData != null && this.privRoomData.matchPlayers != null) {
                console.log("前  更新玩家数据");
                console.log(this.privRoomData.matchPlayers);
                let playerIndexAndData = this.FindPlayerIndexAndData(playerData.seat);
                if (playerIndexAndData != null) {
                    this.privRoomData.matchPlayers[playerIndexAndData.index] = playerData;
                }
                else {
                    this.privRoomData.matchPlayers.push(playerData);
                }
                console.log("后  更新玩家数据");
                console.log(this.privRoomData.matchPlayers);
            }
        }
        /**
         * 查找玩家信息
         * @param seat 座位
         */
        FindPlayerIndexAndData(seat) {
            let retData = null;
            let index = this.privRoomData.matchPlayers.findIndex(da => {
                if (da.seat == seat) {
                    retData = da;
                    return true;
                }
                return false;
            });
            if (index != -1) {
                return { index: index, data: retData };
            }
            return null;
        }
        /**
         * 发送创建房间
         * @param data
         */
        SendCreateRoom(data) {
            //let sendData: ParamConfigList = { datas : null }
            YK.NetMgr.Instance.Send(ActionType.CreatePrivRoomReq, data);
        }
        /**
         * 发送加入房间
         */
        SendJoinRoom(roomId) {
            let sendData = { roomId: roomId };
            YK.NetMgr.Instance.Send(ActionType.LoginPirvRoom, sendData);
        }
        /**
         * 发送玩家准备
         */
        SendUserReady() {
            YK.NetMgr.Instance.Send(ActionType.userReady, null);
        }
    }
    YK.PrivRoomMode = PrivRoomMode;
})(YK || (YK = {}));
//# sourceMappingURL=PrivRoomMode.js.map