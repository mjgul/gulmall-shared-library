import { Injectable } from "@angular/core";
import { JGSApiService } from "../../../api-lib.service";
import { SERVER_IP } from '../../../constants/config';
import { ItemDataManiputeService } from '../../data-manipulation/item-data-manipute.service';
import {
  HttpClient
} from '@angular/common/http';
import { Item } from "../../../classes/items/item";
import { map } from "rxjs";
import { Iitem } from "../../../interfaces/item";
import { Icloth } from "../../../interfaces/cloth";
@Injectable({
  providedIn: "root",
})
export class ItemService {
  private appBaseUrl = SERVER_IP
  constructor(private api: JGSApiService,public http: HttpClient, private itemDataManipulation:ItemDataManiputeService) {}

  /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @returns list of all users.
   * @memberof ItemService
   */
  getAllItem = async () => {
    let apiRoute: any = {};
    apiRoute.apiroute = "get-all-item";
    return await this.http.get(`${this.appBaseUrl}/${apiRoute.apiroute}`).pipe(
      map((items:any) =>
       this.itemDataManipulation.toClass(items.data))
    )
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
    return this.api.POST(apiRoute)
  }

  /**
   * Used to fetch comments based on entity
   * @Author Muhammad Junaid Gul
   * @param {string} mamal_id
   * @returns single user.
   * @memberof ItemService
   */
  getItemById = (_id: string) => {
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
  deleteItemById = (_id: string) => {
    let apiRoute: any = {};
    apiRoute.apiroute = "delete-item-by-id";
    apiRoute.data = { item_id: _id };
    return this.api.POST(apiRoute);
  }
}