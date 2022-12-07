import { Payable } from '../../Interface/payable';

export class Invoice implements Payable {
  private partNumber: string;
  private partDescription: string;
  private quantity: number;
  private pricePerItem: number;

  constructor(
    partNumber: string,
    partDescription: string,
    quantity: number,
    pricePerItem: number
  ) {
    if (quantity < 0) {
      // validate quantity
      throw new Error('Quantity must be >= 0');
    }
    if (pricePerItem < 0.0) {
      // validate pricePerItem
       throw new Error(
      ('Price per item must be >= 0'));
    }
    this.quantity = quantity;
    this.partNumber = partNumber;
    this.partDescription = partDescription;
    this.pricePerItem = pricePerItem;
  }
  //
  public getPartNumber(): string {
    return this.partNumber;
  }

  // get description
  public getPartDescription(): string {
    return this.partDescription;
  }

  // get quantity
  public getQuantity(): number {
    return this.quantity;
  }

  // get price per item
  public getPricePerItem(): number {
    return this.pricePerItem;
  }

  // return String representation of Invoice object

  public toString(): string {
    return `
 "invoice", "part number", ${this.getPartNumber()}, ${this.getPartDescription()},
 "quantity", ${this.getQuantity()}, "price per item", ${this.getPricePerItem()}`;
  }

  public getPaymentAmount(): number {
    return this.getQuantity() * this.getPricePerItem();
  }
  
}
