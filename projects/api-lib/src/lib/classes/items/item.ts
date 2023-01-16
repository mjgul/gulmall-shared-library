import { throwError } from "rxjs";
import { Iname } from "../../interfaces/name";
import { Payable } from "../../interfaces/payable";

export abstract class Item implements Payable {
  private title!: Iname;
  private categoryName!: Iname;
  private subCategoryName!: Iname;
  private childSubCategoryName!: Iname;
  private genderBased!: boolean;
  private id!: string;
  private categoryId!: string;
  private subCategoryId!: string;
  private price!: number;
  private description?: string;
  private image?: string[];

  public abstract getRequiredFields(): any;

  // Initiating the item attributes.
  constructor() { }

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
   * SET THE STATUS OF CATEGORY IS GENDER BASED OR NOT.
   * @param isGenderBased boolean
   */
  public setGenderBased = (isGenderBased: boolean): void => {
    this.genderBased = isGenderBased;
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
  public setItemDescription = (description: string): void => {
    if (description != null || description != undefined || description != "") {
      this.description = description;
    } else {
      throwError(() => {
        Error("Could not found Item setItemDescription");
      });
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
   * SETS CATEGORY AND RETURN OBJECT WITH RESPONSE STATUS AND MESSAGE.
   * @param categoryId
   * @returns
   */
  public setCategoryId = (categoryId: string): object => {
    this.subCategoryId = categoryId;
    return { status: true, message: "Sub category has been set." };
  };

  /**
   *  SETS SUB-CATEGORY AND RETURN OBJECT WITH RESPONSE STATUS AND MESSAGE.
   * @param subCatId
   * @returns @{ status: boolean, message:string}
   */
  public setSubCategoryId = (subCatId: string): object => {
    this.subCategoryId = subCatId;
    return { status: true, message: "Sub category has been set." };
  };

  /**
   * SETS SUB-CATEGORY AND RETURN OBJECT WITH RESPONSE STATUS AND MESSAGE.
   * @param childOfSubCategoryId
   * @returns  @{ status: boolean, message:string}
   */
  public setChildSubCategoryId = (childSubCategory: string): object => {
    this.subCategoryId = childSubCategory;
    return { status: true, message: "Child sub category has been set." };
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
  public getItemDescription = (): string => {
    return this.description || "";
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
   * Is category gender based.
   * @returns boolean
   */
  public IsCategoryGenderBased() {
    return this.genderBased; // calculate total cost
  }

  /**
   * GET ITEM IDENTITY.
   * @return string
   */
  public itemBluePrint() {
    return `${this.getItemName()}_${this.id}`;
  }
}
