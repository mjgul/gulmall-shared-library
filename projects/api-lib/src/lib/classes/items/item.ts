import { throwError } from "rxjs";
import { Payable } from "../../interfaces/payable";
import { Category, ChildSubCategory, SubCategory } from "../generic/categoty";
import { Icategory, IchildSubCat, IsubCategory } from "../../interfaces/category";
import { MultiLingualName } from "../generic/name";
import { Image } from "../generic/image";

export abstract class Item implements Payable {

  private title!: MultiLingualName;// {en:"3 piece suit", ar:"3 piece suit"}
  private childSubCat!:ChildSubCategory; // {id:"23412kl",name:{en:"",ar:""}, sub_cat_id:"124123"}
  private category!: Category; // {id:"21323412kl",name:{en:"",ar:""}}
  private subCategory!: SubCategory; // {id:"23412klfds",name:{en:"",ar:""}, cat_id:"124123"}
  private price!: number; // 2000
  private description!: MultiLingualName; // {en:"",ar:""}
  private image!: Image;// ["jlskdfjas","lkdsfj","jlsakdfj"]
  private country!:string;
  private currency!:string;
  public abstract getRequiredFields(): any;

  // Initiating the item attributes.
  constructor() { }

  public getCategory=()=>{
    return this.category;
  }

  public getSubCategory=()=>{
    return this.subCategory;
  }


  public getChildSubCat = () =>{
    return this.childSubCat;
  }

  /**
   * SET THE CATEGORY
   * @param category Icategory
   */
  protected setCategory=(category:Icategory)=>{
    console.log("SET ++ CATEGORY: ", category);
    this.category = new Category(category);
  }
  
  /**
   * SETS THE SUB CATEGORY OF CATEGORY
   * @param subCategory IsubCategory
   */
  protected setSubCategory=(subCategory:IsubCategory)=>{
    console.log("SET ++ SUB CATEGORY: ", subCategory);
    this.subCategory = new SubCategory(subCategory);
  }

  /**
   * SETS THE CHILD CATEGORY OF SUB CATEGORY.
   * @param subCatChild IchildSubCat
   */
  protected setSubCatChild=(subCatChild:IchildSubCat)=>{
    console.log("SET ITEM ++ ",subCatChild)
    this.childSubCat = new ChildSubCategory(subCatChild);
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
  protected setItemDescription = (lang:string,description:string): void => {
    this.description.setName(lang,description);
  };

  /**
   * SET ITEM NAME WITH SPECIFIC ITEM NAME.
   * @param lang string e.g en ar
   * @param itemName string
   */
  protected setItemTitle = (lang: string, itemName: string): void => {
    this.title = new MultiLingualName(lang,itemName);
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
  protected setImages = (images: Image) => {
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
  public getItemLowQualityImages = (): string[] => {
    return this.image.getLowQualityImages();
  };

   /**
   * GET ITEM IMAGES.
   * @returns string[]
   */
    public getItemHighQualityImages = (): string[] => {
      return this.image.getHighQualityImages();
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
    return `${this.childSubCat.getName("en")}_${this.category.getId()}`;
  }

  /**
   * 
   * @param name name of the country
   */
  protected setCountry = (name:string) => {
    this.country = name;
  }

    /**
   * 
   * @param name name of the country
   */
     protected setCurrency = (name:string) => {
      this.currency = name;
    }

  /**
   * 
   * @returns name of the country
   */
  public getCountry = ():string =>{
    return this.country;
  }

}