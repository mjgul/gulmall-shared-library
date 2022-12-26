import { Color } from '../../../generic/color';
import { Size } from '../../../generic/size';
import { Fashion } from '../fashion';

export class Shoes extends Fashion {
    private color:Color;
    private size:Size;
    constructor(name:string, description:string,price:number,color:Color,size:Size,
        availableColor:Color[], availableSize:Size[]){
        super(name,description,price,availableColor,availableSize);
        this.color=color;
        this.size=size;
    }

    public getItemSizeId=():string =>{
        return this.size.id;
    }

    public getItemColorId=():string =>{
        return this.color.id;
    }

    public override itemBluePrint(){
        return `${this.getItemName().replace(/\ /g, '-')}_${this.getItemId()}_${this.color}_${this.size}`;
      }
}