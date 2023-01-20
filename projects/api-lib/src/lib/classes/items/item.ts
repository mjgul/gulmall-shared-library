import { throwError } from "rxjs";
import { Iname } from "../../interfaces/name";
import { Payable } from "../../interfaces/payable";
import { ThisReceiver } from "@angular/compiler";

export abstract class Item implements Payable {
  private title: Iname;
  private id: string;
  private categoryId: string;
  private subCategoryId: string;
  private price: number;
  private categoryName: Iname;
  private subCategoryName: Iname;
  private childSubCategoryName: Iname;
  private description: Iname;
  private image: string[];

  public abstract getRequiredFields(): any;

  // Initiating the item attributes.
  constructor() { 
    this.title = {en:"no_title",ar:"no_title"}
    this.description = {en:"no_description",ar:"no_description"}
    this.id = "no_id"
    this.categoryId="no_cat_id"
    this.subCategoryId="no_sub_category_id"
    this.price=0
    this.categoryName={en:"no_category_name",ar:"no_category_name"}
    this.subCategoryName={en:"no_sub_category_name",ar:"no_sub_category_name"}
    this.childSubCategoryName={en:"no_item_name",ar:"no_item_name"}
    this.image=[];
  }

  // GET ITEM NAME MULTILINGUAL.
  public getItemName = (): Iname => {
    return this.title;
  };

  /**
   * SETS THE ITEM ID. WHICH IS CHILD SUB CAT ID.
   * @param id string
   */
  public setItemId = (id: string): void => {
    if (id != null || id != undefined || id != "") {
      this.id = id;
    } else {
      throwError(() => {
        Error("Could not found Item id");
      });
    }
  };

  /**
   * SETS THE ITEM CATEGORY ID.
   * @param categoryId string
   */
  public setItemCatId = (categoryId: string): void => {
    if (categoryId != null || categoryId != undefined || categoryId != "") {
      this.categoryId = categoryId;
    } else {
      throwError(() => {
        Error("Could not found Item catId");
      });
    }
  };

  /**
   * SET ITEM CATEGORY NAME WITH SPECIFIC LANGUAGE.
   * @param lang string e.g en ar
   * @param categoryName string
   */
  public setItemCategoryName = (lang: string, categoryName: string): void => {
    switch (lang) {
      case "en":
        this.categoryName.en = categoryName;
        break;
      case "ar":
        this.categoryName.ar = categoryName;
    }
  };

  /**
   * SET ITEM SUB CATEGORY NAME WITH SPECIFIC LANGUAGE.
   * @param lang string e.g en ar
   * @param subCategoryName string
   */
  public setItemSubCategoryName = (
    lang: string,
    subCategoryName: string
  ): void => {
    switch (lang) {
      case "en":
        this.subCategoryName.en = subCategoryName;
        break;
      case "ar":
        this.subCategoryName.ar = subCategoryName;
    }
  };

  /**
   * SET ITEM SUB CATEGORY CHILD NAME WITH SPECIFIC LANGUAGE.
   * @param lang string e.g en ar
   * @param subCatChildName string
   */
  public setItemSubCategoryChildName = (
    lang: string,
    subCatChildName: string
  ): void => {
    switch (lang) {
      case "en":
        this.childSubCategoryName.en = subCatChildName;
        break;
      case "ar":
        this.childSubCategoryName.ar = subCatChildName;
    }
  };

  /**
   * SETS THE ITEM SUB CATEGORY ID.
   * @param subCategoryId string
   */
  public setItemSubCatId = (subCategoryId: string): void => {
    if (
      subCategoryId != null ||
      subCategoryId != undefined ||
      subCategoryId != ""
    ) {
      this.subCategoryId = subCategoryId;
    } else {
      throwError(() => {
        Error("Could not found Item subCategoryId");
      });
    }
  };

  /**
   * SETS THE ITEM PRICE CATEGORY ID.
   * @param price number
   */
  public setItemPrice = (price: number): void => {
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
  public setItemDescription = (lang:string,description: Iname): void => {
    switch (lang) {
      case "en":
        this.description.en = description.en;
        break;
    
        case "ar":
          this.description.ar = description.ar;
        break;
    }
  };

  /**
   * SET ITEM NAME WITH SPECIFIC ITEM NAME.
   * @param lang string e.g en ar
   * @param itemName string
   */
  public setItemName = (lang: string, itemName: string): void => {
    switch (lang) {
      case "en":
        this.title.en = itemName;
        break;
      case "ar":
        this.title.ar = itemName;
    }
  };

  /**
   * GET ITEM PRICE
   * @return Number
   *  */
  public getItemPrice = (): number => {
    return this.price;
  };

  /**
   * Get item Id
   * @returns string or empty string.
   */
  public getItemId = (): string => {
    return this.id || "";
  };

  /**
   * TAKE ARRAY OF STRING AND SET IT IN OBJECT
   * @param images array of string[]
   * @returns  array of string string[]
   */
  public setImages = (images: string[]): string[] => {
    this.image = images;
    return this.image;
  };

  /**
   * GET ITEM CATEGORY
   * @returns string
   */
  public getItemCategoryId = (): string => {
    return this.categoryId;
  };

  /**
   * GET ITEM SUB CATEGORY ID
   * @returns string
   */
  public getItemSubCategoryId = (): string => {
    return this.subCategoryId;
  };

  /**
   * GET ITEM DESCRIPTION
   * @returns string
   */
  public getItemDescription = (): Iname => {
    return this.description || {en:"No description.",ar:"No description."};
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
  }

  /**
   * GET ITEM IDENTITY.
   * @return string
   */
  public itemBluePrint() {
    return `${this.getItemName().en}_${this.id}`;
  }
}
