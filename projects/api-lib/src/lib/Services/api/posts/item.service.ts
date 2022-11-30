import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private api: JGSApiService) {}

  /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @returns list of all users.
   * @memberof ItemService
   */
  getAllItem() {
    let apiRoute: any = {};
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
  getAllItemWithStatus(_status: string) {
    let apiRoute: any = {};
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
  getItemById(_id: string) {
    let apiRoute: any = {};
    apiRoute.apiroute = "get-item-by-id";
    apiRoute.data = { item_id: _id };
    return this.api.POST(apiRoute);
  }

  
  updateItemById(_item: any, _id: string) {}

  /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @param {string} mamal_id
   * @returns status of deletion.
   * @memberof ItemService
   */
  deleteItemById(_id: string) {
    let apiRoute: any = {};
    apiRoute.apiroute = "delete-item-by-id";
    apiRoute.data = { item_id: _id };
    return this.api.POST(apiRoute);
  }
}