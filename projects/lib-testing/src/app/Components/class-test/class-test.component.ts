import { Component, OnInit } from "@angular/core";
import { BasePlusCommissionEmployee } from "api-lib";
import { CommissionEmployee } from "api-lib";
import { Employee } from "api-lib";
import { HourlyEmployee } from "api-lib";
import { SalariedEmployee } from "api-lib";
import { Payable  } from 'api-lib';
import { Invoice } from "api-lib";
import { Item } from "api-lib";

@Component({
  selector: "lib-class-test",
  templateUrl: "./class-test.component.html",
  styleUrls: ["./class-test.component.css"],
})
export class ClassTestComponent implements OnInit {
  items:Item[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initiateInvoice();
  }

  initiateObjects() {
    let salariedEmployee: SalariedEmployee = new SalariedEmployee(
      "Muhammad",
      "Gul",
      "111-11-1111",
      800.0
    );
    let hourlyEmployee: HourlyEmployee = new HourlyEmployee(
      "Hamayuen",
      "Naseer",
      "222-22-2222",
      16.75,
      40
    );
    let commissionEmployee: CommissionEmployee = new CommissionEmployee(
      "Malik",
      "Usama",
      "333-33-3333",
      10000,
      0.06
    );
    let basePlusCommissionEmployee: BasePlusCommissionEmployee =
      new BasePlusCommissionEmployee(
        "Madeeha",
        "Waheed",
        "444-44-4444",
        5000,
        0.04,
        300
      );

      // ASSIGNING A SUPER CLASS REFERANCE TO SUPERCLASS VERIABLE IS STRAIGHTFORWARD.

      // Assigning a subclass reference to a subclass variable is straightforward.

     let employees:Employee[] = [];
     employees[0] = salariedEmployee;
     employees[1] = hourlyEmployee;
     employees[2] = commissionEmployee;
     employees[3] = basePlusCommissionEmployee;

    console.log ("Employees processed polymorphically:");

    employees.forEach(emp=>{
      console.log(emp.toString());
      if(emp instanceof BasePlusCommissionEmployee){
        let employee:BasePlusCommissionEmployee = emp as BasePlusCommissionEmployee;
        employee.setBaseSalary(1.10 * employee.getBaseSalary());
        console.log("new base salary with 10% increase is: ",employee.getBaseSalary());
      }
      emp.earnings();
      
    })
  }

  initiateInvoice(){
    let payableObjects: Payable[] = [];
    let inv =  new Invoice("01234", "seat", 2, 375.00);
    let inv1 = new Invoice("56789", "tire", 4, 79.95);
    let emp =  new SalariedEmployee("John", "Smith", "111-11-1111", 800.00);
    let emp1 = new SalariedEmployee("Lisa", "Barnes", "888-88-8888", 1200.00);

    payableObjects.push(inv);
    payableObjects.push(inv1);
    payableObjects.push(emp);
    payableObjects.push(emp1)
    console.log("Invoices and Employees processed polymorphically:");
    // generically process each element in array payableObjects
    payableObjects.forEach((payable:Payable)=>{
      console.log("Payment due:-  ");
      console.log( payable.getPaymentAmount());
    })
  }

  itemTest(){
    console.log("item testing");

  }

  createFood = () => {}
  createFashion = () => {
    // create fashion object
    //let fashion:Fashion = new Fashion({en:"",ar:""},)
  }
 
}