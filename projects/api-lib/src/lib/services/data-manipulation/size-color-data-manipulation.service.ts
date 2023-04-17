import { Injectable } from '@angular/core';
import { Color } from '../../classes/generic/color'
import { Size } from '../../classes/generic/size'
@Injectable({
    providedIn: 'root'
  })
  export class SizeColorDataManipulation {
    constructor() { }
    public toClass = (sizes: any): Size[] => {

        let _sizes: Size[] = [];
        sizes.forEach((item: any) => {
            _sizes.push(this.toSize(item));
        });
        console.log("SIZES IN DATA MANIPULATION ", _sizes);
        return _sizes;
      };

      private toSize = (size: any): Size => {
          
    let itemSize: Size = new Size(size.name.en,size.ID);
        return itemSize;
      };
  }