import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomHeaderInterceptor implements HttpInterceptor {

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const api_key= "jgs";
    const token:string = "000111"
    const Accept:string = "*/*"
    const user_id:string = localStorage.getItem('user_id') || "";
    const reqWithAuth = req.clone({
      setHeaders:{
        user_id
      }
    });
    return next.handle(req);
}
  constructor() { }
}
