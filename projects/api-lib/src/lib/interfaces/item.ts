import { Iname } from './name';
import { Iimage } from './image';

export interface Iitem {
   /**
    * NAME OF THE ITEM WILL BE {en:"",ar:"",...}
    */
   name:Iname; 
   /**
    * THIS IS ACTUALLY SUB-CAT-CHILD-ID WHICH IS THE LAST ID.
    */
   id:string;
   /**
    * THIS IS CATEGORY ID, THE FIRST STEP.
    */
   cat_id:string;
   /**
    * IDENTIFICATION OF SUB-CATEGORY OF CATEGORY.
    */
   sub_cat_id:string;
   /**
    * THE DESCRIPTION ABOUT ITEM WHICH WILL BE TAKEN FROM SUB-CAT-CHILD OBJECT.
    */
   description: string;
   /**
    * PRICE IS HIGLY BASED ON INPUT (NPD).
    */
   price: number;
   /**
    * IMAGES IS HIGHLY BASED ON INPUT (NPD).
    */
   image?: Iimage[];
}