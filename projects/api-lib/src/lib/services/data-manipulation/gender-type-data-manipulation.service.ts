import { Injectable } from '@angular/core';
import { IsizeType } from '../../interfaces/sizeType';
@Injectable({
    providedIn: 'root'
  })

  export class GenderOrTypeDataManipulationService {
    constructor() { }


     // MAPS SERVER CATEGORY TO INTERFACE CATEGORY.
     public toSizeType = (types:any[]):IsizeType[] => {
      return types.map((type): IsizeType => ({
       id: type.ID,
       name: type.name.en
   }))
   }

}