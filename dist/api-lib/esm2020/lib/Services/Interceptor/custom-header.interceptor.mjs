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
                api_key,
                Authorization: `${token}`,
                user_id,
                Accept
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWhlYWRlci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FwaS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9pbnRlcmNlcHRvci9jdXN0b20taGVhZGVyLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFpQmxDLGdCQUFnQixDQUFDO0lBZm5CLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQzlDLE1BQU0sT0FBTyxHQUFFLEtBQUssQ0FBQztRQUNyQixNQUFNLEtBQUssR0FBVSxRQUFRLENBQUE7UUFDN0IsTUFBTSxNQUFNLEdBQVUsS0FBSyxDQUFBO1FBQzNCLE1BQU0sT0FBTyxHQUFVLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdELE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDNUIsVUFBVSxFQUFDO2dCQUNULE9BQU87Z0JBQ1AsYUFBYSxFQUFDLEdBQUcsS0FBSyxFQUFFO2dCQUN4QixPQUFPO2dCQUNQLE1BQU07YUFDUDtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOztvSEFoQlksdUJBQXVCO3dIQUF2Qix1QkFBdUIsY0FGdEIsTUFBTTsyRkFFUCx1QkFBdUI7a0JBSG5DLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tSGVhZGVySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG5pbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBhcGlfa2V5PSBcImpnc1wiO1xuICAgIGNvbnN0IHRva2VuOnN0cmluZyA9IFwiMDAwMTExXCJcbiAgICBjb25zdCBBY2NlcHQ6c3RyaW5nID0gXCIqLypcIlxuICAgIGNvbnN0IHVzZXJfaWQ6c3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfaWQnKSB8fCBcIlwiO1xuICAgIGNvbnN0IHJlcVdpdGhBdXRoID0gcmVxLmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6e1xuICAgICAgICBhcGlfa2V5LFxuICAgICAgICBBdXRob3JpemF0aW9uOmAke3Rva2VufWAsXG4gICAgICAgIHVzZXJfaWQsXG4gICAgICAgIEFjY2VwdFxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xufVxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19