var YK;
(function (YK) {
    class DDZLogic {
        constructor() {
            this.CFG = {
                MAX_SHUN: 14,
                MAX_ZHA: 16
            };
        }
        static GetColorTypeAndValue(cardid) {
            let color = cardid >> 4;
            let value = cardid & 0x0F;
            return { color: color, value: value };
        }
        GetCardIndex(card) {
            let c = card & 0x0f;
            if (c == 0x01)
                c = 14;
            else if (c == 0x02)
                c = 16;
            else if (c == 0x0E)
                c = 17;
            else if (c == 0x0F)
                c = 18;
            return c;
        }
        /**
         * 获取牌的类型
         * @param outCards 外部
         */
        GetCardType(outCards) {
            let tmpCards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
            outCards.forEach(element => {
                let index = this.GetCardIndex(element);
                tmpCards[index] = tmpCards[index] + 1;
            });
            let counts = [0, 0, 0, 0];
            let cards = [[], [], [], []];
            for (var index = 0; index < tmpCards.length; index++) {
                var c = tmpCards[index];
                if (c > 0) {
                    counts[c] = counts[c] + 1;
                    cards[c].push(cards[c], index + 1);
                }
            }
            if (counts[3] != 0)
                return this.GetType4(counts, cards);
            else if (counts[2] != 0)
                return this.GetType3(counts, cards);
            else if (counts[1] != 0)
                return this.GetType2(counts, cards);
            else if (counts[0] != 0)
                return this.GetType1(counts, cards);
        }
        /**
         * 判断四张相同的牌的组合
         * @param counts 1,2,3,4组合的数目
         * @param cards 数目分别为1,2,3,4的牌
         */
        GetType4(counts, cards) {
            let ret = null;
            let sp = this.SplitCards(counts, cards);
            let lastCard = sp.cs_4[sp.cs_4.length - 1];
            let otherSum = sp.count3Num * 3 + sp.count2Num * 2 + sp.count1Num; //剩余的牌张数  除了炸弹
            if (sp.count4Num == 1) {
                if (otherSum == 0) {
                    ret = new CardTypeInfo(CardType.t_4, lastCard);
                }
                else if (otherSum == 2) //此处要注意能不能出现四代二是一个对子的两个
                 {
                    ret = new CardTypeInfo(CardType.t_42, lastCard);
                }
                else if (otherSum == 4 && sp.count2Num == 2) {
                    ret = new CardTypeInfo(CardType.t_422, lastCard);
                }
            }
            if (ret == null) {
                if (sp.count3Num > 1 && this.IsContinue(sp.cs_3)) //三张的个数大于三才有可能是飞机 那么可能就是飞机做了翅膀
                 {
                    //炸弹当单牌
                    if (sp.count3Num == 4) {
                        if (sp.count2Num + sp.count1Num == 0) //如果有三个三张的那么就不能有多余的牌了
                         {
                            ret = new CardTypeInfo(CardType.t_31n, sp.cs_3[sp.cs_3.length - 1], sp.count3Num);
                        }
                    }
                    else if (sp.count3Num == (2 + sp.count2Num) && sp.count1Num == 0) {
                        ret = new CardTypeInfo(CardType.t_32n, sp.cs_3[sp.cs_3.length - 1], sp.count3Num);
                    }
                }
                if (ret == null) {
                    if (sp.count4Num == 2 && otherSum == 0) {
                        ret = new CardTypeInfo(CardType.t_422, sp.cs_4[sp.cs_4.length - 1], sp.count3Num);
                    }
                }
                if (ret == null) {
                    if ((otherSum + sp.count4Num * 4) % 4 == 0) {
                        for (var index = 0; index < sp.count4Num; index++) {
                            let c = sp.cs_4.splice(0, 1);
                            sp.cs_3.push(c[0]);
                            sp.cs_1.push(c[0]);
                            counts[3]--;
                            counts[2]++;
                            counts[0]++;
                        }
                        sp.cs_3.sort((a, b) => {
                            if (a < b)
                                return -1;
                            else if (a == b)
                                return 0;
                            else
                                return 1;
                        });
                        return this.GetType3(counts, cards);
                    }
                }
            }
            return ret;
        }
        GetType3(counts, cards) {
            let ret = null;
            let sp = this.SplitCards(counts, cards);
            let lastCard = sp.cs_3[sp.cs_3.length - 1];
            let otherSum = sp.count2Num * 2 + sp.count1Num;
            if (sp.count3Num == 1) {
                if (sp.count2Num == 1 && sp.count1Num == 0) {
                    ret = new CardTypeInfo(CardType.t_32, lastCard);
                }
                else if (sp.count2Num == 0 && sp.count1Num == 1) {
                    ret = new CardTypeInfo(CardType.t_31, lastCard);
                }
                else if (sp.count2Num == 0 && sp.count1Num == 0) {
                    ret = new CardTypeInfo(CardType.t_3, lastCard);
                }
            }
            if (ret == null) {
                let sum = sp.count1Num + sp.count2Num * 2 + sp.count3Num * 3;
                let max = this.GetMaxContinue(sp.cs_3);
                if (max.length >= 2) {
                    if (sum / 3 == max.length && sp.count3Num == max.length) {
                        ret = new CardTypeInfo(CardType.t_3n, max[max.length - 1]);
                    }
                    else if (sum / 4 == max.length) {
                        ret = new CardTypeInfo(CardType.t_31n, max[max.length - 1]);
                    }
                }
                if (ret == null) {
                    //特殊型3334445556667778
                    if (max.length == 5 && sum == 16)
                        ret = new CardTypeInfo(CardType.t_31n, max[max.length - 1]);
                    else if (max.length == 6 && sum == 20)
                        ret = new CardTypeInfo(CardType.t_31n, max[max.length - 1]);
                }
            }
            return ret;
        }
        GetType2(counts, cards) {
            let ret = null;
            if (counts[0] == 0) {
                if (counts[1] == 1) {
                    ret = new CardTypeInfo(CardType.t_2, cards[1][cards[1].length - 1]);
                }
                if (this.IsContinue(cards[1]) && counts[1] > 2) {
                    ret = new CardTypeInfo(CardType.t_2n, cards[1][cards[1].length - 1], counts[2]);
                }
            }
        }
        GetType1(counts, cards) {
            let ret = null;
            let count = counts[0];
            if (count == 1) {
                ret = new CardTypeInfo(CardType.t_1, cards[0][cards[0].length - 1]);
            }
            else {
                if (count == 2 && cards[0][0] == 17 && cards[0][1] == 18) {
                    ret = new CardTypeInfo(CardType.t_king, cards[0][1]);
                }
                if (ret == null) {
                    if (cards[0].length >= 5 && this.IsContinue(cards[0])) {
                        ret = new CardTypeInfo(CardType.t_king, cards[0][cards[0].length - 1], cards[0].length);
                    }
                }
            }
            return ret;
        }
        SplitCards(counts, cards) {
            /**
             * 所有单牌
             */
            let cs_1 = cards[0];
            /**
             * 对子
             */
            let cs_2 = cards[1];
            /**
             * 三张的
             */
            let cs_3 = cards[2];
            /**
             * 四张相同的
             */
            let cs_4 = cards[3];
            let count4Num = counts[3];
            let count3Num = counts[2];
            let count2Num = counts[1];
            let count1Num = counts[0];
            return {
                cs_1: cs_1, cs_2: cs_2, cs_3: cs_3, cs_4: cs_4,
                count4Num: count4Num, count3Num: count3Num, count2Num: count2Num, count1Num: count1Num
            };
        }
        /**
         * 是否连续的牌
         * @param cards 牌列表
         */
        IsContinue(cards) {
            let last = -1;
            for (var index = 0; index < cards.length; index++) {
                var element = cards[index];
                if (last != -1 && last + 1 != element) {
                    return false;
                }
                last = element;
            }
            return true;
        }
        GetMaxContinue(cards) {
            let all = new Array();
            let temp = new Array();
            for (let index = 0; index < cards.length; index++) {
                let element = cards[index];
                if (temp.length > 0 && temp[temp.length - 1] == element - 1) {
                    temp.push(element);
                }
                else {
                    if (temp.length > 0) {
                        all.push(temp);
                    }
                    temp = new Array();
                    temp.push(element);
                }
            }
            let m = null;
            all.forEach(element => {
                if (m == null)
                    m = element;
                else if (element.length >= m.length) {
                    m = element;
                }
            });
            return m;
        }
        IsBig(info1, info2) {
        }
    }
    DDZLogic.CardPools = [
        0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,
        0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d,
        0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d,
        0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d,
        0x0E, 0x0F
    ];
    YK.DDZLogic = DDZLogic;
    /**
     * 牌的类型
     */
    let CardType;
    (function (CardType) {
        /**
         * 单张
         */
        CardType[CardType["t_1"] = 0] = "t_1";
        /**
         * 顺子
         */
        CardType[CardType["t_1n"] = 1] = "t_1n";
        /**
         * 对子
         */
        CardType[CardType["t_2"] = 2] = "t_2";
        /**
         * 连对
         */
        CardType[CardType["t_2n"] = 3] = "t_2n";
        /**
         * 三不带
         */
        CardType[CardType["t_3"] = 4] = "t_3";
        /**
         * 飞机不带
         */
        CardType[CardType["t_3n"] = 5] = "t_3n";
        /**
         * 三带一
         */
        CardType[CardType["t_31"] = 6] = "t_31";
        /**
         * 飞机带单牌
         */
        CardType[CardType["t_31n"] = 7] = "t_31n";
        /**
         * 三带二
         */
        CardType[CardType["t_32"] = 8] = "t_32";
        /**
        * 飞机带对
        */
        CardType[CardType["t_32n"] = 9] = "t_32n";
        /**
         * 炸弹
         */
        CardType[CardType["t_4"] = 10] = "t_4";
        /**
         * 四带二
         */
        CardType[CardType["t_42"] = 11] = "t_42";
        /**
         * 四带两对
         */
        CardType[CardType["t_422"] = 12] = "t_422";
        /**
         * 王炸
         */
        CardType[CardType["t_king"] = 13] = "t_king";
    })(CardType || (CardType = {}));
    /**
     * 牌的花色
     */
    let CardColor;
    (function (CardColor) {
        /**
         * 黑
         */
        CardColor[CardColor["Hei"] = 0] = "Hei";
        /**
         * 红
         */
        CardColor[CardColor["Hong"] = 1] = "Hong";
        /**
         * 梅
         */
        CardColor[CardColor["Mei"] = 2] = "Mei";
        /**
         * 方片
         */
        CardColor[CardColor["Fang"] = 3] = "Fang";
    })(CardColor = YK.CardColor || (YK.CardColor = {}));
    /**
     * 牌的类型信息
     */
    class CardTypeInfo {
        constructor(type, card, n = 0) {
            /**
             * 牌型
             */
            this.type = null;
            /**
             * 最大的牌
             */
            this.card = null;
            /**
             * 连着的长度
             */
            this.n = 0;
            this.type = type;
            this.card = card;
            this.n = n;
        }
    }
    YK.CardTypeInfo = CardTypeInfo;
})(YK || (YK = {}));
//# sourceMappingURL=DDZLogic.js.map