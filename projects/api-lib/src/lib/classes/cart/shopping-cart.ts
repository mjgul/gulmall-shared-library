import { CartItem } from "./cart";
import { Icart, IClothingCart, IFruitCart } from '../../interfaces/cart';
import { Cloth } from "../items/fashion/cloths/cloths";
import { Fruit } from "../items/mart/fruit";
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

    public getCartDetails = (buyerId: string, paymentMethodId: string) => {
        let dummyArray: (IClothingCart | IFruitCart)[] = [];
      
        this.cartList.forEach((cartItem: CartItem) => {
          const product = cartItem.getProduct();
      
          const baseCart: Icart = {
            item_id: product.getChildSubCat().getId(),
            quantity: cartItem.getQuantity(),
            seller_id: product.getOwnerId(),
            user_id: buyerId,
            payment_method: paymentMethodId,
            delivery_status: 'Pending',
            discount: product.getDiscount(),
            currency: product.getCurrency(),
            category: product.getCategory().getName(),
            sub_category: product.getSubCategory().getName(),
            order_date:new Date()
          };
      
          if (product instanceof Cloth) {
            const cloth = product as Cloth;
            const cart: IClothingCart = {
              ...baseCart,
              color_id: cloth.getItemColorId(),
              size_id: cloth.getItemSizeId()
            };
            dummyArray.push(cart);
          } else if (product instanceof Fruit) {
            const fruit = product as Fruit;
            const cart: IFruitCart = {
              ...baseCart,
              origin:fruit.getFruitOrigin(),
              weight_in_kg: fruit.getFruitWeight()
            };
            dummyArray.push(cart);
          }
        });
      
        return dummyArray;
      };
      

    public totalNumberOfItems=():Number =>{
       return this.cartList.size;
    }

    public clearCart = () => {
        this.cartList.clear();
    };

    
}