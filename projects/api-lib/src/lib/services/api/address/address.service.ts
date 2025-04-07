import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";
import { HttpClient } from '@angular/common/http';
import { Address } from "../../../interfaces/address";
import { lastValueFrom } from 'rxjs';
@Injectable({
    providedIn: "root",
  })
  export class AddressService { 
    
    private ipstackApiAccessKey:string = "5afee7526c541569085a261da449374d";
    private ipAPIKey:string = "03f65674d5dba55ba97bf284a18c6236";
    constructor(private api: JGSApiService,public http: HttpClient) {
  
    }

     
    /**
     * Adds address to collection
     * @param Address
     */
    public saveAddress=async(address:Address,userId:string)=>{
        let apiRoute: any = {};
        apiRoute.apiroute = `add-address?userId=${userId}`;
        apiRoute.data = address;
       return this.api.POST(apiRoute)
    }

    public getAddressByUserId=async(userId:string)=>{
        let apiRoute: any = {};
        apiRoute.apiroute = `get-address?userId=${userId}`;
        return this.api.GET(apiRoute)
    }

   

    public getLocationFromIP=async(ip:string)=>{
      
      let url= `http://api.ipstack.com/${ip}?access_key=${this.ipstackApiAccessKey}`;
      return await lastValueFrom(this.http.get(url));
    }

    public getMyIp= async ()=>{
        let url = `https://api.ipify.org/?format=json`;
        return await lastValueFrom (this.http.get(url));
    }

  }