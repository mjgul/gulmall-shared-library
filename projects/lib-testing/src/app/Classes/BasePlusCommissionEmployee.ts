import { CommissionEmployee } from "./CommissionEmployee";

export class BasePlusCommissionEmployee extends CommissionEmployee {
  private baseSalary: number; // base salary per week
  // constructor

  public constructor(
    firstName: string,
    lastName: string,
    socialSecurityNumber: string,
    grossSales: number,
    commissionRate: number,
    baseSalary: number
  ) {
    super(
      firstName,
      lastName,
      socialSecurityNumber,
      grossSales,
      commissionRate
    );
    if (baseSalary < 0.0) {
      // validate baseSalary
      throw new Error("Base salary must be >= 0.0");
    }
    this.baseSalary = baseSalary;
  }

  //
  public setBaseSalary = (baseSalary: number): void => {
    if (baseSalary < 0.0) {
      // validate baseSalary
      throw new Error("Base salary must be >= 0.0");
    }
    this.baseSalary = baseSalary;
  };

  //return base salary
  public getBaseSalary = (): number => {
    return this.baseSalary;
  };

  // calculate earnings; override method earnings in CommissionEmployee
  public override earnings = () => {
    return this.getBaseSalary() + super.earnings();
  };

  // return String representation of BasePlusCommissionEmployee object

  public override toString(): String {
    return `"Commission plus based", ${super.toString()},"base salary", ${this.getBaseSalary()}`;
  }
}
