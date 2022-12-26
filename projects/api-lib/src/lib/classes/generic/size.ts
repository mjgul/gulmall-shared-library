import { MultiLingualName } from "./name";

export class Size extends MultiLingualName {
    id:string;
    constructor(name_en:string, name_ar:string,id:string){
        super(name_en,name_ar);
        this.id = id;
    }
}