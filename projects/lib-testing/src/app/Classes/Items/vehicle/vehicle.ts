import { Item } from "../Item";

export abstract class Vehicle extends Item {

    constructor(name:string,description:string,price:number){
        super(name,description,price);
    }
    
    public override addToCart = (): number => {
        return 1;
    }
}