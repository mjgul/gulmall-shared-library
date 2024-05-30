import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SERVER_IP } from "../../../constants/config";
import { map } from "rxjs";
import { Item } from "../../../classes/items/item";
@Injectable({ providedIn: "root" })
export class ClothingFilterService {
    constructor(
        public http: HttpClient
      ) {}

    getAllFilters = async (pageNumber: number) => {
        let url = `get-all-item?pageNumber=${pageNumber}`;
        return await this.http
          .get(`${this.appBaseUrl}/${url}`)
          .pipe(map((items: any) => this.itemDataManipulation.toClass(items.data)));
      };
}