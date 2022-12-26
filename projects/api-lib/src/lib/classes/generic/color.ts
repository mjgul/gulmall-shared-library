import { MultiLingualName } from "./name";

export class Color extends MultiLingualName {
    id:string;
    colorHex:string
    constructor(name_en:string, name_ar:string,colorHex:string,id:string){
        super(name_en,name_ar);
        this.id = id;
        this.colorHex = colorHex;
    }
}