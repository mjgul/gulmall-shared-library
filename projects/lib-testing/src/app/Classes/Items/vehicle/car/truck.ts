import { Vehicle } from "../vehicle";

export class Truck extends Vehicle {
    constructor(name:string,description:string,price:number){
        super(name,description,price);
    }
}