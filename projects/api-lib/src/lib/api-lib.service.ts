import {
  HttpClient
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_IP } from './constants/config';
import { LoaderService } from './services/loader.service';

@Injectable({
  providedIn: 'root',
})

export class JGSApiService {
  private appBaseUrl = SERVER_IP

  // CONSTRUCTOR API SERVICE
  constructor(public http: HttpClient, private loader: LoaderService) {}
  
  // COMMON GET REQUEST
  GET = async (route: any) => {
    return await this.http.get(`${this.appBaseUrl}/${route.apiroute}`);
  };

  // COMMON POST REQUEST
  POST = async(route:any) => {
    return await this.http.post(`${this.appBaseUrl}/${route.apiroute}`,route.data);
  }

  // COMMON PUT REQUEST
  PUT = async(route:any) => {
    return await this.http.put(`${this.appBaseUrl}/${route.apiroute}`,route.data);
  }

  // COMMON DELETE REQUEST
  DELETE = async(route:any) => {
    return await this.http.delete(`${this.appBaseUrl}/${route.apiroute}`,route.data);
  }

  postImages = (route: any) => {
    return this.http.post(`${this.appBaseUrl}/${route.apiroute}`, route.data, {
      reportProgress: false,
      observe: 'events',
    });
  };
}