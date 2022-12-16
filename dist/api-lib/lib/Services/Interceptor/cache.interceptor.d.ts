import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheResolverService } from '../../services/resolver/cache-resolver.service';
import * as i0 from "@angular/core";
export declare class CacheInterceptor implements HttpInterceptor {
    private cacheResolver;
    constructor(cacheResolver: CacheResolverService);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    sendRequest(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CacheInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CacheInterceptor>;
}
