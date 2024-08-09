import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";
import { SERVER_IP } from "../../../constants/config";
import { ItemDataManiputeService } from "../../data-manipulation/item-data-manipute.service";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Item } from "../../../classes/items/item";
@Injectable({
  providedIn: "root",
})
export class ItemService {
  private appBaseUrl = SERVER_IP;
  constructor(
    private api: JGSApiService,
    public http: HttpClient,
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
    let url = `get-all-item?pageNumber=${pageNumber}`;
    return await this.http
      .get(`${this.appBaseUrl}/${url}`)
      .pipe(map((items: any) => this.itemDataManipulation.toClass(items.data)));
  };

  getItemByPublicId = (itemPublicId: string): Observable<Item[]> => {
    let url = `get-item-by-id?publicId=${itemPublicId}`;
    return this.http.get<Item[]>(`${this.appBaseUrl}/${url}`)
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
    let url = `create-draft-item?userId=${userPublicId}`;
    return this.http.get(`${this.appBaseUrl}/${url}`);
  }
}
