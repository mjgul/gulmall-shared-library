import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";
import { Icart } from "../../../interfaces/cart";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private api: JGSApiService) {}

  /**
   * ADD TO CART FOR CLOTHING/FASHION
   * @param Icart {Icart}
   */
  public addToCart=async(object: Icart[])=> {
    let apiRoute: any = {};
    apiRoute.apiroute = 'add-cart'
    apiRoute.data = {orders:object};
    return await this.api.POST(apiRoute)
  }

  /**
   * GET RECEIPT USING CART IT
   * @param cart_id
   */
  public getReceiptUsingCartId(cart_id: string) {
    let apiRoute: any = {};
    apiRoute.apiroute = `get-cart-with-id`;
    apiRoute.data = { cart_id };
    return this.api.POST(apiRoute);
  }

  public getAllCart = () => {
    let apiRoute: any = {};
    apiRoute.apiroute = `get-cart`;
    return this.api.GET(apiRoute);
  };

  /**
   * 2025-05-02
   * @returns carts
   */
  public getCartsByDate = (date:string) => {
    let apiRoute: any = {};
      apiRoute.apiroute = `get-cart?date=${date}`;  
    return this.api.GET(apiRoute);
  };

  /**
   * 2025-05-02
   * status could be Pending, Delivered, Rejected
   * @returns carts
   */
  public getCartByDateAndShippingStatus = (date:string,status:string) => {
    let apiRoute: any = {};
      apiRoute.apiroute = `get-cart?date=${date}&status=${status}`;
    return this.api.GET(apiRoute);
  };



}
