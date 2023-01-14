import { Item } from "../item";
import { Color } from "../../generic/color";
import { Size } from "../../generic/size";
import { Iname } from "../../../interfaces/name";
export abstract class Fashion extends Item {

    private availableColor:Color[];
    private availableSize:Size[];

    constructor(name:Iname,description:string,price:number,categoryId:string,subCategoryId:string,itemId:string,availableColors:Color[],availableSize:Size[]){
        super(name,description,price,categoryId,subCategoryId,itemId);
        this.availableColor = availableColors;
        this.availableSize = availableSize;
    }

    public override getRequiredFields(){
        return {message: "Kinly select size and color", options:[{name:'size',list:this.availableSize},{name:'color',list:this.availableColor}]};
    } 
   
}