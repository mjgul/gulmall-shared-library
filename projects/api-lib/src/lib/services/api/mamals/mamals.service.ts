import { Injectable } from '@angular/core';
import { JGSApiService } from '../../../api-lib.service';
@Injectable({ providedIn: 'root'})
export class MamalsService {
  constructor(private api:JGSApiService) { }

  getAllUser(){
    let route:any = {};
    route.apiroute = "get-user";
    return this.api.GET(route)
  }

  addUser(){}

  getUserById(){}

  updateUser(){}
}
