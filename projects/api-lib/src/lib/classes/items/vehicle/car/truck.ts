import { Iname } from "../../../../interfaces/name";
import { Vehicle } from "../vehicle";

export class Truck extends Vehicle {
    
    constructor(){
        super();
    }

    public override getRequiredFields(){
        return "Kinly truck";
    } 
}