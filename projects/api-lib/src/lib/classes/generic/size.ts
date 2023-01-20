import { MultiLingualName } from "./name";

export class Size extends MultiLingualName {
    id!:string;
    constructor(lang:string,name:string) {
        super(lang,name);
    }

    /**
     * Set the size id (mongodb ObjectId)
     * @param sizeId 
     */
    setSizeId=(sizeId:string):void=>{
        this.id = sizeId;
    }

    getId=()=>{
        return this.id;
    }
}