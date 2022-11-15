import { HttpEventType, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_IP } from './constants/config';
import { Subject, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./Services/loader.service";
export class JGSApiService {
    // CONSTRUCTOR API SERVICE
    constructor(http, loader) {
        this.http = http;
        this.loader = loader;
        this.tokenName = 'dm-token';
        this.language = 'lang';
        this.getTokenUrl = 'sessions/token';
        this.appBaseUrl = `https://${SERVER_IP}/api/`;
        this.getTokenAccess = {};
        this.headersConfig = {};
        this.errorSubscriber = new Subject();
        this.postImages = (route) => {
            return this.http.post(this.appBaseUrl + route.apiroute, route.data, {
                headers: this.headersConfig,
                reportProgress: true,
                observe: 'events',
            })
                .subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    let progress = Math.round(event.loaded / event.total * 100) + '%';
                    this.loader.progress = Math.round(event.loaded / event.total * 100);
                    console.log("PROGRESS: ", progress);
                    this.loader.isLoading.next(true);
                    //console.log('Uploading:' + Math.round(event.loaded/ event.total! *100) + '%');
                    if (event.loaded == event.total) {
                        this.loader.isLoading.next(false);
                        console.log("Event Loaded", event);
                    }
                }
            });
        };
    }
    getRequestTest() {
        return this.http
            .get('https://backend-development.digitalmall.app/api/vehicle-for-sale/post-statuses', { responseType: 'text' })
            .pipe(tap({
            next: (data) => console.log(data),
        }));
    }
}
JGSApiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: JGSApiService, deps: [{ token: i1.HttpClient }, { token: i2.LoaderService }], target: i0.ɵɵFactoryTarget.Injectable });
JGSApiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: JGSApiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: JGSApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LoaderService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYXBpLWxpYi9zcmMvbGliL2FwaS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsYUFBYSxHQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7QUFLaEQsTUFBTSxPQUFPLGFBQWE7SUFTeEIsMEJBQTBCO0lBQzFCLFlBQW1CLElBQWdCLEVBQVUsTUFBb0I7UUFBOUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7UUFUekQsY0FBUyxHQUFHLFVBQVUsQ0FBQztRQUN2QixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsZUFBVSxHQUFHLFdBQVcsU0FBUyxPQUFPLENBQUM7UUFDekMsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBa0J4QyxlQUFVLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNsRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQzNCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixPQUFPLEVBQUUsUUFBUTthQUNsQixDQUFDO2lCQUNELFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsSUFBRyxLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxjQUFjLEVBQUU7b0JBRTVDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRSxLQUFLLENBQUMsS0FBTSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFFLEtBQUssQ0FBQyxLQUFNLEdBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2pDLGdGQUFnRjtvQkFDL0UsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUM7d0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3JDO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUM7SUFuQ2tFLENBQUM7SUFFckUsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQ0YsZ0ZBQWdGLEVBQ2hGLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUN6QjthQUNBLElBQUksQ0FDSCxHQUFHLENBQUM7WUFDRixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1NBQ2xDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7MEdBdkJVLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwQ2xpZW50LFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50VHlwZSxcbiAgSHR0cEhlYWRlcnMsXG4gIEh0dHBQYXJhbXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNFUlZFUl9JUCB9IGZyb20gJy4vY29uc3RhbnRzL2NvbmZpZyc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YXAsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvYWRlclNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL2xvYWRlci5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBKR1NBcGlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB0b2tlbk5hbWUgPSAnZG0tdG9rZW4nO1xuICBwcml2YXRlIGxhbmd1YWdlID0gJ2xhbmcnO1xuICBwcml2YXRlIGdldFRva2VuVXJsID0gJ3Nlc3Npb25zL3Rva2VuJztcbiAgcHJpdmF0ZSBhcHBCYXNlVXJsID0gYGh0dHBzOi8vJHtTRVJWRVJfSVB9L2FwaS9gO1xuICBwcml2YXRlIGdldFRva2VuQWNjZXNzOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBoZWFkZXJzQ29uZmlnOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBlcnJvclN1YnNjcmliZXIgPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8vIENPTlNUUlVDVE9SIEFQSSBTRVJWSUNFXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvYWRlcjpMb2FkZXJTZXJ2aWNlKSB7fVxuXG4gIGdldFJlcXVlc3RUZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoXG4gICAgICAgICdodHRwczovL2JhY2tlbmQtZGV2ZWxvcG1lbnQuZGlnaXRhbG1hbGwuYXBwL2FwaS92ZWhpY2xlLWZvci1zYWxlL3Bvc3Qtc3RhdHVzZXMnLFxuICAgICAgICB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoe1xuICAgICAgICAgIG5leHQ6IChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwb3N0SW1hZ2VzID0gKHJvdXRlOiBhbnkpID0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcHBCYXNlVXJsICsgcm91dGUuYXBpcm91dGUsIHJvdXRlLmRhdGEsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyc0NvbmZpZyxcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cycsXG4gICAgfSlcbiAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcbiAgICAgICAgIFxuICAgICAgICAgIGxldCBwcm9ncmVzcyA9IE1hdGgucm91bmQoZXZlbnQubG9hZGVkLyBldmVudC50b3RhbCEgKjEwMCkgKyAnJSc7XG4gICAgICAgICAgdGhpcy5sb2FkZXIucHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZC8gZXZlbnQudG90YWwhICoxMDApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUFJPR1JFU1M6IFwiLCBwcm9ncmVzcyk7XG4gICAgICAgICAgdGhpcy5sb2FkZXIuaXNMb2FkaW5nLm5leHQodHJ1ZSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnVXBsb2FkaW5nOicgKyBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZC8gZXZlbnQudG90YWwhICoxMDApICsgJyUnKTtcbiAgICAgICAgICAgaWYgKGV2ZW50LmxvYWRlZCA9PSBldmVudC50b3RhbCl7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5pc0xvYWRpbmcubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQgTG9hZGVkXCIsZXZlbnQpO1xuICAgICAgICAgIH0gXG4gICAgICB9IFxuICB9KTtcbiAgfTtcbn1cbiJdfQ==