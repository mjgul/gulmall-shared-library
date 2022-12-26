import { JGSApiService } from "../../../api-lib.service";
import { ItemDataManiputeService } from '../../data-manipulation/item-data-manipute.service';
import { HttpClient } from '@angular/common/http';
import { Item } from "../../../classes/items/item";
import * as i0 from "@angular/core";
export declare class ItemService {
    private api;
    http: HttpClient;
    private itemDataManipulation;
    private appBaseUrl;
    constructor(api: JGSApiService, http: HttpClient, itemDataManipulation: ItemDataManiputeService);
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @returns list of all users.
     * @memberof ItemService
     */
    getAllItem: () => Promise<import("rxjs").Observable<Item[]>>;
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} status
     * @returns list of users fetched by status.
     * @memberof ItemService
     */
    getAllItemWithStatus(_status: string): Promise<import("rxjs").Observable<Object>>;
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} mamal_id
     * @returns single user.
     * @memberof ItemService
     */
    getItemById(_id: string): Promise<import("rxjs").Observable<Object>>;
    updateItemById(_item: any, _id: string): void;
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} mamal_id
     * @returns status of deletion.
     * @memberof ItemService
     */
    deleteItemById(_id: string): Promise<import("rxjs").Observable<Object>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ItemService>;
}
