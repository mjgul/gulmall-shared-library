import { Iname } from "projects/api-lib/src/lib/interfaces/name";
import { Vehicle } from "../vehicle";

export class Car extends Vehicle {
    private cylinder:number;
    constructor(name:Iname,description:string,price:number,categoryId:string,subCatId:string,itemId:string,cylinder:number){
        super(name,description,price,categoryId,subCatId,itemId);
        this.cylinder = cylinder;
    }

    public setCylinder(cylinder:number){
        this.cylinder = cylinder;
    }
    
    public getCylinder(){
        return this.cylinder;
    }

    public override getRequiredFields(){
        return "Kinly car";
    } 

    public override itemBluePrint(){
        return `${this.getItemName()}_${this.cylinder}`;
      }
}