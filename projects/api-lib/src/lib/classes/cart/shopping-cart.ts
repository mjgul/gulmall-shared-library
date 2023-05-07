import { CartItem } from "./cart";
import { Icart } from '../../interfaces/cart';
import { Cloth } from "../items/fashion/cloths/cloths";
import { Item } from "../items/item";
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
        console.log("ADDING this ITEM IN CART::" , item.getProduct())
        let bluePrint = item.getProduct().itemBluePrint();
        let getItemByName = this.cartList.get(bluePrint);
        if(getItemByName){
            let cartItem = this.cartList.get(bluePrint);
            cartItem?.inceaseQuantity()
        } else {
        this.cartList.set(bluePrint,item);
        let addedElement = this.cartList.get(bluePrint);
        console.log("ADDING this ITEM IN CART after got added in map::" , addedElement);
        }
    }

    public removeProduct = (bluePrint:string):boolean =>{
       console.log("LIB** Cart LIST :- ",this.cartList);
       return this.cartList.delete(bluePrint);
    }

    public getQuantity = (item_id:string):number => {
       return 0;
    }

    public totalPrice = () =>{
        let totalCost:number = 0;
        this.cartList.forEach(item => {
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
                let cart:Icart  = {
                    item_id:cloth.getChildSubCat().getId(),
                    color_id:cloth.getItemColorId(),
                    size_id:cloth.getItemSizeId(),
                    quantity:cartItem.getQuantity(),
                    discount:cloth.getDiscount(),
                    total_price:cartItem.getQuantity() * cloth.getItemPrice(),
                    seller_info:cloth.getOwnerId(),
                    order_date: new Date().toISOString(),
                    mammal_id:"MY_ID",
                    payement_method:"NOT_SET",
                    delivery_status:'PENDING',
                };
                dummyArray.push(cart);
            } 
        });
        return dummyArray;
    }

    public totalNumberOfItems=():Number =>{
       return this.cartList.size;
    }
}