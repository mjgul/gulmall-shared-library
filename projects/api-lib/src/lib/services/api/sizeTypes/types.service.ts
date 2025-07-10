import { Injectable } from '@angular/core';
import { JGSApiService } from "../../../api-lib.service";
import { GenderOrTypeDataManipulationService } from "../../data-manipulation/gender-type-data-manipulation.service";
import { SizeColorDataManipulation } from "../../data-manipulation/size-color-data-manipulation.service";

import { map, Observable, tap } from 'rxjs';
import { IsizeType } from '../../../interfaces/sizeType';
@Injectable({
    providedIn: 'root'
  })

export class TypeSizeService {
    constructor(private api:JGSApiService, private sizeTypes:GenderOrTypeDataManipulationService, private sizeOrColor:SizeColorDataManipulation){}

      /**
   * RETURN AVAILABLE SIZE OF ITEM.
   * @param child_id string 
   * @param type string
   */
  getAvailableSize = async (child_cat_id:string,type:string) => {
    let apiRoute:any = {};
    apiRoute.apiroute = `get-size-chart`;
    apiRoute.data = {child_cat_id,type};
    return (await this.api.POST(apiRoute))
    .pipe(
      map((size:any) =>
       this.sizeOrColor.sizeToClass(size.data))
    )
  }

 

  /**
   * GIVES THE LIST OF ALL AVAILABLE GENDER OR TYPE.
   * @returns list of all available type/gender
   */
  getTypes = async (): Promise<Observable<IsizeType[]>> => {
    let apiRoute: any = {};
    apiRoute.apiroute = `get-gender`;
    // returns all gender 
    return (await this.api.GET(apiRoute))
    .pipe(
      
      map((items:any) =>
       this.sizeTypes.toSizeType(items.data))
    )
  }
}