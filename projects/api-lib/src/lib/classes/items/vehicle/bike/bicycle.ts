import { Iname } from "../../../../interfaces/name";
import { Vehicle } from "../vehicle";

export class Bicycle extends Vehicle {
    constructor(){
        super();
    }
    public override getRequiredFields(){
        return "Kinly bicycle";
    } 
}