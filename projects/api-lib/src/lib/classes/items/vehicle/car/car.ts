import { Vehicle } from "../vehicle";

export class Car extends Vehicle {
    private cylinder!:number;
    constructor(){
        super();
    }

    public setCylinder(cylinder:number){
        this.cylinder = cylinder;
    }
    
    public getCylinder(){
        return this.cylinder;
    }

    public override getRequiredFields(){
        return "Kinly car";
    } 

    public override itemBluePrint(){
        return `${this.getChildSubCat().getName(localStorage.getItem("language")||"")}_${this.cylinder}`;
      }
}