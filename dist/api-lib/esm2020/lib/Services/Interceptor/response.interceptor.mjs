import { Injectable } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
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
            if (event.type === HttpEventType.UploadProgress) {
                let progress = Math.round(event.loaded / event.total * 100) + '%';
                this.loaderService.progress = Math.round(event.loaded / event.total * 100);
                console.log("PROGRESS: ", progress);
                this.loaderService.isLoading.next(true);
                //console.log('Uploading:' + Math.round(event.loaded/ event.total! *100) + '%');
                if (event.loaded == event.total) {
                    this.loaderService.isLoading.next(false);
                    console.log("Event Loaded", event);
                }
            }
            const endTime = new Date().getTime();
            const difference = endTime - startTime;
            console.log(`${event.type} succeed in ${difference} ms.`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvU2VydmljZXMvSW50ZXJjZXB0b3IvcmVzcG9uc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBTUwsYUFBYSxFQUNkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFjLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUloRixNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFlBQW1CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUVsRCxTQUFTLENBQUMsT0FBNkIsRUFBRSxJQUFpQjtRQUN4RCxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzFCLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsR0FBRyxDQUFDLENBQUMsS0FBUyxFQUFDLEVBQUU7WUFDZixJQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLGNBQWMsRUFBRTtnQkFDOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFFLEtBQUssQ0FBQyxLQUFNLEdBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUUsS0FBSyxDQUFDLEtBQU0sR0FBRSxHQUFHLENBQUMsQ0FBQztnQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsZ0ZBQWdGO2dCQUMvRSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBQztvQkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQztpQkFDckM7YUFDSjtZQUNDLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsTUFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksZUFBZSxVQUFVLE1BQU0sQ0FBQyxDQUFBO1lBQ3pELE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsS0FBdUIsRUFBQyxFQUFFO1lBQ3BDLE9BQU8sVUFBVSxDQUFDLEdBQUUsRUFBRTtnQkFDcEIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsRUFDRixRQUFRLENBQUMsR0FBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDOztnSEFwQ1UsbUJBQW1CO29IQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnRUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXAsIE9ic2VydmFibGUsIHJldHJ5LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9hZGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxvYWRlclNlcnZpY2U6TG9hZGVyU2VydmljZSkge31cblxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQodHJ1ZSk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpXG4gICAgLnBpcGUoXG4gICAgICByZXRyeSgyKSxcbiAgICAgIG1hcCgoZXZlbnQ6YW55KT0+e1xuICAgICAgICBpZihldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XG4gICAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5yb3VuZChldmVudC5sb2FkZWQvIGV2ZW50LnRvdGFsISAqMTAwKSArICclJztcbiAgICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UucHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZC8gZXZlbnQudG90YWwhICoxMDApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUFJPR1JFU1M6IFwiLCBwcm9ncmVzcyk7XG4gICAgICAgICAgdGhpcy5sb2FkZXJTZXJ2aWNlLmlzTG9hZGluZy5uZXh0KHRydWUpO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ1VwbG9hZGluZzonICsgTWF0aC5yb3VuZChldmVudC5sb2FkZWQvIGV2ZW50LnRvdGFsISAqMTAwKSArICclJyk7XG4gICAgICAgICAgIGlmIChldmVudC5sb2FkZWQgPT0gZXZlbnQudG90YWwpe1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJTZXJ2aWNlLmlzTG9hZGluZy5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudCBMb2FkZWRcIixldmVudCk7XG4gICAgICAgICAgfSBcbiAgICAgIH0gXG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2V2ZW50LnR5cGV9IHN1Y2NlZWQgaW4gJHtkaWZmZXJlbmNlfSBtcy5gKVxuICAgICAgICByZXR1cm4gZXZlbnRcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6SHR0cEVycm9yUmVzcG9uc2UpPT57XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpPT57XG4gICAgICAgICAgbmV3IEVycm9yKCdUZXN0Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBmaW5hbGl6ZSgoKT0+e1xuICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQoZmFsc2UpO1xuICAgICAgfSlcbiAgICApXG4gIH1cbn1cbiJdfQ==