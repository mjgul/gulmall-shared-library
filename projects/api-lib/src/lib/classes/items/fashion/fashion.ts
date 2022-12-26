import { Item } from "../item";
import { Color } from "../../generic/color";
import { Size } from "../../generic/size";
export abstract class Fashion extends Item {

    private availableColor:Color[];
    private availableSize:Size[];

    constructor(name:string,description:string,price:number,availableColors:Color[],availableSize:Size[]){
        super(name,description,price);
        this.availableColor = availableColors;
        this.availableSize = availableSize;
    }

    public override getRequiredFields(){
        return {message: "Kinly select size and color", options:[{name:'size',list:this.availableSize},{name:'color',list:this.availableColor}]};
    } 
   
}