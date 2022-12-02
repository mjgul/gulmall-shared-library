import { HttpClient } from '@angular/common/http';
import { LoaderService } from './Services/loader.service';
import * as i0 from "@angular/core";
export declare class JGSApiService {
    http: HttpClient;
    private loader;
    private appBaseUrl;
    constructor(http: HttpClient, loader: LoaderService);
    GET: (route: any) => Promise<import("rxjs").Observable<Object>>;
    POST: (route: any) => Promise<import("rxjs").Observable<Object>>;
    PUT: (route: any) => Promise<import("rxjs").Observable<Object>>;
    DELETE: (route: any) => Promise<import("rxjs").Observable<ArrayBuffer>>;
    postImages: (route: any) => import("rxjs").Observable<import("@angular/common/http").HttpEvent<Object>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JGSApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JGSApiService>;
}
