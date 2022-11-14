import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, map, Observable, retry, throwError } from 'rxjs';
import { LoaderService } from '../loader.service';

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
        const endTime = new Date().getTime();
        const difference = endTime - startTime;
        console.log(`${event.url} succeed in ${difference} ms.`)
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
