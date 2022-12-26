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
    /**
     * // TO CHECK IF ANY API GET CALLED OR NOT.
     * @returns Observable of true or false based on api calls.
     */
    getLoadingStatus() {
        return this.isLoading.asObservable();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvc2VydmljZXMvbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNLE9BQU8sYUFBYTtJQU14QjtRQUpPLGNBQVMsR0FBNEIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDekUsYUFBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFVLENBQUMsQ0FBQztRQUk1QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUEsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7MEdBbkJVLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyU2VydmljZSB7XG4gIFxuICBwdWJsaWMgaXNMb2FkaW5nOkJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwdWJsaWMgcHJvZ3Jlc3M6bnVtYmVyID0gMDtcbiAgcHVibGljIGJ1ZmZlclZhbHVlOm51bWJlciA9IDA7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgXG5cbiAgICB0aGlzLmlzTG9hZGluZy5zdWJzY3JpYmUocmVzPT57XG4gICAgICBjb25zb2xlLmxvZyhcIkxPQURJTkc6IFwiLCByZXMpO1xuICAgIH0pXG4gIH1cbiAgXG4gIC8qKlxuICAgKiAvLyBUTyBDSEVDSyBJRiBBTlkgQVBJIEdFVCBDQUxMRUQgT1IgTk9ULlxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlIG9mIHRydWUgb3IgZmFsc2UgYmFzZWQgb24gYXBpIGNhbGxzLlxuICAgKi9cbiAgZ2V0TG9hZGluZ1N0YXR1cygpe1xuICAgIHJldHVybiB0aGlzLmlzTG9hZGluZy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG59XG4iXX0=