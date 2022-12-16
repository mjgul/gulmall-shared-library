import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../api-lib.service";
export class MamalsService {
    constructor(api) {
        this.api = api;
    }
    getAllUser() {
        let route = {};
        route.apiroute = "get-user";
        return this.api.GET(route);
    }
    addUser() { }
    getUserById() { }
    updateUser() { }
}
MamalsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MamalsService, deps: [{ token: i1.JGSApiService }], target: i0.ɵɵFactoryTarget.Injectable });
MamalsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MamalsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MamalsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.JGSApiService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFtYWxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvc2VydmljZXMvYXBpL21hbWFscy9tYW1hbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLM0MsTUFBTSxPQUFPLGFBQWE7SUFDeEIsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFJLENBQUM7SUFFMUMsVUFBVTtRQUNSLElBQUksS0FBSyxHQUFPLEVBQUUsQ0FBQztRQUNuQixLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxPQUFPLEtBQUcsQ0FBQztJQUVYLFdBQVcsS0FBRyxDQUFDO0lBRWYsVUFBVSxLQUFHLENBQUM7OzBHQWJILGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKR1NBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXBpLWxpYi5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hbWFsc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTpKR1NBcGlTZXJ2aWNlKSB7IH1cblxuICBnZXRBbGxVc2VyKCl7XG4gICAgbGV0IHJvdXRlOmFueSA9IHt9O1xuICAgIHJvdXRlLmFwaXJvdXRlID0gXCJnZXQtdXNlclwiO1xuICAgIHJldHVybiB0aGlzLmFwaS5HRVQocm91dGUpXG4gIH1cblxuICBhZGRVc2VyKCl7fVxuXG4gIGdldFVzZXJCeUlkKCl7fVxuXG4gIHVwZGF0ZVVzZXIoKXt9XG59XG4iXX0=