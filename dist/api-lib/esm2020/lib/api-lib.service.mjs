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
            console.log("Uploading Images", route.apiroute);
            return this.http.post(this.appBaseUrl + route.apiroute, route.data, {
                headers: this.headersConfig,
                reportProgress: true,
                observe: 'events',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYXBpLWxpYi9zcmMvbGliL2FwaS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUtoRCxNQUFNLE9BQU8sYUFBYTtJQVN4QiwwQkFBMEI7SUFDMUIsWUFBbUIsSUFBZ0IsRUFBVSxNQUFvQjtRQUE5QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVR6RCxjQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUMvQixlQUFVLEdBQUcsV0FBVyxTQUFTLE9BQU8sQ0FBQztRQUN6QyxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQnhDLGVBQVUsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xFLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDM0IsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQXRCa0UsQ0FBQztJQUVyRSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FDRixnRkFBZ0YsRUFDaEYsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQ3pCO2FBQ0EsSUFBSSxDQUNILEdBQUcsQ0FBQztZQUNGLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDbEMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDOzswR0F2QlUsYUFBYTs4R0FBYixhQUFhLGNBRlosTUFBTTsyRkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnRUeXBlLFxuICBIdHRwSGVhZGVycyxcbiAgSHR0cFBhcmFtcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0VSVkVSX0lQIH0gZnJvbSAnLi9jb25zdGFudHMvY29uZmlnJztcbmltcG9ydCB7IFN1YmplY3QsIHRhcCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9hZGVyU2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvbG9hZGVyLnNlcnZpY2UnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpHU0FwaVNlcnZpY2Uge1xuICBwcml2YXRlIHRva2VuTmFtZSA9ICdkbS10b2tlbic7XG4gIHByaXZhdGUgbGFuZ3VhZ2UgPSAnbGFuZyc7XG4gIHByaXZhdGUgZ2V0VG9rZW5VcmwgPSAnc2Vzc2lvbnMvdG9rZW4nO1xuICBwcml2YXRlIGFwcEJhc2VVcmwgPSBgaHR0cHM6Ly8ke1NFUlZFUl9JUH0vYXBpL2A7XG4gIHByaXZhdGUgZ2V0VG9rZW5BY2Nlc3M6IGFueSA9IHt9O1xuICBwcml2YXRlIGhlYWRlcnNDb25maWc6IGFueSA9IHt9O1xuICBwcml2YXRlIGVycm9yU3Vic2NyaWJlciA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLy8gQ09OU1RSVUNUT1IgQVBJIFNFUlZJQ0VcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9hZGVyOkxvYWRlclNlcnZpY2UpIHt9XG5cbiAgZ2V0UmVxdWVzdFRlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChcbiAgICAgICAgJ2h0dHBzOi8vYmFja2VuZC1kZXZlbG9wbWVudC5kaWdpdGFsbWFsbC5hcHAvYXBpL3ZlaGljbGUtZm9yLXNhbGUvcG9zdC1zdGF0dXNlcycsXG4gICAgICAgIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCh7XG4gICAgICAgICAgbmV4dDogKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHBvc3RJbWFnZXMgPSAocm91dGU6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkaW5nIEltYWdlc1wiLCByb3V0ZS5hcGlyb3V0ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBwQmFzZVVybCArIHJvdXRlLmFwaXJvdXRlLCByb3V0ZS5kYXRhLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnNDb25maWcsXG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICAgIG9ic2VydmU6ICdldmVudHMnLFxuICAgIH0pO1xuICB9O1xufVxuIl19