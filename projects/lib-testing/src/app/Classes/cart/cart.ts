import { Item } from "../Items/Item";

export class CartEntry{
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
  }

  public inceaseQuantity = ():void => {
    this.quantity += 1;
  }


}



/*
export class Cart {
    item_id :string; 
    color_id:string;
    size_id :string; 
    quantity:number;

  constructor(item_id:string,color_id:string,size_id:string) {
    this.item_id = item_id;
    this.color_id = color_id;
    this.size_id = size_id;
    this.quantity = 1;
  }


  /**
   * ADDS NEW ITEM IN CART AND RETURN THE WHOLE LIST.
   * @param newItem
   * @returns list of cart
   */
  /*public addItemInCart = (newItem: Item): Item[] => {
    if(this.cartList.length === 0) {
        this.cartList.push(newItem);
    } else {
        this.cartList.forEach((listItem,index)=>{
            // CLOTH IMPLEMENTATION USING POLYMORPHISM
            if(listItem instanceof Cloth){
                let cloth:Cloth = newItem as Cloth;
                if(listItem.getItemSize() === cloth.getItemSize() && listItem.getItemColor() === cloth.getItemColor()){
                  
                } else {
                  this.cartList.push(cloth);
                }
            } 
        })
    }
    return this.cartList;
  };*/

  /**
   * Delete item and return the cart list.
   * @param item:Item
   * @returns List of cart.
   */
  /*public removeItemFromCart = (item: Item): Item[] => {
    this.cartList.forEach((listItem, index) => {
      if (
        Object.entries(listItem).toString() === Object.entries(item).toString()
      ) {
        this.cartList.splice(index, 1);
      }
    });
    return this.cartList;
  };*/

//}
