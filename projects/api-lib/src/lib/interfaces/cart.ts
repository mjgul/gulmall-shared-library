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
     * Color id for item
     */
    color_id?:string;
    /**
     * Size id of item
     */
    size_id?:string;
    /**
     * Discount if available
     * "10%"
     */
    discount:string;
    /**
     * Payment method id
     */
    payement_method:string;
    /**
     * Total Price of item
     */
    total_price:number;
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
     * how many items are remaining
     */
    items_remaining_quantity:number;
    /**
     * item's category id
     */
    category:string;
    /**
     * item's sub category id
     */
    sub_category:string;
}