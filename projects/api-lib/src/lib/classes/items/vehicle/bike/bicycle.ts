import { Iname } from "../../../../interfaces/name";
import { Vehicle } from "../vehicle";

export class Bicycle extends Vehicle {
    constructor(name:Iname,description:string,price:number,categotyId:string,subCatId:string,itemId:string){
        super(name,description,price,categotyId,subCatId,itemId);
    }
    public override getRequiredFields(){
        return "Kinly bicycle";
    } 
}