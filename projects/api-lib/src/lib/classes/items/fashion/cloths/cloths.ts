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
  }

  /**
   * 
   * @param color of Color type
   */
  public setColor = (color: Color): void => {
    this.color = color;
  };

  /**
   * 
   * @param size of Size type.
   */
  public setSize = (size: Size): void => {
    this.size = size;
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
    console.log("BLUE PRINT: ", `${this.getChildSubCat().getName("en").replace(/\ /g, "-")}_${this.getChildSubCat().getId()}_${this.color}_${this.size}`);
    return `${this.getChildSubCat().getName("en").replace(/\ /g, "-")}_${this.getChildSubCat().getId()}_${this.color}_${this.size}`;
  }
}
