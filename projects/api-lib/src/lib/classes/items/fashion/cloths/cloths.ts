import {
  Icategory,
  IchildSubCat,
  IsubCategory,
} from "../../../../interfaces/category";
import { Image } from "../../../../classes/generic/image";
import { Iname } from "../../../../interfaces/name";
import { Color } from "../../../generic/color";
import { Size } from "../../../generic/size";
import { Fashion } from "../fashion";

export class Cloth extends Fashion {
  private color!: Color;
  private size!: Size;

  /**
   *
   * @param country
   * @param currency
   * @param category
   * @param subCategory
   * @param subCatChilc
   * @param images
   * @param price
   * @param title
   */
  constructor(
    country: string,
    currency: string,
    category: Icategory,
    subCategory: IsubCategory,
    subCatChild: IchildSubCat,
    images: Image,
    price: number,
    title: string,
    availableColor:Color[],
    availableSize:Size[]
  ) {
    super();
    this.setCountry(country);
    this.setCurrency(currency);
    this.setCategory(category);
    this.setSubCategory(subCategory);
    this.setSubCatChild(subCatChild);
    this.setImages(images);
    this.setItemPrice(price);
    this.setItemTitle("en", title);
    this.setAvailableColor(availableColor);
    this.setAvailableSize(availableSize);
    this.setColor(new Color('en','NO COLOR',"#000000","000000"))
    this.setSize(new Size('en',"NO SIZE","000000"))
  }

  /**
   * 
   * @param color of Color type
   */
  public setColor = (color: Color): void => {
    console.log("RECEIVED",color);
    this.color = color;
    console.log("SETTING COLOR ++ ", this.color, ' color ', this.color.getColorCode())
  };

  /**
   * 
   * @param size of Size type.
   */
  public setSize = (size: Size): void => {
    console.log("RECEIVED",size);
    this.size = size;
    console.log("SETTING COLOR ++ ", this.size, ' color ', this.size.getId())
  };

  /**
   * 
   * @returns size id
   */
  public getItemSizeId = (): string => {
    return this.size.getId();
  };
/**
 * 
 * @returns color id
 */
  public getItemColorId = (): string => {
    return this.color.getId();
  };

  public override itemBluePrint() {
    let blueprint =  `${this.getChildSubCat().getName("en"||"")?.replace(/\ /g, "-")}_${this.getChildSubCat().getId()}_${this.getItemColorId()}_${this.getItemSizeId()}`;
    console.log(blueprint);
    let blueprint1 =  `${this.getChildSubCat().getName("en"||"")?.replace(/\ /g, "-")}_${this.getChildSubCat().getId()}_${this.color.getName('en')}_${this.size.getName('en')}`;
    console.log(blueprint1)
    return `${this.getChildSubCat().getName("en" || "").replace(/\ /g, "-")}_${this.getChildSubCat().getId()}_${this.getItemColorId()}_${this.getItemSizeId()}`;
  }
}
