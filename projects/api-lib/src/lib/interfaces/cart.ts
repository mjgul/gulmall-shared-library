

export interface Icart {
    /**
     * Item mongodb id
     */
    item_id:string;
    /**
     * Item quantity which has 
     */
    quantity:number;
    /**
     * Discount if available
     * "10%"
     */
    discount:string;
    /**
     * Payment method id
     */
    payment_method:string;
    /**
     * User id for buyer
     */
    user_id:string;
    /**
     * Delivery status for order
     */
    delivery_status:string;
    /**
     * Merchant Id
     */
    seller_id:string;
    /**
     * Currency of item being sell
     */
    currency:string;
    /**
     * item's category id
     */
    category:string;
    /**
     * item's sub category id
     */
    sub_category:string;
    order_date:Date
}

export interface IClothingCart extends Icart {
       /**
     * Color id for item
     */
       color_id:string;
       /**
        * Size id of item
        */
       size_id:string;
  }

  export interface IFruitCart extends Icart {
    // No color_id or size_id needed
    weight_in_kg: string;  // Optional, in case fruits are sold by weight
    origin:string;
  }