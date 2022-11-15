import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_IP } from './constants/config';
import { Subject, tap, throwError } from 'rxjs';
import { LoaderService } from './Services/loader.service';
@Injectable({
  providedIn: 'root',
})
export class JGSApiService {
  private tokenName = 'dm-token';
  private language = 'lang';
  private getTokenUrl = 'sessions/token';
  private appBaseUrl = `https://${SERVER_IP}/api/`;
  private getTokenAccess: any = {};
  private headersConfig: any = {};
  private errorSubscriber = new Subject();

  // CONSTRUCTOR API SERVICE
  constructor(public http: HttpClient, private loader:LoaderService) {}

  getRequestTest() {
    return this.http
      .get(
        'https://backend-development.digitalmall.app/api/vehicle-for-sale/post-statuses',
        { responseType: 'text' }
      )
      .pipe(
        tap({
          next: (data) => console.log(data),
        })
      );
  }

  postImages = (route: any) => {
    console.log("Uploading Images", route.apiroute);
    return this.http.post(this.appBaseUrl + route.apiroute, route.data, {
      headers: this.headersConfig,
      reportProgress: true,
      observe: 'events',
    });
  };
}
