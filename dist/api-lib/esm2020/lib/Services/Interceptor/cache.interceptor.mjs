import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/resolver/cache-resolver.service";
const TIME_TO_LIVE = 10;
export class CacheInterceptor {
    constructor(cacheResolver) {
        this.cacheResolver = cacheResolver;
    }
    intercept(request, next) {
        if (request.method != 'GET') {
            return next.handle(request);
        }
        const cachedResponse = this.cacheResolver.get(request.url);
        return cachedResponse ? of(cachedResponse) : this.sendRequest(request, next);
    }
    sendRequest(request, next) {
        return next.handle(request)
            .pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                this.cacheResolver.set(request.url, event, TIME_TO_LIVE);
            }
        }));
    }
}
CacheInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheInterceptor, deps: [{ token: i1.CacheResolverService }], target: i0.ɵɵFactoryTarget.Injectable });
CacheInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.CacheResolverService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvc2VydmljZXMvaW50ZXJjZXB0b3IvY2FjaGUuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBS0wsWUFBWSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFjLEVBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUUxQyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFFeEIsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFvQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFFdEQsQ0FBQztJQUNELFNBQVMsQ0FBQyxPQUE2QixFQUFFLElBQWlCO1FBQ3hELElBQUcsT0FBTyxDQUFDLE1BQU0sSUFBRSxLQUFLLEVBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsTUFBTyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBNkIsRUFBRSxJQUFpQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzFCLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBRTtZQUNYLElBQUcsS0FBSyxZQUFZLFlBQVksRUFBQztnQkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsWUFBWSxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0lBQ0gsQ0FBQzs7NkdBckJVLGdCQUFnQjtpSEFBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsdGFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYWNoZVJlc29sdmVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc29sdmVyL2NhY2hlLXJlc29sdmVyLnNlcnZpY2UnO1xuY29uc3QgVElNRV9UT19MSVZFID0gMTA7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FjaGVJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FjaGVSZXNvbHZlcjpDYWNoZVJlc29sdmVyU2VydmljZSl7XG5cbiAgfVxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcbiAgICBpZihyZXF1ZXN0Lm1ldGhvZCE9J0dFVCcpe1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgICB9XG4gICAgY29uc3QgIGNhY2hlZFJlc3BvbnNlID0gdGhpcy5jYWNoZVJlc29sdmVyLmdldChyZXF1ZXN0LnVybCk7XG4gICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlID8gb2YoY2FjaGVkUmVzcG9uc2UpOiB0aGlzLnNlbmRSZXF1ZXN0KHJlcXVlc3QsbmV4dCk7XG4gIH1cblxuICBzZW5kUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDx1bmtub3duPiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx1bmtub3duPj57XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpXG4gICAgLnBpcGUoXG4gICAgICB0YXAoKGV2ZW50KT0+e1xuICAgICAgICBpZihldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSl7XG4gICAgICAgICAgdGhpcy5jYWNoZVJlc29sdmVyLnNldChyZXF1ZXN0LnVybCxldmVudCxUSU1FX1RPX0xJVkUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcbiAgfVxufVxuIl19