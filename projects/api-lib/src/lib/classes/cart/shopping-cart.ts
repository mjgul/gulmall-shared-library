import { CartItem } from "./cart";
import { Icart } from '../../interfaces/cart';
import { Cloth } from "../items/fashion/cloths/cloths";
export class ShoppingCart {
    private static INSTANCE:ShoppingCart;
    
    private cartList: Map<string, CartItem>;

    constructor(){
        this.cartList = new Map<string, CartItem>()   
    }

    public getCartList(){
        return this.cartList || null;
    }

    public addItem = (item:CartItem):void => {
        
        let bluePrint = item.getProduct().itemBluePrint();
        let getItemByName = this.cartList.get(bluePrint);
        if(getItemByName){
            let cartItem = this.cartList.get(bluePrint);
            cartItem?.inceaseQuantity()
        } else {
        this.cartList.set(bluePrint,item);
        }
    }

    public removeProduct = (bluePrint:string):boolean =>{
       
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

    public getCartDetails = (buyerId:string,paymentMethodId:string) =>{
        let dummyArray:Icart[] = [];
        this.cartList.forEach((cartItem:CartItem,key:string)=>{

            if(cartItem.getProduct() instanceof Cloth){
                let cloth = cartItem.getProduct() as Cloth;
                let cart:Icart  = {
                    item_id:cloth.getChildSubCat().getId(),
                    color_id:cloth.getItemColorId(),
                    size_id:cloth.getItemSizeId(),
                    quantity:cartItem.getQuantity(),
                    total_price:cartItem.getQuantity() * cloth.getItemPrice(),
                    seller_info:cloth.getOwnerId(),
                    user_id:buyerId,
                    payement_method:paymentMethodId,
                    delivery_status:'PENDING',
                    discount:"0%",
                    currency:cloth.getCurrency(),
                    items_remaining_quantity: cloth.getRemainingQuantity() - cartItem.getQuantity()
                };
                dummyArray.push(cart);
            } 
        });
        return dummyArray;
    }

    public totalNumberOfItems=():Number =>{
       return this.cartList.size;
    }

    public clearCart = () => {
        this.cartList.clear();
    };

    
}