class CardItem extends fairygui.GComponent
{
    private back: fairygui.Controller
    private hua: fairygui.Controller
    private blackNum: fairygui.GTextField
    private redNum: fairygui.GTextField
    protected constructFromXML(xml: any): void
    {
        super.constructFromXML(xml);
        this.back = this.getController("back")
        this.hua = this.getController("hua")
        this.blackNum = this.getChild("blackNum").asTextField
        this.redNum = this.getChild("redNum").asTextField
    }
    public Use(data: ShowCardItemData)
    {
        if (data.isShow)
        {
            this.back.selectedIndex = 1
            let info = DDZLogic.GetColorTypeAndValue(data.id)
            if (info.value == 0x0E || info.value == 0x0F)
            {
                if (info.value == 0xE)
                {
                    info.color = 4
                }
                else
                {
                    info.color = 5
                }
                info.value = 0x0E
            }
            this.hua.selectedIndex = info.color
            this.redNum.text = info.value.toString(16)
            this.blackNum.text = this.redNum.text
        }
        else
        {
            this.back.selectedIndex = 0
        }
        this.parent = data.parent
        this.setScale(data.scal,data.scal)
        this.setXY(data.x, data.y)
    }

    public UnUse()
    {
        this.parent = null
    }

    public dispose()
    {
        super.dispose()
    }
}