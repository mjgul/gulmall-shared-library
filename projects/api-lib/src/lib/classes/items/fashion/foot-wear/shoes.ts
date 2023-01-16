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
        return this.color.id;
    }

    public override itemBluePrint(){
        return `${this.getItemName().en.replace(/\ /g, '-')}_${this.getItemId()}_${this.color}_${this.size}`;
      }
}