import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CustomHeaderInterceptor {
    constructor() { }
    intercept(req, next) {
        const api_key = "jgs";
        const token = "000111";
        const Accept = "*/*";
        const user_id = localStorage.getItem('user_id') || "";
        const reqWithAuth = req.clone({
            setHeaders: {
                user_id
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWhlYWRlci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FwaS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9pbnRlcmNlcHRvci9jdXN0b20taGVhZGVyLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFjbEMsZ0JBQWdCLENBQUM7SUFabkIsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDOUMsTUFBTSxPQUFPLEdBQUUsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sS0FBSyxHQUFVLFFBQVEsQ0FBQTtRQUM3QixNQUFNLE1BQU0sR0FBVSxLQUFLLENBQUE7UUFDM0IsTUFBTSxPQUFPLEdBQVUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0QsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM1QixVQUFVLEVBQUM7Z0JBQ1QsT0FBTzthQUNSO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O29IQWJZLHVCQUF1Qjt3SEFBdkIsdUJBQXVCLGNBRnRCLE1BQU07MkZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUhlYWRlckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgYXBpX2tleT0gXCJqZ3NcIjtcbiAgICBjb25zdCB0b2tlbjpzdHJpbmcgPSBcIjAwMDExMVwiXG4gICAgY29uc3QgQWNjZXB0OnN0cmluZyA9IFwiKi8qXCJcbiAgICBjb25zdCB1c2VyX2lkOnN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJykgfHwgXCJcIjtcbiAgICBjb25zdCByZXFXaXRoQXV0aCA9IHJlcS5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOntcbiAgICAgICAgdXNlcl9pZFxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xufVxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19