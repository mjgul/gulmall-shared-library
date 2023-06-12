export interface itemInterface {
   ID: string
   parentId: string
   hasDimension: boolean
   publicId: number
   name: string
   feature: Feature[]
   images: Image[]
   category: Category
   sub_category: SubCategory
   gender: string
   price: number
   qty: number
   remaining_qty: number
   status: string
   color: Color[]
   size: Size[]
   ownerName: string
   title: string
   country: string
   currency: string
   Plan: Plan
   dimension: Dimension
 }
 
 export interface Feature {
   name: string
 }
 
 export interface Image {
   image: string
   color: string
 }
 
 export interface Category {
   ID: string
   name: string
   gender_flag: boolean
   icon: string
 }
 
 export interface SubCategory {
   ID: string
   name: string
   icon: string
 }
 
 export interface Color {
   ID: string
   cssHex: string
   name: string
 }
 
 export interface Size {
   ID: string
   name: string
 }
 
 export interface Plan {
   name: string
   order: number
 }
 
 export interface Dimension {
   length: Length
   width: Width
 }
 
 export interface Length {
   unit: string
   value: number
 }
 
 export interface Width {
   unit: string
   value: number
 }
 