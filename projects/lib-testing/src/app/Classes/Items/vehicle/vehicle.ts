import { Item } from "../Item";

export abstract class Vehicle extends Item {

    constructor(name:string,description:string,price:number,image:string[]){
        super(name,description,price,image);
    }
    
    public override method1 = (): number => {
        return 1;
    }
}