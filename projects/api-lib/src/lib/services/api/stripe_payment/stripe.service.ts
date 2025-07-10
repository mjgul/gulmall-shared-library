import { Injectable } from '@angular/core';
import { JGSApiService } from "../../../api-lib.service";
@Injectable({
      providedIn: 'root'
    })
export class StripePaymentService 
{
      constructor(private api:JGSApiService){}

      public initializePayment = async (amount:number) => {
            let apiRoute:any = {};
            apiRoute.apiroute = `stripe/create-payment-intent`;
            apiRoute.data = {amount:amount};
            return await (this.api.POST(apiRoute))
          }
}