import { Component, OnInit } from "@angular/core";
import { BasePlusCommissionEmployee } from "../../classes/BasePlusCommissionEmployee";
import { CommissionEmployee } from "../../classes/CommissionEmployee";
import { Employee } from "../../classes/Employee";
import { HourlyEmployee } from "../../classes/HourlyEmployee";
import { SalariedEmployee } from "../../classes/SalaryEmployee";
@Component({
  selector: "lib-class-test",
  templateUrl: "./class-test.component.html",
  styleUrls: ["./class-test.component.css"],
})
export class ClassTestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initiateObjects();
  }

  initiateObjects() {
    let salariedEmployee: SalariedEmployee = new SalariedEmployee(
      "John",
      "Smith",
      "111-11-1111",
      800.0
    );
    let hourlyEmployee: HourlyEmployee = new HourlyEmployee(
      "Karen",
      "Price",
      "222-22-2222",
      16.75,
      40
    );
    let commissionEmployee: CommissionEmployee = new CommissionEmployee(
      "Sue",
      "Jones",
      "333-33-3333",
      10000,
      0.06
    );
    let basePlusCommissionEmployee: BasePlusCommissionEmployee =
      new BasePlusCommissionEmployee(
        "Bob",
        "Lewis",
        "444-44-4444",
        5000,
        0.04,
        300
      );

     let employees:Employee[] = [];
     employees[0] = salariedEmployee;
     employees[1] = hourlyEmployee;
     employees[2] = commissionEmployee;
     employees[3] = basePlusCommissionEmployee;

    console.log ("Employees processed polymorphically:%n%n");

    employees.forEach(emp=>{
      
      if(emp instanceof BasePlusCommissionEmployee){
        let employee:BasePlusCommissionEmployee = emp as BasePlusCommissionEmployee;
        employee.setBaseSalary(1.10 * employee.getBaseSalary());
        console.log("new base salary with 10% increase is: ",employee.getBaseSalary());
        console.log(employee.toString());
      } else {
      console.log( emp.toString())
      }
      
    })
  }
}
