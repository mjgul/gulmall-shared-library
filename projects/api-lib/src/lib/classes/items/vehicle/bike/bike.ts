import { Iname } from "../../../../interfaces/name";
import { Vehicle } from "../vehicle";

export class Bike extends Vehicle {
    constructor(){
        super();
    }

    public override getRequiredFields(){
        return "Kinly bike";
    } 
}