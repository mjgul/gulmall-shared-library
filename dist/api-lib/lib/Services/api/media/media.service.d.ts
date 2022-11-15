import { JGSApiService } from '../../../api-lib.service';
import * as i0 from "@angular/core";
export declare class MediaService {
    private api;
    constructor(api: JGSApiService);
    uploadFile(formData: FormData, media_type: string, entity_id: string): import("rxjs").Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MediaService>;
}
