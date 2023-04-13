import { MultiLingualName } from "./name";

export class Size extends MultiLingualName {
    id!:string;
    constructor(lang:string,name:string,sizeId:string) {
        super(lang,name);
        this.setSizeId(sizeId);
    }

    /**
     * Set the size id (mongodb ObjectId)
     * @param sizeId 
     */
   protected setSizeId=(sizeId:string):void=>{
        this.id = sizeId;
    }
/**
 * 
 * @returns size id
 */
   public getId=():string =>{
        return this.id;
    }
}