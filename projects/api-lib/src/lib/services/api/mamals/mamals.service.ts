import { Injectable } from '@angular/core';
import { JGSApiService } from '../../../api-lib.service';
import { user } from '../../../interfaces/userSchema';
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
   * {"email":string,
  "displayName": string,
  "photoUrl":string,
  "primaryPhone":string,
  "uid":string,
  "providerInfo":string,
  "platform":string } 
   */
  addUser=async(userObj:user)=>{
    let route:any = {};
    route.apiroute = "create-user";
    route.data = userObj;
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

  /**
   * 
   * @param phone 
   * @returns JOSN
   */
  isPhoneExist(phone:number){
    let route:any = {};
    route.apiroute = `check-phone-number?phone=${phone}`
    return this.api.GET(route);
  }

  /**
   * 
   * @param email 
   * @returns JSON
   */
  isMailExist (email:string){
    let route:any = {};
    route.apiroute = `check-email?email=${email}`
    return this.api.GET(route);
  }

  /**
   * 
   * @param email 
   * @returns JSON
   */
  isMailVerified(email:string){
    let route:any = {};
    route.apiroute = `check-email-verified?email=${email}`
    return  this.api.GET(route);
  }

  /**
   * 
   * @param email 
   * @returns JSON
   */
  signinEmail(email:string){
    let route:any = {};
    route.apiroute = `signin-email?email=${email}`
    return  this.api.GET(route);
  }

   /**
   * 
   * @param phone 
   * @returns JSON
   */
   signinPhone(phone:number){
    let route:any = {};
    route.apiroute = `signin-phone?phone=${phone}`
    return  this.api.GET(route);
  }

  /**
   * 
   * @return JSON
   * {phone:"string"}
   */

  async sendOtp(phoneObj:any){
    let route:any = {};
    route.apiroute = `send-otp`;
    route.data = phoneObj;
    return (await this.api.POST(route));
  }

  /**
   * 
   * @return JSON
   * {phone:"string",otp:"123456"}
   */

  async verifyOtp(verifyObj:any){
    let route:any = {};
    route.apiroute = `verify-otp`;
    route.data = verifyObj;
    return (await this.api.POST(route));
  }


}
