import { Injectable } from "@angular/core";
import { Item } from "../items/item";
import { Color } from "../../classes/generic/color";
import { Size } from "../../classes/generic/size"
import { Image } from "../generic/image";
@Injectable({
  providedIn: 'root'
})
export class CartItem {
  private item: Item;
  private quantity: number;
  private color:Color;
  private size:Size;
  private itemMainImage:Image
  /**
   * by defauld the quantity will be 01.
   * @param item 
   */
  constructor(item: Item,selectedColor:Color,selectedSize:Size,img:Image) {
    console.log("$$----------------------Cart Item-------------------$$");
    console.log("$$ A new cart item has been added.");
    console.log("$$ Constructor call CartItem");

      this.item = item;
      this.quantity = 1;
      this.color = selectedColor;
      this.size = selectedSize;
      this.itemMainImage = img;
      console.log("$$ ", this);
    console.log("$$----------------------Cart Item-------------------$$");
  }

  /**
   * Returns the item main image.
   * @returns @type { Image }
   */
  public getMainImage=()=>{
  return this.itemMainImage;
  }

  /**
   * 
   * @returns Item
   */
  public getProduct = (): Item => {
    return this.item;
  };

  /**
   * 
   * @returns the quantity of item
   */
  public getQuantity = (): number => {
    return this.quantity;
  };

  /**
   * if the item is added it will decrease the quantity by 1.
   */
  public decreseQuantity = (): void => {
    if (this.quantity > 0) {
      this.quantity--;
    }
    console.log(this.quantity);
  };

  /**
   * Increases the quantity of item in cart.
   */
  public inceaseQuantity = (): void => {
    this.quantity += 1;
    console.log(this.quantity);
  };

  /**
   * Returns the Color item.
   * @returns Color
   */
  public getColor = ():Color=>{
    return this.color;
  }

  /**
   * Returns the size of item.
   * @returns Size
   */
  public getSize = ():Size=>{
    return this.size;
  }
}
