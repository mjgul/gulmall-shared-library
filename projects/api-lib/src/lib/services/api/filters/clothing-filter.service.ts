import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SERVER_IP } from "../../../constants/config";
@Injectable({
  providedIn: "root",
})
export class ClothingFilterService {
    private appBaseUrl = SERVER_IP;
    private clotingFilterEndpoint:string = "get-clothing-filters";
    constructor(
        public http: HttpClient
      ) {}

    getAllFilters = async () => {
        return await this.http
          .get(`${this.appBaseUrl}/${this.clotingFilterEndpoint}`)
      };
}