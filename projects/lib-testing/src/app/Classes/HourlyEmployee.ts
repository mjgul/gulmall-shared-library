import { Employee } from './Employee';

export class HourlyEmployee extends Employee {
  private wage: number; // wage per hour
  private hours: number; // hours worked for week
  constructor(
    firstName: string,
    lastName: string,
    socialSecurityNumber: string,
    wage: number,
    hours: number
  ) {
    super(firstName, lastName, socialSecurityNumber);
    if (wage < 0.0) {
      // validate wage
      throw new Error('Hourly wage must be >= 0.0');
    }

    if (hours < 0.0 || hours > 168.0) {
      // validate hours
      throw new Error('Hours worked must be >= 0.0 and <= 168.0');
    }

    this.wage = wage;
    this.hours = hours;
  }

  //set wage
  public setWage = (wage: number): void => {
    if (wage < 0.0) {
      throw new Error('Hourly wage must be >= 0.0');
    }

    this.wage = wage;
  };

  public getWage = (): number => {
    return this.wage;
  };

  public setHours = (hours: number): void => {
    if (hours < 0.0 || hours > 168.0) {
      // validate hours
      throw new Error('Hours worked must be >= 0.0 and <= 168.0');
    }
    this.hours = hours;
  };

  //return hours worked
  public getHours = (): number => {
    return this.hours;
  };

  
  public earnings = (): number => {
    if (this.getHours() <= 40) {
      // no overtime
      return this.getWage() * this.getHours();
    } else {
      return (
        40 * this.getWage() + (this.getHours() - 40) * this.getWage() * 1.5
      );
    }
  };

  public override toString = ():string => {
    return `hourly employee:${super.toString()}, hourly wage ${this.getWage()}, "hours worked", ${this.getHours()}`;
}


}
