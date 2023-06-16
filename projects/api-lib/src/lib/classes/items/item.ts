import { throwError } from "rxjs";
import { Payable } from "../../interfaces/payable";
import { Category, ChildSubCategory, SubCategory } from "../generic/categoty";
import {
  Icategory,
  IchildSubCat,
  IsubCategory,
} from "../../interfaces/category";
import { MultiLingualName } from "../generic/name";
import { Image } from "../generic/image";

export abstract class Item implements Payable {
  private title!: MultiLingualName; // {en:"3 piece suit", ar:"3 piece suit"}
  private childSubCat!: ChildSubCategory; // {id:"23412kl",name:{en:"",ar:""}, sub_cat_id:"124123"}
  private category!: Category; // {id:"21323412kl",name:{en:"",ar:""}}
  private subCategory!: SubCategory; // {id:"23412klfds",name:{en:"",ar:""}, cat_id:"124123"}
  private price!: number; // 2000
  private description!: MultiLingualName; // {en:"",ar:""}
  private image!: Image[]; // ["jlskdfjas","lkdsfj","jlsakdfj"]
  private country!: string;
  private currency!: string;
  private quantity!: number;
  private availableQuantity!: number;
  private rating!: number;
  private totalNumberOfRating!: number;
  private discount!: string;
  private ownerId!: string;
  private publicId!:number;
  private remaining_qty!:number;

  public abstract getRequiredFields(): any;

  // Initiating the item attributes.
  constructor() {}

  public getCategory = () => {
    return this.category;
  };

  public getCurrency = () => {
    return this.currency;
  };

  public getSubCategory = () => {
    return this.subCategory;
  };

  public getChildSubCat = () => {
    return this.childSubCat;
  };

  public getAvailableQuantity = () => {
    return this.availableQuantity;
  };

  public getQuantity = () => {
    return this.quantity;
  };

  public getRating = () => {
    return this.rating;
  };

  public getTotalNumberOfRating = () => {
    return this.totalNumberOfRating;
  };

  public getDiscount = () => {
    return this.discount;
  };

  public getOwnerId = () => {
    return this.ownerId;
  };

  public getPublicId=()=>{
    return this.publicId;
  }

  /**
   * Set the discount
   * @param discount string
   */
  protected setDiscount = (discount: string) => {
    this.discount = discount;
  };

  /**
   * Set the discount
   * @param discount string
   */
  protected setOwnerId = (userId: string) => {
    this.ownerId = userId;
  };

  /**
   * Set the rating
   * @param rating number
   */
  protected setRating = (rating: number) => {
    this.rating = rating;
  };

  /**
   * Set the total number of rating
   * @param totalRatingNumber number
   */
  protected setTotalRating = (totalRatingNumber: number) => {
    this.totalNumberOfRating = totalRatingNumber;
  };

  /**
   * Set the currency
   * @param currency string
   */
  protected setCurrency = (currency: string) => {
    this.currency = currency;
  };

  /**
   * Set the currency
   * @param quantity number
   */
  protected setQuantity = (quantity: number) => {
    this.quantity = quantity;
  };

  /**
   * Set the currency
   * @param availableQuantity number
   */
  protected setAvailableQuantity = (quantity: number) => {
    this.availableQuantity = quantity;
  };

  /**
   * SET THE CATEGORY
   * @param category Icategory
   */
  protected setCategory = (category: Icategory) => {
    this.category = new Category(category);
  };

  /**
   * SETS THE SUB CATEGORY OF CATEGORY
   * @param subCategory IsubCategory
   */
  protected setSubCategory = (subCategory: IsubCategory) => {
    this.subCategory = new SubCategory(subCategory);
  };

  /**
   * SETS THE CHILD CATEGORY OF SUB CATEGORY.
   * @param subCatChild IchildSubCat
   */
  protected setSubCatChild = (subCatChild: IchildSubCat) => {
    this.childSubCat = new ChildSubCategory(subCatChild);
  };

  protected setPublicId=(publicId:number)=>{
    this.publicId = publicId;
  }

  // GET ITEM NAME MULTILINGUAL.
  public getItemTitle = () => {
    return this.title;
  };

  /**
   * SETS THE ITEM PRICE CATEGORY ID.
   * @param price number
   */
  protected setItemPrice = (price: number): void => {
    if (price > 0) {
      this.price = price;
    } else {
      throwError(() => {
        Error("Could not found Item subCategoryId");
      });
    }
  };

  /**
   * SETS THE ITEM DESCRIPTION CATEGORY ID.
   * @param description string
   */
  protected setItemDescription = (description: string): void => {
    this.description = new MultiLingualName(description);
  };

  /**
   * SET ITEM NAME WITH SPECIFIC ITEM NAME.
   * @param lang string e.g en ar
   * @param itemName string
   */
  protected setItemTitle = (itemName: string): void => {
    this.title = new MultiLingualName(itemName);
  };

  /**
   * GET ITEM PRICE
   * @return Number
   *  */
  public getItemPrice = (): number => {
    return this.price;
  };

  /**
   * TAKE ARRAY OF STRING AND SET IT IN OBJECT
   * @param images array of string[]
   * @returns  array of string string[]
   */
  protected setImages = (images: Image[]) => {
    this.image = images;
  };

  /**
   * GET ITEM DESCRIPTION
   * @returns string
   */
  public getItemDescription = () => {
    return this.description;
  };

  /**
   * GET ITEM IMAGES.
   * @returns string[]
   */
  public getItemLowQualityImages = (): Image[] => {
    return this.image;
  };

  /**
   * GET ITEM IMAGES.
   * @returns string[]
   */
  public getItemHighQualityImages = (): Image[] => {
    return this.image;
  };
  /**
   * GET ITEM PAYABLE AMOUNT.
   * @returns number
   */
  // method required to carry out contract with interface Payable
  public getPaymentAmount() {
    return this.price; // calculate total cost
  }

  /**
   * GET ITEM IDENTITY.
   * @return string
   */
  public itemBluePrint() {
    return `${this.childSubCat.getName()}_${this.category.getId()}`;
  }

  /**
   *
   * @param name name of the country
   */
  protected setCountry = (name: string) => {
    this.country = name;
  };

  /**
   *
   * @returns name of the country
   */
  public getCountry = (): string => {
    return this.country;
  };

  public getRemainingQuantity=():number=>{
    return this.remaining_qty;
  }
  public setRemainingQuantity=(qty:number)=>{
    this.remaining_qty = qty;
  }
}
