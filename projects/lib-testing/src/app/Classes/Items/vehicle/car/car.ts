import { Vehicle } from "../vehicle";

export class Car extends Vehicle {
    constructor(name:string,description:string,price:number){
        super(name,description,price);
    }
}