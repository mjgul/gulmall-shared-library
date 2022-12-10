import { Item } from "../Items/Item";
import { CartEntry } from "./cart";

export class ShoppingCart {
    private static INSTANCE:ShoppingCart;
    
    private cartList: Map<string, CartEntry>;

    constructor(){
        this.cartList = new Map<string, CartEntry>()
    }

    public static getInstance=():ShoppingCart =>{
        if(this.INSTANCE  === null){
            this.INSTANCE = new ShoppingCart();
        }
        return this.INSTANCE;
    }

    public addProduct = (item_id:string):void => {
      let cart:CartEntry = this.cartList.get(item_id)!;
      if(cart != null){
        cart.inceaseQuantity();
      } else {
        //let item:Item = item.getItemId();
        //let cartEntry:CartEntry = new CartEntry(item,quantity:1);
         //this.cartList.set(item_id,cartEntry)
      }
    }

    public removeProduct = (item_id:string):void =>{
        let cart:CartEntry = this.cartList.get(item_id)!;
        if(cart != null) {
            cart.decreseQuantity();
        }
    }

    public getQuantity = (item_id:string):number => {
        let cart:CartEntry  = this.cartList.get(item_id)!;
        if(cart != null) {
            return cart.getQuantity();
        } else {
            return 0;
        }
    }

    public totalPrice = () =>{
        let totalCost:number = 0;
        this.cartList.forEach(item=>{
            let eachCost = item.getProduct().getItemPrice() * item.getQuantity();
            totalCost += eachCost;
        })
        return totalCost;
    }
}