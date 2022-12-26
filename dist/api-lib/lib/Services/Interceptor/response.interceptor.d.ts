import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader.service';
import * as i0 from "@angular/core";
export declare class ResponseInterceptor implements HttpInterceptor {
    loaderService: LoaderService;
    constructor(loaderService: LoaderService);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResponseInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResponseInterceptor>;
}
