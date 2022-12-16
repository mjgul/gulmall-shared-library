import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CacheResolverService {
    constructor() {
        // we will store HttpResponse in a map with key as unique identifire.
        // this will be acting as a identifire and it will hold the list of responses.
        this.cache = new Map();
    }
    set(key, value, timeToLive = null) {
        console.log('set cache key', key);
        if (timeToLive) {
            const expiresIn = new Date();
            expiresIn.setSeconds(expiresIn.getSeconds() + timeToLive);
            // if we dont have to expire then put null here.
            this.cache.set(key, [expiresIn, value]);
        }
    }
    get(key) {
        const tuple = this.cache.get(key);
        if (!tuple)
            return null;
        // extract tuple.
        const expiresIn = tuple[0];
        const httpSavedResponse = tuple[1];
        const timeNow = new Date();
        if (expiresIn && expiresIn.getTime() < timeNow.getTime()) {
            this.cache.delete(key);
            return null;
        }
        return httpSavedResponse;
    }
}
CacheResolverService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheResolverService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CacheResolverService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheResolverService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheResolverService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtcmVzb2x2ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FwaS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9yZXNvbHZlci9jYWNoZS1yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDLE1BQU0sT0FBTyxvQkFBb0I7SUFJL0I7UUFIQSxxRUFBcUU7UUFDckUsOEVBQThFO1FBQ3RFLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBbUMsQ0FBQztJQUM1QyxDQUFDO0lBRWhCLEdBQUcsQ0FBQyxHQUFPLEVBQUMsS0FBUyxFQUFDLGFBQXlCLElBQUk7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBRyxVQUFVLEVBQUM7WUFDWixNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQzFELGdEQUFnRDtZQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsR0FBTztRQUNULE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUcsQ0FBQyxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsaUJBQWlCO1FBQ2pCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzNCLElBQUcsU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUM7WUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNBLE9BQU8saUJBQWlCLENBQUM7SUFDNUIsQ0FBQzs7aUhBNUJVLG9CQUFvQjtxSEFBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhY2hlUmVzb2x2ZXJTZXJ2aWNle1xuICAvLyB3ZSB3aWxsIHN0b3JlIEh0dHBSZXNwb25zZSBpbiBhIG1hcCB3aXRoIGtleSBhcyB1bmlxdWUgaWRlbnRpZmlyZS5cbiAgLy8gdGhpcyB3aWxsIGJlIGFjdGluZyBhcyBhIGlkZW50aWZpcmUgYW5kIGl0IHdpbGwgaG9sZCB0aGUgbGlzdCBvZiByZXNwb25zZXMuXG4gIHByaXZhdGUgY2FjaGUgPSBuZXcgTWFwPHN0cmluZyxbRGF0ZSxIdHRwUmVzcG9uc2U8YW55Pl0+KCk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZXQoa2V5OmFueSx2YWx1ZTphbnksdGltZVRvTGl2ZTpudW1iZXJ8bnVsbCA9IG51bGwpe1xuICAgIGNvbnNvbGUubG9nKCdzZXQgY2FjaGUga2V5JyxrZXkpO1xuICAgIGlmKHRpbWVUb0xpdmUpe1xuICAgICAgY29uc3QgZXhwaXJlc0luID0gbmV3IERhdGUoKTtcbiAgICAgIGV4cGlyZXNJbi5zZXRTZWNvbmRzKGV4cGlyZXNJbi5nZXRTZWNvbmRzKCkgKyB0aW1lVG9MaXZlKTtcbiAgICAgIC8vIGlmIHdlIGRvbnQgaGF2ZSB0byBleHBpcmUgdGhlbiBwdXQgbnVsbCBoZXJlLlxuICAgICAgdGhpcy5jYWNoZS5zZXQoa2V5LFtleHBpcmVzSW4sdmFsdWUgXSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleTphbnkpe1xuICAgIGNvbnN0IHR1cGxlID0gdGhpcy5jYWNoZS5nZXQoa2V5KTtcbiAgICBpZighdHVwbGUpIHJldHVybiBudWxsO1xuICAgIC8vIGV4dHJhY3QgdHVwbGUuXG4gICAgY29uc3QgZXhwaXJlc0luID0gdHVwbGVbMF07XG4gICAgY29uc3QgaHR0cFNhdmVkUmVzcG9uc2UgPSB0dXBsZVsxXTtcbiAgICBjb25zdCB0aW1lTm93ID0gbmV3IERhdGUoKTtcbiAgICBpZihleHBpcmVzSW4gJiYgZXhwaXJlc0luLmdldFRpbWUoKSA8IHRpbWVOb3cuZ2V0VGltZSgpKXtcbiAgICAgIHRoaXMuY2FjaGUuZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgIHJldHVybiBodHRwU2F2ZWRSZXNwb25zZTtcbiAgfVxuXG59Il19