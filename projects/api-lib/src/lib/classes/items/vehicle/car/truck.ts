import { Iname } from "projects/api-lib/src/lib/interfaces/name";
import { Vehicle } from "../vehicle";

export class Truck extends Vehicle {
    constructor(name:Iname,description:string,price:number,categoryId:string,subCatId:string,itemId:string){
        super(name,description,price,categoryId,subCatId,itemId);
    }

    public override getRequiredFields(){
        return "Kinly truck";
    } 
}