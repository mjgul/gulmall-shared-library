import {
  Icategory,
  IchildSubCat,
  IsubCategory,
} from "../../interfaces/category";
import { MultiLingualName } from "./name";

export class Category extends MultiLingualName {
  protected id!: string;
  protected icon!:string;
  constructor(category: Icategory) {
    console.log("CATEGORY ++ ", category);
    super(category.name);
    this.setId(category.id);
    this.setIcon(category.icon)
  }

   /**
   * Gives the icon
   * @returns string
   */
    public getIcon = () => {
      return this.icon;
    };

  /**
   * SET THE ID.
   * @param icon string
   */
      public setIcon = (icon:string) => {
        this.icon = icon;
      };

  /**
   * Gives the id
   * @returns string
   */
  public getId = () => {
    return this.id;
  };

  /**
   * SET THE ID.
   * @param id string
   */
  public setId = (id: string) => {
    this.id = id;
  };
}

export class SubCategory extends Category {
  catId:string;
  constructor(subCategory: IsubCategory) {
    super(subCategory);
    this.catId = subCategory.catId;
  }
}

export class ChildSubCategory extends Category {
  genderBased!: boolean;
  subCatId!:string;
  constructor(category: IchildSubCat) {
    super(category);
    this.subCatId = category.subCatId;
  }

  /**
   * SET THE STATUS OF CATEGORY IS GENDER BASED OR NOT.
   * @param isGenderBased boolean
   */
  public setGenderBased = (isGenderBased: boolean): void => {
    this.genderBased = isGenderBased;
  };

  /**
   * Is category gender based.
   * @returns boolean
   */
  public IsCategoryGenderBased() {
    return this.genderBased; // calculate total cost
  }
}
