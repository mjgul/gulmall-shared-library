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
    route.apiroute = `get-ads-by-id?id=${publicId}`;
    return (await this.api.GET(route));
  }

  /**
   * Get user data by mongodb id
   * @param publicId 
   * @returns User Object
   */
  getUserByPublicId=async(publicId:number)=>{
    let route:any = {};
    route.apiroute = `get-user-by-id`;
    route.data = {"id":publicId};
    return (await this.api.POST(route));
  }

/**
 * 
 * Update user object
 * @param updateObject {userId:"userMongodbId", ...}
 * @returns response
 */
  updateUser=async(updateObject:any)=>{
    let route:any = {};
    route.apiroute = `update-user`;
    route.data = updateObject;
    return (await this.api.POST(route));
  }

  isPhoneExist=async (phone:number)=>{
    let route:any = {};
    route.apiroute = `check-phone-number?phone=${phone}`
    return (await this.api.GET(route));
  }

  isMailExist=async (email:string)=>{
    let route:any = {};
    route.apiroute = `check-email?email=${email}`
    return (await this.api.GET(route));
  }

  isMailVerified=async (email:string)=>{
    let route:any = {};
    route.apiroute = `check-email-verified?email=${email}`
    return (await this.api.GET(route));
  }
}
