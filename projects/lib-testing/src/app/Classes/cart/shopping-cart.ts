import { Item } from "../Items/Item";
import { CartItem } from "./cart";
import { Icart } from 'api-lib';
import { Cloth } from "../Items/fashion/Cloths/cloths";
export class ShoppingCart {
    private static INSTANCE:ShoppingCart;
    
    private cartList: Map<string, CartItem>;

    constructor(){
        console.log('cart list initiated');
        this.cartList = new Map<string, CartItem>()   
    }

    public getCartList(){
        return this.cartList || null;
    }

    public addItem = (item:CartItem):void => {
       
        let getItemByName = this.cartList.get(item.getProduct().itemBluePrint());

        if(getItemByName){
            let cartItem = this.cartList.get(item.getProduct().itemBluePrint());
            cartItem?.inceaseQuantity()
        } else {
        this.cartList.set(item.getProduct().itemBluePrint(),item);
        }
    }

    public removeProduct = (item_blue_print:string):void =>{
       this.cartList.delete(item_blue_print);
    }

    public getQuantity = (item_id:string):number => {
       return 0;
    }

    public totalPrice = () =>{
        let totalCost:number = 0;
        this.cartList.forEach(item=>{
            let eachCost = item.getProduct().getItemPrice() * item.getQuantity();
            totalCost += eachCost;
        });
        return totalCost;
    }

    public getCartDetails = () =>{
        let dummyArray:Icart[] = [];
        this.cartList.forEach((cartItem:CartItem,key:string)=>{
            if(cartItem.getProduct() instanceof Cloth){
                let cloth = cartItem.getProduct() as Cloth;
                let cart:Icart  = {item_id:cloth.getItemId(),color_id:cloth.getItemColor(),size_id:cloth.getItemSize(),quantity:cartItem.getQuantity()};
                dummyArray.push(cart);
            } else {
                let item = cartItem.getProduct();
                let cart:Icart = {item_id:item.getItemId(),quantity:cartItem.getQuantity()};
                dummyArray.push(cart);
            }
        });
        return dummyArray;
    }
}