import { HttpClient } from '@angular/common/http';
import { LoaderService } from './Services/loader.service';
import * as i0 from "@angular/core";
export declare class JGSApiService {
    http: HttpClient;
    private loader;
    private tokenName;
    private language;
    private getTokenUrl;
    private appBaseUrl;
    private getTokenAccess;
    private headersConfig;
    private errorSubscriber;
    constructor(http: HttpClient, loader: LoaderService);
    getRequestTest(): import("rxjs").Observable<string>;
    postImages: (route: any) => import("rxjs").Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<JGSApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JGSApiService>;
}
