import { Item } from '../item';

export abstract class Animal extends Item {
    
    constructor(name:string,description:string,price:number,image:string[]){
        super(name,description,price,image);
    }
    
}