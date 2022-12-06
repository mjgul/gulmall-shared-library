import { Payable } from "../../interface/payable";
export abstract class Item implements Payable {
  private name: string;
  private description: string;
  private price: number;
  private image: string[];

  public abstract method1():number;

  // Initiating the item attributes.
  constructor(
    name: string,
    description: string,
    price: number,
    image: string[]
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  // GET ITEM NAME
  public getItemName = (): string => {
    return this.name;
  };

  // GET ITEM DESCRIPTION
  public getItemDescription = (): string => {
    return this.description;
  };

  public getItemImages = (): string[] => {
    return this.image;
  };

  // method required to carry out contract with interface Payable
  public getPaymentAmount() {
    return this.price; // calculate total cost
  }
}
