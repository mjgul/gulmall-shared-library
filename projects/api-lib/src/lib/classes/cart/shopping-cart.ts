import { CartItem } from "./cart";
import { Icart } from '../../interfaces/cart';
import { Cloth } from "../items/fashion/cloths/cloths";
export class ShoppingCart {
    private static INSTANCE:ShoppingCart;
    
    private cartList: Map<string, CartItem>;

    constructor(){
    console.log("$$ SHOPPING CART INSTANCIATED")
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
                let cart:Icart  = {item_id:cloth.getChildSubCat().getId(),color_id:cloth.getItemColorId(),size_id:cloth.getItemSizeId(),quantity:cartItem.getQuantity()};
                dummyArray.push(cart);
            } 
        });
        return dummyArray;
    }

    public totalNumberOfItems=():Number =>{
       return this.cartList.size;
    }
}