import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CustomHeaderInterceptor {
    constructor() { }
    intercept(req, next) {
        const api_key = "jgs";
        const token = "000111";
        /*const reqWithAuth = req.clone({
          setHeaders:{
            api_key,
            Authorization:`Bearer${token}`
          }
        });*/
        return next.handle(req);
    }
}
CustomHeaderInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomHeaderInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomHeaderInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomHeaderInterceptor, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomHeaderInterceptor, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWhlYWRlci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FwaS1saWIvc3JjL2xpYi9TZXJ2aWNlcy9JbnRlcmNlcHRvci9jdXN0b20taGVhZGVyLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFhbEMsZ0JBQWdCLENBQUM7SUFYbkIsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDOUMsTUFBTSxPQUFPLEdBQUUsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQTtRQUN0Qjs7Ozs7YUFLSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOztvSEFaWSx1QkFBdUI7d0hBQXZCLHVCQUF1QixjQUZ0QixNQUFNOzJGQUVQLHVCQUF1QjtrQkFIbkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21IZWFkZXJJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbmludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IGFwaV9rZXk9IFwiamdzXCI7XG4gICAgY29uc3QgdG9rZW4gPSBcIjAwMDExMVwiXG4gICAgLypjb25zdCByZXFXaXRoQXV0aCA9IHJlcS5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOntcbiAgICAgICAgYXBpX2tleSxcbiAgICAgICAgQXV0aG9yaXphdGlvbjpgQmVhcmVyJHt0b2tlbn1gXG4gICAgICB9XG4gICAgfSk7Ki9cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbn1cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==