import { Item } from "../items/item";

export class CartItem{
  private item:Item;
  private quantity:number;
  
  constructor(item:Item){
    this.item=item;
    this.quantity = 1;
  }

  public getProduct = ():Item => {
    return this.item
  }

  public getQuantity = ():number => {
    return this.quantity;
  }

  public decreseQuantity = ():void =>{
    if(this.quantity > 0){
      this.quantity --;
    }
    console.log(this.quantity);
  }

  public inceaseQuantity = ():void => {
    this.quantity += 1;
    console.log(this.quantity);
  }
}