import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../../api-lib.service";
export class ItemService {
    constructor(api) {
        this.api = api;
    }
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @returns list of all users.
     * @memberof ItemService
     */
    getAllItem() {
        let apiRoute = {};
        apiRoute.apiroute = "get-all-item";
        return this.api.GET(apiRoute);
    }
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} status
     * @returns list of users fetched by status.
     * @memberof ItemService
     */
    getAllItemWithStatus(_status) {
        let apiRoute = {};
        apiRoute.apiroute = "get-item-with-status";
        apiRoute.data = { status: _status };
        return this.api.POST(apiRoute);
    }
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} mamal_id
     * @returns single user.
     * @memberof ItemService
     */
    getItemById(_id) {
        let apiRoute = {};
        apiRoute.apiroute = "get-item-by-id";
        apiRoute.data = { item_id: _id };
        return this.api.POST(apiRoute);
    }
    updateItemById(_item, _id) { }
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} mamal_id
     * @returns status of deletion.
     * @memberof ItemService
     */
    deleteItemById(_id) {
        let apiRoute = {};
        apiRoute.apiroute = "delete-item-by-id";
        apiRoute.data = { item_id: _id };
        return this.api.POST(apiRoute);
    }
}
ItemService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, deps: [{ token: i1.JGSApiService }], target: i0.ɵɵFactoryTarget.Injectable });
ItemService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.JGSApiService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXBpLWxpYi9zcmMvbGliL1NlcnZpY2VzL2FwaS9wb3N0cy9pdGVtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQW9CLEdBQWtCO1FBQWxCLFFBQUcsR0FBSCxHQUFHLENBQWU7SUFBRyxDQUFDO0lBRTFDOzs7OztPQUtHO0lBQ0gsVUFBVTtRQUNSLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxvQkFBb0IsQ0FBQyxPQUFlO1FBQ2xDLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQzNDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsV0FBVyxDQUFDLEdBQVc7UUFDckIsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxjQUFjLENBQUMsS0FBVSxFQUFFLEdBQVcsSUFBRyxDQUFDO0lBRTFDOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FBQyxHQUFXO1FBQ3hCLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzt3R0ExRFUsV0FBVzs0R0FBWCxXQUFXLGNBRlYsTUFBTTsyRkFFUCxXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSkdTQXBpU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9hcGktbGliLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogSkdTQXBpU2VydmljZSkge31cblxuICAvKipcbiAgICogVXNlZCB0byBmZXRjaCBjb21tZW50cyBiYXNlZCBvbiBlbnRpdHlcbiAgICogQEF1dGhvciBNdWhhbW1hZCBKdW5haWQgR3VsXG4gICAqIEByZXR1cm5zIGxpc3Qgb2YgYWxsIHVzZXJzLlxuICAgKiBAbWVtYmVyb2YgSXRlbVNlcnZpY2VcbiAgICovXG4gIGdldEFsbEl0ZW0oKSB7XG4gICAgbGV0IGFwaVJvdXRlOiBhbnkgPSB7fTtcbiAgICBhcGlSb3V0ZS5hcGlyb3V0ZSA9IFwiZ2V0LWFsbC1pdGVtXCI7XG4gICAgcmV0dXJuIHRoaXMuYXBpLkdFVChhcGlSb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmZXRjaCBjb21tZW50cyBiYXNlZCBvbiBlbnRpdHlcbiAgICogQEF1dGhvciBNdWhhbW1hZCBKdW5haWQgR3VsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcbiAgICogQHJldHVybnMgbGlzdCBvZiB1c2VycyBmZXRjaGVkIGJ5IHN0YXR1cy5cbiAgICogQG1lbWJlcm9mIEl0ZW1TZXJ2aWNlXG4gICAqL1xuICBnZXRBbGxJdGVtV2l0aFN0YXR1cyhfc3RhdHVzOiBzdHJpbmcpIHtcbiAgICBsZXQgYXBpUm91dGU6IGFueSA9IHt9O1xuICAgIGFwaVJvdXRlLmFwaXJvdXRlID0gXCJnZXQtaXRlbS13aXRoLXN0YXR1c1wiO1xuICAgIGFwaVJvdXRlLmRhdGEgPSB7IHN0YXR1czogX3N0YXR1cyB9O1xuICAgIHJldHVybiB0aGlzLmFwaS5QT1NUKGFwaVJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZldGNoIGNvbW1lbnRzIGJhc2VkIG9uIGVudGl0eVxuICAgKiBAQXV0aG9yIE11aGFtbWFkIEp1bmFpZCBHdWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hbWFsX2lkXG4gICAqIEByZXR1cm5zIHNpbmdsZSB1c2VyLlxuICAgKiBAbWVtYmVyb2YgSXRlbVNlcnZpY2VcbiAgICovXG4gIGdldEl0ZW1CeUlkKF9pZDogc3RyaW5nKSB7XG4gICAgbGV0IGFwaVJvdXRlOiBhbnkgPSB7fTtcbiAgICBhcGlSb3V0ZS5hcGlyb3V0ZSA9IFwiZ2V0LWl0ZW0tYnktaWRcIjtcbiAgICBhcGlSb3V0ZS5kYXRhID0geyBpdGVtX2lkOiBfaWQgfTtcbiAgICByZXR1cm4gdGhpcy5hcGkuUE9TVChhcGlSb3V0ZSk7XG4gIH1cblxuICBcbiAgdXBkYXRlSXRlbUJ5SWQoX2l0ZW06IGFueSwgX2lkOiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmV0Y2ggY29tbWVudHMgYmFzZWQgb24gZW50aXR5XG4gICAqIEBBdXRob3IgTXVoYW1tYWQgSnVuYWlkIEd1bFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFtYWxfaWRcbiAgICogQHJldHVybnMgc3RhdHVzIG9mIGRlbGV0aW9uLlxuICAgKiBAbWVtYmVyb2YgSXRlbVNlcnZpY2VcbiAgICovXG4gIGRlbGV0ZUl0ZW1CeUlkKF9pZDogc3RyaW5nKSB7XG4gICAgbGV0IGFwaVJvdXRlOiBhbnkgPSB7fTtcbiAgICBhcGlSb3V0ZS5hcGlyb3V0ZSA9IFwiZGVsZXRlLWl0ZW0tYnktaWRcIjtcbiAgICBhcGlSb3V0ZS5kYXRhID0geyBpdGVtX2lkOiBfaWQgfTtcbiAgICByZXR1cm4gdGhpcy5hcGkuUE9TVChhcGlSb3V0ZSk7XG4gIH1cbn0iXX0=