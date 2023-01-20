import { MultiLingualName } from "./name";

export class Color extends MultiLingualName {
    private id!:string;
    private colorHex!:string
    constructor(lang:string,name:string){
        super(lang,name);
    }
   
    /**
     * Set color id choosen from list.(Mongodb Id (ObjectId))
     * @param id string
     */
    public setId=(id:string):void => {
        this.id = id;
    }

    /**
     * Get color id.
     * @returns string color id
     */
    public getId=():string =>{
        return this.id;
    }

    /**
     * Get color code in hexadecimal.
     * @returns string color code #000000
     */
    public getColorCode=():string=>{
        return this.colorHex;
    }

    /**
     * Set color hexadecimal number.
     * @param colorHex string
     */
    public setCode=(colorHex:string)=>{
        this.colorHex= colorHex;
    }
}