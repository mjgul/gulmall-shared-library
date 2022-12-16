import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../api-lib.service";
export class MediaService {
    constructor(api) {
        this.api = api;
    }
    uploadFile(formData) {
        let apiRoute = {};
        apiRoute.apiroute = `upload-file`;
        apiRoute.data = formData;
        return this.api.postImages(apiRoute);
    }
}
MediaService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MediaService, deps: [{ token: i1.JGSApiService }], target: i0.ɵɵFactoryTarget.Injectable });
MediaService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MediaService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MediaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.JGSApiService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FwaS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9hcGkvbWVkaWEvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFJLENBQUM7SUFFbkMsVUFBVSxDQUFFLFFBQWlCO1FBQ2hDLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUNsQyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O3lHQVRVLFlBQVk7NkdBQVosWUFBWSxjQUZYLE1BQU07MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKR1NBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXBpLWxpYi5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6SkdTQXBpU2VydmljZSkgeyB9XG5cbiAgcHVibGljIHVwbG9hZEZpbGUoIGZvcm1EYXRhOkZvcm1EYXRhICkgeyBcbiAgICAgIGxldCBhcGlSb3V0ZTogYW55ID0ge307XG4gICAgICBhcGlSb3V0ZS5hcGlyb3V0ZSA9IGB1cGxvYWQtZmlsZWA7XG4gICAgICBhcGlSb3V0ZS5kYXRhID0gZm9ybURhdGE7XG4gICAgICByZXR1cm4gdGhpcy5hcGkucG9zdEltYWdlcyhhcGlSb3V0ZSk7XG4gIH1cbn1cbiJdfQ==