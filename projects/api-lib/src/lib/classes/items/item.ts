import { Iname } from '../../interfaces/name';
import { Payable } from '../../interfaces/payable';

export abstract class Item implements Payable {
  private name: Iname;
  private id:string;
  private categoryId:string;
  private subCategoryId:string;
  private description: string;
  private price: number;
  private image?: string[];

  public abstract getRequiredFields():any;

  // Initiating the item attributes.
  /**
   * 
   * @param name Iname
   * @param description string
   * @param price number
   * @param id string
   * @param categoryId string
   * @param subCategoryId string
   */
  constructor(
    name: Iname,
    description: string,
    price: number,
    categoryId:string,
    subCategoryId:string,
    id:string
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.id = id;
    this.categoryId = categoryId;
    this.subCategoryId = subCategoryId;
  };

  // GET ITEM NAME MULTILINGUAL.
  public getItemName = (): Iname => {
    return this.name;
  };

  // SET ITEM NAME WITH SPECIFIC ITEM NAME.
  public setItemName = (lang:string,itemName:string):object => {
    switch (lang) {
      case "en":
        this.name.en = itemName;
        break;
      case "ar":
        this.name.ar = itemName;
    }
    return {status:true,message:""};
  }

  /**
   * SETS CATEGORY AND RETURN OBJECT WITH RESPONSE STATUS AND MESSAGE.
   * @param categoryId 
   * @returns 
   */
  public setCategoryId = (categoryId:string):object => {
    this.subCategoryId = categoryId;
    return {status:true,message:"Sub category has been set."};
  }

  /**
   *  SETS SUB-CATEGORY AND RETURN OBJECT WITH RESPONSE STATUS AND MESSAGE.
   * @param subCatId 
   * @returns @{ status: boolean, message:string}
   */
  public setSubCategoryId = (subCatId:string):object => {
    this.subCategoryId = subCatId;
    return {status:true,message:"Sub category has been set."};
  }

  /**
   * SETS SUB-CATEGORY AND RETURN OBJECT WITH RESPONSE STATUS AND MESSAGE.
   * @param childOfSubCategoryId
   * @returns  @{ status: boolean, message:string}
   */
  public setChildSubCategoryId = (childSubCategory:string):object => {
    this.subCategoryId = childSubCategory;
    return {status:true,message:"Child sub category has been set."};
  }

  /**
   * GET ITEM PRICE 
   * @return Number
   *  */ 
  public getItemPrice = ():number => {
    return this.price;
  }

  /**
   * Get item Id
   * @returns string or empty string.
   */
  public getItemId = ():string =>{
    return this.id || "";
  }

  /**
   * TAKE ARRAY OF STRING AND SET IT IN OBJECT
   * @param images array of string[]
   * @returns  array of string string[]
   */
  public setImages = (images:string[]):string[] =>{
    this.image = images;
    return this.image;
  }

  
  /**
   * GET ITEM DESCRIPTION
   * @returns string
   */
  public getItemDescription = (): string => {
    return this.description;
  };

  /**
   * GET ITEM IMAGES.
   * @returns string[]
   */
  public getItemImages = (): string[] => {
    return this.image || [];
  };

  /**
   * GET ITEM PAYABLE AMOUNT.
   * @returns number
   */
  // method required to carry out contract with interface Payable
  public getPaymentAmount() {
    return this.price; // calculate total cost
  };

  /**
   * GET ITEM IDENTITY.
   * @return string
   */
  public itemBluePrint(){
    return `${this.getItemName()}_${this.id}`
  }
}
