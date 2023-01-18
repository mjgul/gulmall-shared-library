import { Iname } from "../../../../interfaces/name";
import { Color } from "../../../generic/color";
import { Size } from "../../../generic/size";
import { Fashion } from "../fashion";

export class Cloth extends Fashion {

    private color!:Color;
    private size!:Size;

    constructor(){
        super();
    }

    public setColor = (color:Color):void => {
        this.color = color;
    }

    public setSize = (size:Size):void => {
        this.size = size;
    }

    public getItemSizeId=():string =>{
        return this.size.getId();
    }

    public getItemColorId=():string =>{
        return this.color.getId();
    }

    public override itemBluePrint(){
        return `${this.getItemName().en.replace(/\ /g, '-')}_${this.getItemId()}_${this.color}_${this.size}`;
      }

}