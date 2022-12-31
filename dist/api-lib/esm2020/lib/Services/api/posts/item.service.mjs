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
        /**
         * Used to fetch comments based on entity
         * @Author Muhammad Junaid Gul
         * @param {string} mamal_id
         * @returns single user.
         * @memberof ItemService
         */
        this.getItemById = (_id) => {
            let apiRoute = {};
            apiRoute.apiroute = "get-item-by-id";
            apiRoute.data = { item_id: _id };
            return this.api.POST(apiRoute);
        };
        /**
         * Used to fetch comments based on entity
         * @Author Muhammad Junaid Gul
         * @param {string} mamal_id
         * @returns status of deletion.
         * @memberof ItemService
         */
        this.deleteItemById = (_id) => {
            let apiRoute = {};
            apiRoute.apiroute = "delete-item-by-id";
            apiRoute.data = { item_id: _id };
            return this.api.POST(apiRoute);
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
    updateItemById(_item, _id) { }
}
ItemService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, deps: [{ token: i1.JGSApiService }, { token: i2.HttpClient }, { token: i3.ItemDataManiputeService }], target: i0.ɵɵFactoryTarget.Injectable });
ItemService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.JGSApiService }, { type: i2.HttpClient }, { type: i3.ItemDataManiputeService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXBpLWxpYi9zcmMvbGliL3NlcnZpY2VzL2FwaS9wb3N0cy9pdGVtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNdEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFNM0IsTUFBTSxPQUFPLFdBQVc7SUFFdEIsWUFBb0IsR0FBa0IsRUFBUSxJQUFnQixFQUFVLG9CQUE0QztRQUFoRyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVEsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0I7UUFENUcsZUFBVSxHQUFHLFVBQVUsU0FBUyxFQUFFLENBQUM7UUFHM0M7Ozs7O1dBS0c7UUFDSCxlQUFVLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ25DLE9BQU8sTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUN4RSxHQUFHLENBQUMsQ0FBQyxLQUFTLEVBQUUsRUFBRSxDQUNqQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNoRCxDQUFBO1FBQ0gsQ0FBQyxDQUFBO1FBZ0JEOzs7Ozs7V0FNRztRQUNILGdCQUFXLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUM1QixJQUFJLFFBQVEsR0FBUSxFQUFFLENBQUM7WUFDdkIsUUFBUSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztZQUNyQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFBO1FBS0Q7Ozs7OztXQU1HO1FBQ0gsbUJBQWMsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO1lBQy9CLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztZQUN2QixRQUFRLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUE7SUE1RHNILENBQUM7SUFpQnhIOzs7Ozs7T0FNRztJQUNILG9CQUFvQixDQUFDLE9BQWU7UUFDbEMsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7UUFDM0MsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFpQkQsY0FBYyxDQUFDLEtBQVUsRUFBRSxHQUFXLElBQUcsQ0FBQzs7d0dBaEQvQixXQUFXOzRHQUFYLFdBQVcsY0FGVixNQUFNOzJGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBKR1NBcGlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS1saWIuc2VydmljZVwiO1xuaW1wb3J0IHsgU0VSVkVSX0lQIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2NvbmZpZyc7XG5pbXBvcnQgeyBJdGVtRGF0YU1hbmlwdXRlU2VydmljZSB9IGZyb20gJy4uLy4uL2RhdGEtbWFuaXB1bGF0aW9uL2l0ZW0tZGF0YS1tYW5pcHV0ZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnRcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi8uLi8uLi9jbGFzc2VzL2l0ZW1zL2l0ZW1cIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJaXRlbSB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL2l0ZW1cIjtcbmltcG9ydCB7IEljbG90aCB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL2Nsb3RoXCI7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG4gIHByaXZhdGUgYXBwQmFzZVVybCA9IGBodHRwOi8vJHtTRVJWRVJfSVB9YDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEpHU0FwaVNlcnZpY2UscHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaXRlbURhdGFNYW5pcHVsYXRpb246SXRlbURhdGFNYW5pcHV0ZVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmV0Y2ggY29tbWVudHMgYmFzZWQgb24gZW50aXR5XG4gICAqIEBBdXRob3IgTXVoYW1tYWQgSnVuYWlkIEd1bFxuICAgKiBAcmV0dXJucyBsaXN0IG9mIGFsbCB1c2Vycy5cbiAgICogQG1lbWJlcm9mIEl0ZW1TZXJ2aWNlXG4gICAqL1xuICBnZXRBbGxJdGVtID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBhcGlSb3V0ZTogYW55ID0ge307XG4gICAgYXBpUm91dGUuYXBpcm91dGUgPSBcImdldC1hbGwtaXRlbVwiO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYXBwQmFzZVVybH0vJHthcGlSb3V0ZS5hcGlyb3V0ZX1gKS5waXBlKFxuICAgICAgbWFwKChpdGVtczphbnkpID0+XG4gICAgICAgdGhpcy5pdGVtRGF0YU1hbmlwdWxhdGlvbi50b0NsYXNzKGl0ZW1zLmRhdGEpKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZldGNoIGNvbW1lbnRzIGJhc2VkIG9uIGVudGl0eVxuICAgKiBAQXV0aG9yIE11aGFtbWFkIEp1bmFpZCBHdWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1c1xuICAgKiBAcmV0dXJucyBsaXN0IG9mIHVzZXJzIGZldGNoZWQgYnkgc3RhdHVzLlxuICAgKiBAbWVtYmVyb2YgSXRlbVNlcnZpY2VcbiAgICovXG4gIGdldEFsbEl0ZW1XaXRoU3RhdHVzKF9zdGF0dXM6IHN0cmluZykge1xuICAgIGxldCBhcGlSb3V0ZTogYW55ID0ge307XG4gICAgYXBpUm91dGUuYXBpcm91dGUgPSBcImdldC1pdGVtLXdpdGgtc3RhdHVzXCI7XG4gICAgYXBpUm91dGUuZGF0YSA9IHsgc3RhdHVzOiBfc3RhdHVzIH07XG4gICAgcmV0dXJuIHRoaXMuYXBpLlBPU1QoYXBpUm91dGUpXG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmZXRjaCBjb21tZW50cyBiYXNlZCBvbiBlbnRpdHlcbiAgICogQEF1dGhvciBNdWhhbW1hZCBKdW5haWQgR3VsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYW1hbF9pZFxuICAgKiBAcmV0dXJucyBzaW5nbGUgdXNlci5cbiAgICogQG1lbWJlcm9mIEl0ZW1TZXJ2aWNlXG4gICAqL1xuICBnZXRJdGVtQnlJZCA9IChfaWQ6IHN0cmluZykgPT4ge1xuICAgIGxldCBhcGlSb3V0ZTogYW55ID0ge307XG4gICAgYXBpUm91dGUuYXBpcm91dGUgPSBcImdldC1pdGVtLWJ5LWlkXCI7XG4gICAgYXBpUm91dGUuZGF0YSA9IHsgaXRlbV9pZDogX2lkIH07XG4gICAgcmV0dXJuIHRoaXMuYXBpLlBPU1QoYXBpUm91dGUpO1xuICB9XG5cbiAgXG4gIHVwZGF0ZUl0ZW1CeUlkKF9pdGVtOiBhbnksIF9pZDogc3RyaW5nKSB7fVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZldGNoIGNvbW1lbnRzIGJhc2VkIG9uIGVudGl0eVxuICAgKiBAQXV0aG9yIE11aGFtbWFkIEp1bmFpZCBHdWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hbWFsX2lkXG4gICAqIEByZXR1cm5zIHN0YXR1cyBvZiBkZWxldGlvbi5cbiAgICogQG1lbWJlcm9mIEl0ZW1TZXJ2aWNlXG4gICAqL1xuICBkZWxldGVJdGVtQnlJZCA9IChfaWQ6IHN0cmluZykgPT4ge1xuICAgIGxldCBhcGlSb3V0ZTogYW55ID0ge307XG4gICAgYXBpUm91dGUuYXBpcm91dGUgPSBcImRlbGV0ZS1pdGVtLWJ5LWlkXCI7XG4gICAgYXBpUm91dGUuZGF0YSA9IHsgaXRlbV9pZDogX2lkIH07XG4gICAgcmV0dXJuIHRoaXMuYXBpLlBPU1QoYXBpUm91dGUpO1xuICB9XG59Il19