import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEventType
} from '@angular/common/http';
import { catchError, finalize, map, Observable, retry, throwError } from 'rxjs';
import { LoaderService } from '../loader.service';
import { Item } from '../../classes/items/item';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(public loaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = new Date().getTime();
    this.loaderService.isLoading.next(true);
    return next.handle(request)
    .pipe(
      retry(2),
      map((event:any)=>{
        if(event.type === HttpEventType.UploadProgress) {
          let progress = Math.round(event.loaded/ event.total! *100) + '%';
          this.loaderService.progress = Math.round(event.loaded/ event.total! *100);
          
          this.loaderService.isLoading.next(true);
          
           if (event.loaded == event.total){
            this.loaderService.isLoading.next(false);
          
          } 
      }
        const endTime = new Date().getTime();
        const difference = endTime - startTime;
        
        return event
      }),
      catchError((error:HttpErrorResponse)=>{
        return throwError(()=>{
          new Error('Test');
        });
      }),
      finalize(()=>{
        this.loaderService.isLoading.next(false);
      })
    )
  }
}
