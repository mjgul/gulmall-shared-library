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
import { LoaderService } from '../../services/loader.service'

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
          console.log("PROGRESS: ", progress);
          this.loaderService.isLoading.next(true);
          //console.log('Uploading:' + Math.round(event.loaded/ event.total! *100) + '%');
           if (event.loaded == event.total){
            this.loaderService.isLoading.next(false);
              console.log("Event Loaded",event);
          } 
      } 
        const endTime = new Date().getTime();
        const difference = endTime - startTime;
        console.log(`${event.type} succeed in ${difference} ms.`)
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
