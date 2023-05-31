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

  /**
   * Takes the Firebase User object and saves in Mongodb.
   * @param firebaseUserObject Firebase User object
   * @returns 
   */
  addUser=async(firebaseUserObject:any)=>{
    let route:any = {};
    route.apiroute = "add-mammals_registration";
    route.data = firebaseUserObject;
    return (await this.api.POST(route));
  }

  /**
   * Takes the public id and return its all posts with stats.
   */
  getUserPosts=async(publicId:number)=>{
    let route:any = {};
    route.apiroute = `get-ads-by-id/${publicId}`;
    return (await this.api.GET(route));
  }

  getUserById(){}

  updateUser(){}
}
