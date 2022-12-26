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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvc2VydmljZXMvaW50ZXJjZXB0b3IvcmVzcG9uc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBTUwsYUFBYSxFQUNkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFjLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUtoRixNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFlBQW1CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUVsRCxTQUFTLENBQUMsT0FBNkIsRUFBRSxJQUFpQjtRQUN4RCxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzFCLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsR0FBRyxDQUFDLENBQUMsS0FBUyxFQUFDLEVBQUU7WUFDZixJQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLGNBQWMsRUFBRTtnQkFDOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFFLEtBQUssQ0FBQyxLQUFNLEdBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUUsS0FBSyxDQUFDLEtBQU0sR0FBRSxHQUFHLENBQUMsQ0FBQztnQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsZ0ZBQWdGO2dCQUMvRSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBQztvQkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQztpQkFDckM7YUFDSjtZQUNDLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsTUFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksZUFBZSxVQUFVLE1BQU0sQ0FBQyxDQUFBO1lBQ3pELE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsS0FBdUIsRUFBQyxFQUFFO1lBQ3BDLE9BQU8sVUFBVSxDQUFDLEdBQUUsRUFBRTtnQkFDcEIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsRUFDRixRQUFRLENBQUMsR0FBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDOztnSEFwQ1UsbUJBQW1CO29IQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnRUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXAsIE9ic2VydmFibGUsIHJldHJ5LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uL2NsYXNzZXMvaXRlbXMvaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9hZGVyU2VydmljZTpMb2FkZXJTZXJ2aWNlKSB7fVxuXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDx1bmtub3duPiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx1bmtub3duPj4ge1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubG9hZGVyU2VydmljZS5pc0xvYWRpbmcubmV4dCh0cnVlKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdClcbiAgICAucGlwZShcbiAgICAgIHJldHJ5KDIpLFxuICAgICAgbWFwKChldmVudDphbnkpPT57XG4gICAgICAgIGlmKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcbiAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZC8gZXZlbnQudG90YWwhICoxMDApICsgJyUnO1xuICAgICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5wcm9ncmVzcyA9IE1hdGgucm91bmQoZXZlbnQubG9hZGVkLyBldmVudC50b3RhbCEgKjEwMCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJQUk9HUkVTUzogXCIsIHByb2dyZXNzKTtcbiAgICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQodHJ1ZSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnVXBsb2FkaW5nOicgKyBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZC8gZXZlbnQudG90YWwhICoxMDApICsgJyUnKTtcbiAgICAgICAgICAgaWYgKGV2ZW50LmxvYWRlZCA9PSBldmVudC50b3RhbCl7XG4gICAgICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50IExvYWRlZFwiLGV2ZW50KTtcbiAgICAgICAgICB9IFxuICAgICAgfVxuICAgICAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtldmVudC50eXBlfSBzdWNjZWVkIGluICR7ZGlmZmVyZW5jZX0gbXMuYClcbiAgICAgICAgcmV0dXJuIGV2ZW50XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOkh0dHBFcnJvclJlc3BvbnNlKT0+e1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcigoKT0+e1xuICAgICAgICAgIG5ldyBFcnJvcignVGVzdCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCk9PntcbiAgICAgICAgdGhpcy5sb2FkZXJTZXJ2aWNlLmlzTG9hZGluZy5uZXh0KGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKVxuICB9XG59XG4iXX0=