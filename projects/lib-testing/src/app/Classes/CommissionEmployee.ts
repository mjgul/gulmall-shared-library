import { Employee } from './Employee';
export class CommissionEmployee extends Employee {
    private  grossSales:number; // gross weekly sales
    private  commissionRate:number; // commission percentage

     constructor(firstName:string,lastName:string,socialSecurityNumber:string,grossSales:number,commissionRate:number) {
        super(firstName, lastName, socialSecurityNumber);
        if (commissionRate <= 0.0 || commissionRate >= 1.0) { // validate throw new IllegalArgumentException(
        "Commission rate must be > 0.0 and < 1.0"; }
        if (grossSales < 0.0) { // validate
        throw new Error("Gross sales must be >= 0.0");
        }
        this.grossSales = grossSales;
        this.commissionRate = commissionRate; }

        // set gross sales amount
public  setGrossSales = (grossSales:number):void => { if (grossSales < 0.0) { // validate
    throw new Error("Gross sales must be >= 0.0"); }
    this.grossSales = grossSales; }
    
     // return gross sales amount
public  getGrossSales = ():number => {return this.grossSales;}

// set commission rate
public  setCommissionRate = (commissionRate:number) => {
if (commissionRate <= 0.0 || commissionRate >= 1.0) { // validate
    throw new Error( "Commission rate must be > 0.0 and < 1.0");
}
this.commissionRate = commissionRate; }

// return commission rate
public  getCommissionRate = ():number => {return this.commissionRate}

// calculate earnings; override abstract method earnings in Employee
public override earnings() {
return this.getCommissionRate() * this.getGrossSales(); }


public override toString():String {
return `"commission employee", ${super.toString()},
"gross sales", ${this.getGrossSales()},
"commission rate", ${this.getCommissionRate()}`;
}
}