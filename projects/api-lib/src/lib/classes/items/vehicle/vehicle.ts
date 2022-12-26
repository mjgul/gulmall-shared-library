import { Item } from "../item";

export abstract class Vehicle extends Item {

    constructor(name:string,description:string,price:number){
        super(name,description,price);
    }
    
   
}