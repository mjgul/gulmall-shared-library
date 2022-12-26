import { Icart } from '../../interfaces/cart';
import { Payable } from '../../interfaces/payable';

export abstract class Item implements Payable {
  private name: string;
  private id?:string;
  private description: string;
  private price: number;
  private image?: string[];

  public abstract getRequiredFields():any;

  // Initiating the item attributes.
  constructor(
    name: string,
    description: string,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
  };

  // GET ITEM NAME
  public getItemName = (): string => {
    return this.name;
  };

  public getItemPrice = ():number => {
    return this.price;
  }

  // Get item Id
  public getItemId = ():string =>{
    return this.id || "";
  }

  public setImages = (images:string[]):string[] =>{
    this.image = images;
    return this.image;
  }

  // GET ITEM DESCRIPTION
  public getItemDescription = (): string => {
    return this.description;
  };

  public getItemImages = (): string[] => {
    return this.image || [];
  };

  // method required to carry out contract with interface Payable
  public getPaymentAmount() {
    return this.price; // calculate total cost
  };

  public itemBluePrint(){
    return  `${this.getItemName()}_${this.id}`
  }
}
