import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of,tap } from 'rxjs';
import { CacheResolverService } from '../resolver/cache-resolver.service';
const TIME_TO_LIVE = 10;
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheResolver:CacheResolverService){

  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method!='GET'){
    return next.handle(request);
    }
    const  cachedResponse = this.cacheResolver.get(request.url);
    return cachedResponse ? of(cachedResponse): this.sendRequest(request,next);
  }

  sendRequest(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    return next.handle(request)
    .pipe(
      tap((event)=>{
        if(event instanceof HttpResponse){
          this.cacheResolver.set(request.url,event,TIME_TO_LIVE);
        }
      })
    )
  }
}
