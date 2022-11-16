import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../api-lib.service";
export class MediaService {
    constructor(api) {
        this.api = api;
    }
    uploadFile(formData, media_type, entity_id) {
        let apiRoute = {};
        apiRoute.apiroute = `storage/${media_type}/${entity_id}`;
        let fileName = formData.get('file_name');
        console.log("FILE NAME: ", fileName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FwaS1saWIvc3JjL2xpYi9TZXJ2aWNlcy9hcGkvbWVkaWEvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFJLENBQUM7SUFFbkMsVUFBVSxDQUFFLFFBQWlCLEVBQUUsVUFBaUIsRUFBRSxTQUFnQjtRQUNyRSxJQUFJLFFBQVEsR0FBUSxFQUFFLENBQUM7UUFDdkIsUUFBUSxDQUFDLFFBQVEsR0FBRyxXQUFXLFVBQVUsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN6RCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7eUdBWFUsWUFBWTs2R0FBWixZQUFZLGNBRlgsTUFBTTsyRkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpHU0FwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcGktbGliLnNlcnZpY2UnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTpKR1NBcGlTZXJ2aWNlKSB7IH1cblxuICBwdWJsaWMgdXBsb2FkRmlsZSggZm9ybURhdGE6Rm9ybURhdGEsIG1lZGlhX3R5cGU6c3RyaW5nLCBlbnRpdHlfaWQ6c3RyaW5nKSB7IFxuICAgICAgbGV0IGFwaVJvdXRlOiBhbnkgPSB7fTtcbiAgICAgIGFwaVJvdXRlLmFwaXJvdXRlID0gYHN0b3JhZ2UvJHttZWRpYV90eXBlfS8ke2VudGl0eV9pZH1gO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZm9ybURhdGEuZ2V0KCdmaWxlX25hbWUnKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRklMRSBOQU1FOiBcIixmaWxlTmFtZSk7XG4gICAgICBhcGlSb3V0ZS5kYXRhID0gZm9ybURhdGE7XG4gICAgICByZXR1cm4gdGhpcy5hcGkucG9zdEltYWdlcyhhcGlSb3V0ZSk7XG4gIH1cbn1cbiJdfQ==