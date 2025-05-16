import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";
import { ItemDataManiputeService } from "../../data-manipulation/item-data-manipute.service";
import {  map } from "rxjs";
import { Item } from "projects/api-lib/src/public-api"; 
@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(
    private api: JGSApiService,
    private itemDataManipulation: ItemDataManiputeService
  ) {}

  /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @param pageNumebr number
   * @returns list of all users.
   * @memberof ItemService
   */
  getAllItem = async (pageNumber: number) => {
    let apiRoute: any = {};
    apiRoute.apiroute = `get-all-item?pageNumber=${pageNumber}`
    return await (await this.api.GET(apiRoute))
      .pipe(map((items: any) => this.itemDataManipulation.toClass(items.data)));
  };

  getItemByPublicId = async (itemPublicId: string) => {
    let apiRoute: any = {};
    apiRoute.apiroute = `get-item-by-id?publicId=${itemPublicId}`
    return await (await this.api.GET(apiRoute))
    .pipe(map((items: any) => this.itemDataManipulation.toClass(items.data)))
  };

  /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @param {string} status
   * @returns list of users fetched by status.
   * @memberof ItemService
   */
  getAllItemWithStatus = async (_status: string) => {
    let apiRoute: any = {};
    apiRoute.apiroute = "get-item-with-status";
    apiRoute.data = { status: _status };
    return (await this.api.POST(apiRoute)).subscribe();
  };

  /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @param {string} mamal_id
   * @returns single user.
   * @memberof ItemService
   */
  getItemById = async (_id: string) => {
    let apiRoute: any = {};
    apiRoute.apiroute = "get-item-by-id";
    apiRoute.data = { item_id: _id };
    return this.api.POST(apiRoute);
  };

    /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @param {number} publicId
   * @returns '{User , []Items}'
   * @memberof ItemService
   */
    getItemByMerchantId = async (_id: number) => {
      let apiRoute: any = {};
      apiRoute.apiroute = `get-all-items-by-mamal-id?publicId=${_id}`;
      return this.api.GET(apiRoute);
    };

  updateItemById(_item: any, _id: string) {}

  /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @param {string} mamal_id
   * @returns status of deletion.
   * @memberof ItemService
   */
  deleteItemById = async (_id: string) => {
    let apiRoute: any = {};
    apiRoute.apiroute = "delete-item-by-id";
    apiRoute.data = { item_id: _id };
    return this.api.POST(apiRoute);
  };

  addItem = async (item: any) => {
    let apiRoute: any = {};
    apiRoute.apiroute = "add-item";
    apiRoute.data = item;
    return await this.api.POST(apiRoute);
  };

  createDraftProduct = (userPublicId:number) =>{
    let apiRoute: any = {};
    apiRoute.apiroute = `create-draft-item?userId=${userPublicId}`;

    return this.api.GET(apiRoute);
  }
}
