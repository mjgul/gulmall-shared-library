import { Vehicle } from "../vehicle";

export class Car extends Vehicle {
    private cylinder:number;
    constructor(name:string,description:string,price:number,cylinder:number){
        super(name,description,price);
        this.cylinder = cylinder;
    }

    public setCylinder(cylinder:number){
        this.cylinder = cylinder;
    }

    public getCylinder(){
        return this.cylinder;
    }
}