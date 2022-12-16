import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";
import { Icart } from '../../../interfaces/cart';

@Injectable({
    providedIn: "root",
  })
  export class CartService { 
    constructor(private api: JGSApiService) {}

    // ADD TO CART
    /**
     * @param {Cart}
     */
    public addToCart(object:Icart){
        let apiRoute: any = {};
        apiRoute.apiroute = `add-cart`;
        apiRoute.data = object;
       return this.api.POST(apiRoute)
    }


    // GET RECEIPT USING CART IT
    /**
     * @param cart_id
     */
     public getReceiptUsingCartId(cart_id:string){
        let apiRoute: any = {};
        apiRoute.apiroute = `get-cart-with-id`;
        apiRoute.data = {cart_id};
       return this.api.POST(apiRoute)
    }


   public getAllCart = () => {
    let apiRoute: any = {};
    apiRoute.apiroute = `get-all-cart`;
    return this.api.GET(apiRoute);
    } 

 
  }