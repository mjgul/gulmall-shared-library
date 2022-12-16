import { Injectable } from '@angular/core';
import { SERVER_IP } from './constants/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./services/loader.service";
export class JGSApiService {
    // CONSTRUCTOR API SERVICE
    constructor(http, loader) {
        this.http = http;
        this.loader = loader;
        this.appBaseUrl = `http://${SERVER_IP}`;
        // COMMON GET REQUEST
        this.GET = async (route) => {
            return await this.http.get(`${this.appBaseUrl}/${route.apiroute}`);
        };
        // COMMON POST REQUEST
        this.POST = async (route) => {
            return await this.http.post(`${this.appBaseUrl}/${route.apiroute}`, route.data);
        };
        // COMMON PUT REQUEST
        this.PUT = async (route) => {
            return await this.http.put(`${this.appBaseUrl}/${route.apiroute}`, route.data);
        };
        // COMMON DELETE REQUEST
        this.DELETE = async (route) => {
            return await this.http.delete(`${this.appBaseUrl}/${route.apiroute}`, route.data);
        };
        this.postImages = (route) => {
            return this.http.post(`${this.appBaseUrl}/${route.apiroute}`, route.data, {
                reportProgress: false,
                observe: 'events',
            });
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYXBpLWxpYi9zcmMvbGliL2FwaS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU8vQyxNQUFNLE9BQU8sYUFBYTtJQUd4QiwwQkFBMEI7SUFDMUIsWUFBbUIsSUFBZ0IsRUFBVSxNQUFxQjtRQUEvQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUgxRCxlQUFVLEdBQUcsVUFBVSxTQUFTLEVBQUUsQ0FBQztRQUszQyxxQkFBcUI7UUFDckIsUUFBRyxHQUFHLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtZQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQztRQUVGLHNCQUFzQjtRQUN0QixTQUFJLEdBQUcsS0FBSyxFQUFDLEtBQVMsRUFBRSxFQUFFO1lBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUE7UUFFRCxxQkFBcUI7UUFDckIsUUFBRyxHQUFHLEtBQUssRUFBQyxLQUFTLEVBQUUsRUFBRTtZQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFBO1FBRUQsd0JBQXdCO1FBQ3hCLFdBQU0sR0FBRyxLQUFLLEVBQUMsS0FBUyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQTtRQUVELGVBQVUsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUN4RSxjQUFjLEVBQUUsS0FBSztnQkFDckIsT0FBTyxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBM0JtRSxDQUFDOzswR0FKM0QsYUFBYTs4R0FBYixhQUFhLGNBSFosTUFBTTsyRkFHUCxhQUFhO2tCQUp6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBDbGllbnRcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0VSVkVSX0lQIH0gZnJvbSAnLi9jb25zdGFudHMvY29uZmlnJztcbmltcG9ydCB7IExvYWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvYWRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuXG5leHBvcnQgY2xhc3MgSkdTQXBpU2VydmljZSB7XG4gIHByaXZhdGUgYXBwQmFzZVVybCA9IGBodHRwOi8vJHtTRVJWRVJfSVB9YDtcblxuICAvLyBDT05TVFJVQ1RPUiBBUEkgU0VSVklDRVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2FkZXI6IExvYWRlclNlcnZpY2UpIHt9XG4gIFxuICAvLyBDT01NT04gR0VUIFJFUVVFU1RcbiAgR0VUID0gYXN5bmMgKHJvdXRlOiBhbnkpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldChgJHt0aGlzLmFwcEJhc2VVcmx9LyR7cm91dGUuYXBpcm91dGV9YCk7XG4gIH07XG5cbiAgLy8gQ09NTU9OIFBPU1QgUkVRVUVTVFxuICBQT1NUID0gYXN5bmMocm91dGU6YW55KSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBwQmFzZVVybH0vJHtyb3V0ZS5hcGlyb3V0ZX1gLHJvdXRlLmRhdGEpO1xuICB9XG5cbiAgLy8gQ09NTU9OIFBVVCBSRVFVRVNUXG4gIFBVVCA9IGFzeW5jKHJvdXRlOmFueSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAucHV0KGAke3RoaXMuYXBwQmFzZVVybH0vJHtyb3V0ZS5hcGlyb3V0ZX1gLHJvdXRlLmRhdGEpO1xuICB9XG5cbiAgLy8gQ09NTU9OIERFTEVURSBSRVFVRVNUXG4gIERFTEVURSA9IGFzeW5jKHJvdXRlOmFueSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuYXBwQmFzZVVybH0vJHtyb3V0ZS5hcGlyb3V0ZX1gLHJvdXRlLmRhdGEpO1xuICB9XG5cbiAgcG9zdEltYWdlcyA9IChyb3V0ZTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBwQmFzZVVybH0vJHtyb3V0ZS5hcGlyb3V0ZX1gLCByb3V0ZS5kYXRhLCB7XG4gICAgICByZXBvcnRQcm9ncmVzczogZmFsc2UsXG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJyxcbiAgICB9KTtcbiAgfTtcbn0iXX0=