import { Injectable } from "@angular/core";
import { SERVER_IP } from '../../../constants/config';
import { map } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "../../../api-lib.service";
import * as i2 from "@angular/common/http";
import * as i3 from "../../data-manipulation/item-data-manipute.service";
export class ItemService {
    constructor(api, http, itemDataManipulation) {
        this.api = api;
        this.http = http;
        this.itemDataManipulation = itemDataManipulation;
        this.appBaseUrl = `http://${SERVER_IP}`;
        /**
         * Used to fetch comments based on entity
         * @Author Muhammad Junaid Gul
         * @returns list of all users.
         * @memberof ItemService
         */
        this.getAllItem = async () => {
            let apiRoute = {};
            apiRoute.apiroute = "get-all-item";
            return await this.http.get(`${this.appBaseUrl}/${apiRoute.apiroute}`).pipe(map((items) => this.itemDataManipulation.toClass(items.data)));
        };
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
ItemService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, deps: [{ token: i1.JGSApiService }, { token: i2.HttpClient }, { token: i3.ItemDataManiputeService }], target: i0.ɵɵFactoryTarget.Injectable });
ItemService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.JGSApiService }, { type: i2.HttpClient }, { type: i3.ItemDataManiputeService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXBpLWxpYi9zcmMvbGliL3NlcnZpY2VzL2FwaS9wb3N0cy9pdGVtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNdEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFNM0IsTUFBTSxPQUFPLFdBQVc7SUFFdEIsWUFBb0IsR0FBa0IsRUFBUSxJQUFnQixFQUFVLG9CQUE0QztRQUFoRyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVEsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0I7UUFENUcsZUFBVSxHQUFHLFVBQVUsU0FBUyxFQUFFLENBQUM7UUFHM0M7Ozs7O1dBS0c7UUFDSCxlQUFVLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ25DLE9BQU8sTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUN4RSxHQUFHLENBQUMsQ0FBQyxLQUFTLEVBQUUsRUFBRSxDQUVqQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNoRCxDQUFBO1FBQ0gsQ0FBQyxDQUFBO0lBaEJzSCxDQUFDO0lBa0J4SDs7Ozs7O09BTUc7SUFDSCxvQkFBb0IsQ0FBQyxPQUFlO1FBQ2xDLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQzNDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsV0FBVyxDQUFDLEdBQVc7UUFDckIsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxjQUFjLENBQUMsS0FBVSxFQUFFLEdBQVcsSUFBRyxDQUFDO0lBRTFDOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FBQyxHQUFXO1FBQ3hCLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzt3R0EvRFUsV0FBVzs0R0FBWCxXQUFXLGNBRlYsTUFBTTsyRkFFUCxXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSkdTQXBpU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9hcGktbGliLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNFUlZFUl9JUCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9jb25maWcnO1xuaW1wb3J0IHsgSXRlbURhdGFNYW5pcHV0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9kYXRhLW1hbmlwdWxhdGlvbi9pdGVtLWRhdGEtbWFuaXB1dGUuc2VydmljZSc7XG5pbXBvcnQge1xuICBIdHRwQ2xpZW50XG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vY2xhc3Nlcy9pdGVtcy9pdGVtXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSWl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9pdGVtXCI7XG5pbXBvcnQgeyBJY2xvdGggfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9jbG90aFwiO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICBwcml2YXRlIGFwcEJhc2VVcmwgPSBgaHR0cDovLyR7U0VSVkVSX0lQfWA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBKR1NBcGlTZXJ2aWNlLHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGl0ZW1EYXRhTWFuaXB1bGF0aW9uOkl0ZW1EYXRhTWFuaXB1dGVTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZldGNoIGNvbW1lbnRzIGJhc2VkIG9uIGVudGl0eVxuICAgKiBAQXV0aG9yIE11aGFtbWFkIEp1bmFpZCBHdWxcbiAgICogQHJldHVybnMgbGlzdCBvZiBhbGwgdXNlcnMuXG4gICAqIEBtZW1iZXJvZiBJdGVtU2VydmljZVxuICAgKi9cbiAgZ2V0QWxsSXRlbSA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgYXBpUm91dGU6IGFueSA9IHt9O1xuICAgIGFwaVJvdXRlLmFwaXJvdXRlID0gXCJnZXQtYWxsLWl0ZW1cIjtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldChgJHt0aGlzLmFwcEJhc2VVcmx9LyR7YXBpUm91dGUuYXBpcm91dGV9YCkucGlwZShcbiAgICAgIG1hcCgoaXRlbXM6YW55KSA9PlxuICAgICAgXG4gICAgICAgdGhpcy5pdGVtRGF0YU1hbmlwdWxhdGlvbi50b0NsYXNzKGl0ZW1zLmRhdGEpKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZldGNoIGNvbW1lbnRzIGJhc2VkIG9uIGVudGl0eVxuICAgKiBAQXV0aG9yIE11aGFtbWFkIEp1bmFpZCBHdWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1c1xuICAgKiBAcmV0dXJucyBsaXN0IG9mIHVzZXJzIGZldGNoZWQgYnkgc3RhdHVzLlxuICAgKiBAbWVtYmVyb2YgSXRlbVNlcnZpY2VcbiAgICovXG4gIGdldEFsbEl0ZW1XaXRoU3RhdHVzKF9zdGF0dXM6IHN0cmluZykge1xuICAgIGxldCBhcGlSb3V0ZTogYW55ID0ge307XG4gICAgYXBpUm91dGUuYXBpcm91dGUgPSBcImdldC1pdGVtLXdpdGgtc3RhdHVzXCI7XG4gICAgYXBpUm91dGUuZGF0YSA9IHsgc3RhdHVzOiBfc3RhdHVzIH07XG4gICAgcmV0dXJuIHRoaXMuYXBpLlBPU1QoYXBpUm91dGUpXG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmZXRjaCBjb21tZW50cyBiYXNlZCBvbiBlbnRpdHlcbiAgICogQEF1dGhvciBNdWhhbW1hZCBKdW5haWQgR3VsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYW1hbF9pZFxuICAgKiBAcmV0dXJucyBzaW5nbGUgdXNlci5cbiAgICogQG1lbWJlcm9mIEl0ZW1TZXJ2aWNlXG4gICAqL1xuICBnZXRJdGVtQnlJZChfaWQ6IHN0cmluZykge1xuICAgIGxldCBhcGlSb3V0ZTogYW55ID0ge307XG4gICAgYXBpUm91dGUuYXBpcm91dGUgPSBcImdldC1pdGVtLWJ5LWlkXCI7XG4gICAgYXBpUm91dGUuZGF0YSA9IHsgaXRlbV9pZDogX2lkIH07XG4gICAgcmV0dXJuIHRoaXMuYXBpLlBPU1QoYXBpUm91dGUpO1xuICB9XG5cbiAgXG4gIHVwZGF0ZUl0ZW1CeUlkKF9pdGVtOiBhbnksIF9pZDogc3RyaW5nKSB7fVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZldGNoIGNvbW1lbnRzIGJhc2VkIG9uIGVudGl0eVxuICAgKiBAQXV0aG9yIE11aGFtbWFkIEp1bmFpZCBHdWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hbWFsX2lkXG4gICAqIEByZXR1cm5zIHN0YXR1cyBvZiBkZWxldGlvbi5cbiAgICogQG1lbWJlcm9mIEl0ZW1TZXJ2aWNlXG4gICAqL1xuICBkZWxldGVJdGVtQnlJZChfaWQ6IHN0cmluZykge1xuICAgIGxldCBhcGlSb3V0ZTogYW55ID0ge307XG4gICAgYXBpUm91dGUuYXBpcm91dGUgPSBcImRlbGV0ZS1pdGVtLWJ5LWlkXCI7XG4gICAgYXBpUm91dGUuZGF0YSA9IHsgaXRlbV9pZDogX2lkIH07XG4gICAgcmV0dXJuIHRoaXMuYXBpLlBPU1QoYXBpUm91dGUpO1xuICB9XG59Il19