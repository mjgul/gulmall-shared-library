import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class LoaderService {
    constructor() {
        this.isLoading = new BehaviorSubject(false);
        this.progress = 0;
        this.bufferValue = 0;
        this.isLoading.subscribe(res => {
            console.log("LOADING: ", res);
        });
    }
}
LoaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LoaderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvc2VydmljZXMvbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNLE9BQU8sYUFBYTtJQUl4QjtRQUhPLGNBQVMsR0FBNEIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDekUsYUFBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFVLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUEsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7OzBHQVJVLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyU2VydmljZSB7XG4gIHB1YmxpYyBpc0xvYWRpbmc6QmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHB1YmxpYyBwcm9ncmVzczpudW1iZXIgPSAwO1xuICBwdWJsaWMgYnVmZmVyVmFsdWU6bnVtYmVyID0gMDtcbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIHRoaXMuaXNMb2FkaW5nLnN1YnNjcmliZShyZXM9PntcbiAgICAgIGNvbnNvbGUubG9nKFwiTE9BRElORzogXCIsIHJlcyk7XG4gICAgfSlcbiAgfVxufVxuIl19