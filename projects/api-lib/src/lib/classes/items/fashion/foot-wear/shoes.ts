import { Iname } from '../../../../interfaces/name';
import { Color } from '../../../generic/color';
import { Size } from '../../../generic/size';
import { Fashion } from '../fashion';

export class Shoes extends Fashion {
    private color!:Color;
    private size!:Size;
    constructor(){
        super();
        
    }

    public getItemSizeId=():string =>{
        return this.size.id;
    }

    public getItemColorId=():string =>{
        return this.color.getId();
    }

    public override itemBluePrint(){
        return `${this.getChildSubCat().getName(localStorage.getItem("language")||"").replace(/\ /g, '-')}_${this.getChildSubCat().getId()}_${this.color}_${this.size}`;
      }
}