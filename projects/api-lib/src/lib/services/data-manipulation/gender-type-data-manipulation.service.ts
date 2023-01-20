import { Injectable } from '@angular/core';
import { IsizeType } from '../../interfaces/sizeType';
import { Icolor } from '../../interfaces/color';
@Injectable({
    providedIn: 'root'
  })

  export class GenderOrTypeDataManipulationService {
    constructor() { }

     // MAPS SERVER CATEGORY TO INTERFACE CATEGORY.
     public toSizeType = (types:any[]):IsizeType[] => {
      return types.map((type): IsizeType => ({
       id: type.ID,
       name: type.name
   }))
   }

    // MAPS SERVER CATEGORY TO INTERFACE CATEGORY.
    public toColor = (colors:any[]):Icolor[] => {
      return colors.map((colors): Icolor => ({
        id:colors.ID,
        colorHex:colors.cssHex,
        name:colors.name
   }))
   }

}