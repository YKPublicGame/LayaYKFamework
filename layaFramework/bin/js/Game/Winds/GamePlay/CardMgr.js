class CardMgr {
    constructor() {
        this.url = "ui://GamePack/CardMode";
        if (CardMgr.mInstance == null)
            CardMgr.mInstance = this;
        this.mPools = new fairygui.GObjectPool();
        fairygui.UIObjectFactory.setPackageItemExtension(this.url, CardItem);
    }
    static get Instance() {
        if (this.mInstance == null)
            new CardMgr();
        return this.mInstance;
    }
    Get(data) {
        let obj = this.mPools.getObject(this.url);
        if (obj != null) {
            obj.Use(data);
        }
    }
    Return(obj) {
        if (obj != null) {
            obj.UnUse();
        }
        this.mPools.returnObject(obj);
    }
    Clear() {
        this.mPools.clear();
    }
}
class ShowCardItemData {
    constructor() {
        this.isShow = true;
        this.id = 0x00;
        this.parent = null;
        this.x = 0;
        this.y = 0;
        this.scal = 1;
    }
}
//# sourceMappingURL=CardMgr.js.map