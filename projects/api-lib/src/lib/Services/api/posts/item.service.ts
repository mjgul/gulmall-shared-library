import { Injectable } from '@angular/core';
import { JGSApiService } from '../../../api-lib.service';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
   
  constructor(private api:JGSApiService) { }

  getApiTest = async()=>{
    let apiRoute: any = {};
    apiRoute.apiroute = "get-all-item";
    return  this.api.GET(apiRoute);
  }

  // POST
  getAllItem(){
    let apiRoute: any = {};
    apiRoute.apiroute = "get-all-item";
    return  this.api.GET(apiRoute);
  }

   // POST
   getAllItemWithStatus(_status:string){
    let apiRoute: any = {};
    apiRoute.apiroute = "get-item-with-status";
    apiRoute.data = {status:_status};
    return  this.api.POST(apiRoute);
  }

  // POST
  getItemById(_id:string){
    let apiRoute: any = {};
    apiRoute.apiroute = "get-item-by-id";
    apiRoute.data = {item_id:_id};
    return  this.api.POST(apiRoute);
  }

  updateItem(){}

  updateItemById(_item:any,_id:string){}

  deleteItemById(_id:string){
    let apiRoute: any = {};
    apiRoute.apiroute = "delete-item-by-id";
    apiRoute.data = {item_id:_id};
    return  this.api.POST(apiRoute);
  }

}