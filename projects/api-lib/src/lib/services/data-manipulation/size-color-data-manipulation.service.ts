import { Injectable } from "@angular/core";
import { Color } from "../../classes/generic/color";
import { Size } from "../../classes/generic/size";
@Injectable({
  providedIn: "root",
})
export class SizeColorDataManipulation {
  constructor() {}

  public sizeToClass = (sizes: any): Size[] => {
    let _sizes: Size[] = [];
    sizes.forEach((item: any) => {
      _sizes.push(this.toSize(item));
    });
    console.log("SIZES IN DATA MANIPULATION ", _sizes);
    return _sizes;
  };

  public colorToClass = (colors:any):Color[] =>{
    let _colors: Color[] = [];
    colors.forEach((item: any) => {
      _colors.push(this.toColor(item));
    });
    console.log("COLORS IN DATA MANIPULATION ", _colors);
    return _colors;
  }

  private toSize = (size: any): Size => {
    let itemSize: Size = new Size(size.name.en, size.ID);
    return itemSize;
  };

  private toColor = (color:any):Color => {
    let itemColor:Color = new Color(color.name.en,color.cssHex,color.ID);
    return itemColor;
  }
}
