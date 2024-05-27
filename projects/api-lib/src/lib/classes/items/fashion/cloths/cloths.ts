import {
  Icategory,
  IchildSubCat,
  IsubCategory,
} from "../../../../interfaces/category";
import { Image } from "../../../generic/image";
import { Color } from "../../../generic/color";
import { Size } from "../../../generic/size";
import { Fashion } from "../fashion";
import { Dimension } from "../../../.././interfaces/item";

export class Cloth extends Fashion {
  private color!: Color;
  private size!: Size;
  private texture!:string;
  private clothType!:string;
  private dimenstions!:Dimension;

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
    images: Image[],
    price: number,
    title: string,
    availableColor:Color[],
    availableSize:Size[],
    publicId:number,
    ownerId:string,
    quantity:number,
    remainingQty:number,
    texture:string,
    clothType:string,
    dimension:Dimension,
    hasDimension:boolean
  ) {
    super();
    this.setCountry(country);
    this.setCurrency(currency);
    this.setCategory(category);
    this.setSubCategory(subCategory);
    this.setSubCatChild(subCatChild);
    this.setImages(images);
    this.setItemPrice(price);
    this.setItemTitle(title);
    this.setAvailableColor(availableColor);
    this.setAvailableSize(availableSize);
    this.setColor(new Color('NO COLOR',"#000000","000000"))
    this.setSize(new Size("NO SIZE","000000"));
    this.setPublicId(publicId)
    this.setOwnerId(ownerId)
    this.setQuantity(quantity)
    this.setRemainingQuantity(remainingQty)
    this.texture = texture;
    this.clothType = clothType;
    this.dimenstions = dimension;
    this.setHasDimension(hasDimension);
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

 public getLength=():string=>{
  return `${this.dimenstions.length.value} ${this.dimenstions.length.unit}`;
 }

 public getWidth=():string=>{
  return `${this.dimenstions.width.value} ${this.dimenstions.width.unit}`;
 }

 public getTexture=():string =>{
  return this.texture;
 }

 public getClothType=():string =>{
  return this.clothType;
 }
  public override itemBluePrint() {
    // "itemID_BLUE_L"
    return `${this.getChildSubCat().getId()}_${this.color.getName()}_${this.size.getName()}`;
  }
}
