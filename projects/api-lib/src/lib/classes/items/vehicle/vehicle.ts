import { Iname } from "../../../interfaces/name";
import { Item } from "../item";

export abstract class Vehicle extends Item {

    constructor(name:Iname,description:string,price:number,categoryId:string,subCatId:string,itemId:string){
        super(name,description,price,categoryId,subCatId,itemId);
    }
    
   
}