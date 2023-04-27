import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";
import { Address } from "../../../classes/address/address";

@Injectable({
    providedIn: "root",
  })
  export class AddressService { 
    constructor(private api: JGSApiService, private address:Address) {}

     
    /**
     * Adds address to collection
     * @param Address
     */
    public saveAddress(address:Address){
        let apiRoute: any = {};
        apiRoute.apiroute = `add-address`;
        apiRoute.data = address;
       return this.api.POST(apiRoute)
    }
  }