import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomHeaderInterceptor implements HttpInterceptor {

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const api_key= "jgs";
    const token = "000111"
    /*const reqWithAuth = req.clone({
      setHeaders:{
        api_key,
        Authorization:`Bearer${token}`
      }
    });*/
    return next.handle(req);
}
  constructor() { }
}
