import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoaderService {
    isLoading: BehaviorSubject<boolean>;
    progress: number;
    bufferValue: number;
    constructor();
    /**
     * // TO CHECK IF ANY API GET CALLED OR NOT.
     * @returns Observable of true or false based on api calls.
     */
    getLoadingStatus(): import("rxjs").Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderService>;
}
