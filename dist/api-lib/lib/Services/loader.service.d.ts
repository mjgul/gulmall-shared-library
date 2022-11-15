import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoaderService {
    isLoading: BehaviorSubject<boolean>;
    progress: number;
    bufferValue: number;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderService>;
}
