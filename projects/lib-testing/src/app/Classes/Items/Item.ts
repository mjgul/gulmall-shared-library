import { Payable } from '../../Interface/payable';

export abstract class Item implements Payable {
  private name: string;
  private description: string;
  private price: number;
  private image?: string[];

  public abstract method1(): number;

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

}
