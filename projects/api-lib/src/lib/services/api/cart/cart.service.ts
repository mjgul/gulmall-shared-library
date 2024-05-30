import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";
import { Icart } from "../../../interfaces/cart";
import { HttpClient } from '@angular/common/http';
import { SERVER_IP } from "../../../constants/config";
@Injectable({
  providedIn: "root",
})
export class CartService {
  private appBaseUrl = SERVER_IP;
  constructor(private api: JGSApiService,public http: HttpClient) {}

  /**
   * ADD TO CART FOR CLOTHING/FASHION
   * @param Icart {Icart}
   */
  public addToCart=async(object: Icart[])=> {
    let url = `add-cart-fashion`;
    return await this.http.post(`${this.appBaseUrl}/${url}`,{orders:object})
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
    apiRoute.apiroute = `get-all-cart`;
    return this.api.GET(apiRoute);
  };
}
