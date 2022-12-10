import { Payable } from '../interface/payable';

export abstract class Employee implements Payable {
        private firstName!:string;
        private lastName!:string;
        private socialSecurityNumber!:string;

         constructor (firstName:string,lastName:string,socialSecurityNumber:string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.socialSecurityNumber = socialSecurityNumber;
            }

            // return first name
        public getFirstName():string {return this.firstName;}
            // return last name
        public  getLastName():string {return this.lastName;}
            // return social security number
        public getSocialSecurityNumber():string {return this.socialSecurityNumber;}
        public abstract earnings():any;
    
        public toString():string {
            return `security number:${this.getSocialSecurityNumber()},
            "First Name", ${this.getFirstName()},
            "Last Name", ${this.getLastName()}`;
            }

            public getPaymentAmount():number {
            return this.earnings(); 
        }

}