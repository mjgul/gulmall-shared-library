import { Injectable } from '@angular/core';
import { catchError, finalize, map, retry, throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../loader.service";
export class ResponseInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(request, next) {
        const startTime = new Date().getTime();
        this.loaderService.isLoading.next(true);
        return next.handle(request)
            .pipe(retry(2), map((event) => {
            const endTime = new Date().getTime();
            const difference = endTime - startTime;
            console.log(`${event.url} succeed in ${difference} ms.`);
            return event;
        }), catchError((error) => {
            return throwError(() => {
                new Error('Test');
            });
        }), finalize(() => {
            this.loaderService.isLoading.next(false);
        }));
    }
}
ResponseInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResponseInterceptor, deps: [{ token: i1.LoaderService }], target: i0.ɵɵFactoryTarget.Injectable });
ResponseInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResponseInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResponseInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.LoaderService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvU2VydmljZXMvSW50ZXJjZXB0b3IvcmVzcG9uc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQWMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSWhGLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsWUFBbUIsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBRWxELFNBQVMsQ0FBQyxPQUE2QixFQUFFLElBQWlCO1FBQ3hELE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDMUIsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixHQUFHLENBQUMsQ0FBQyxLQUFTLEVBQUMsRUFBRTtZQUNmLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsTUFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsZUFBZSxVQUFVLE1BQU0sQ0FBQyxDQUFBO1lBQ3hELE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsS0FBdUIsRUFBQyxFQUFFO1lBQ3BDLE9BQU8sVUFBVSxDQUFDLEdBQUUsRUFBRTtnQkFDcEIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsRUFDRixRQUFRLENBQUMsR0FBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDOztnSEF6QlUsbUJBQW1CO29IQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBFcnJvclJlc3BvbnNlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXAsIE9ic2VydmFibGUsIHJldHJ5LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9hZGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxvYWRlclNlcnZpY2U6TG9hZGVyU2VydmljZSkge31cblxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQodHJ1ZSk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpXG4gICAgLnBpcGUoXG4gICAgICByZXRyeSgyKSxcbiAgICAgIG1hcCgoZXZlbnQ6YW55KT0+e1xuICAgICAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtldmVudC51cmx9IHN1Y2NlZWQgaW4gJHtkaWZmZXJlbmNlfSBtcy5gKVxuICAgICAgICByZXR1cm4gZXZlbnRcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6SHR0cEVycm9yUmVzcG9uc2UpPT57XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpPT57XG4gICAgICAgICAgbmV3IEVycm9yKCdUZXN0Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBmaW5hbGl6ZSgoKT0+e1xuICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQoZmFsc2UpO1xuICAgICAgfSlcbiAgICApXG4gIH1cbn1cbiJdfQ==