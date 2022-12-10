import { Item } from "../Item";

export abstract class Fashion extends Item {
    constructor(name:string,description:string,price:number,image:string[]){
        super(name,description,price);
    }
}