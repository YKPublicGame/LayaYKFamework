module YK
{
    export class ResponseMessageEvent extends EventData
    {
        public data : ResponseDataInfo | any = null
        constructor(type: string)
        {
            super(type, null);
        }

        public SetData(head: PackBase, msg: any)
        {
            this.cmd = head.cmd.toString()
            this.data = { head: head, msg: msg }
        }
        public get Data(): ResponseDataInfo
        {
            return this.data
        }
    }

    export type ResponseDataInfo =
        {
            head: PackBase,
            msg: any
        }
}