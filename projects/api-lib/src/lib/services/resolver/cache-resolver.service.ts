import { HttpResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable()
export class CacheResolverService{
  // we will store HttpResponse in a map with key as unique identifire.
  // this will be acting as a identifire and it will hold the list of responses.
  private cache = new Map<string,[Date,HttpResponse<any>]>();
  constructor() {}

  set(key:any,value:any,timeToLive:number|null = null){
    console.log('set cache key',key);
    if(timeToLive){
      const expiresIn = new Date();
      expiresIn.setSeconds(expiresIn.getSeconds() + timeToLive);
      // if we dont have to expire then put null here.
      this.cache.set(key,[expiresIn,value ]);
    }
  }

  get(key:any){
    const tuple = this.cache.get(key);
    if(!tuple) return null;
    // extract tuple.
    const expiresIn = tuple[0];
    const httpSavedResponse = tuple[1];
    const timeNow = new Date();
    if(expiresIn && expiresIn.getTime() < timeNow.getTime()){
      this.cache.delete(key);
      return null;
    }
     return httpSavedResponse;
  }

}