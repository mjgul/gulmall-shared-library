import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CustomHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomHeaderInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomHeaderInterceptor>;
}
