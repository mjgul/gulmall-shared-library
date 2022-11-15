import { HttpResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class CacheResolverService {
    private cache;
    constructor();
    set(key: any, value: any, timeToLive?: number | null): void;
    get(key: any): HttpResponse<any> | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CacheResolverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CacheResolverService>;
}
