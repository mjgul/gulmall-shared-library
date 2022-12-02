import { JGSApiService } from '../../../api-lib.service';
import * as i0 from "@angular/core";
export declare class MamalsService {
    private api;
    constructor(api: JGSApiService);
    getAllUser(): Promise<import("rxjs").Observable<Object>>;
    addUser(): void;
    getUserById(): void;
    updateUser(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MamalsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MamalsService>;
}
