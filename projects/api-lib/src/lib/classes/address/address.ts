
export class Address {
  private country: string = "";
  private state: string = "";
  private city: string = "";
  private addressLabelName: string = "";
  private addressLineOne: string = "";
  private addressLinetwo: string = "";
  private postalCode: string = "";

  constructor() {}

  protected setCountry = (country: string) => {
    this.country = country;
  };
  protected setAddressLabelName = (addressLabel: string) => {
    this.addressLabelName = addressLabel;
  };
  protected setAddressLineOne = (addressLineOne: string) => {
    this.addressLineOne = addressLineOne;
  };
  protected setAddressLinetwo = (addressLinetwo: string) => {
    this.addressLinetwo = addressLinetwo;
  };
  protected setState = (state: string) => {
    this.state = state;
  };
  protected setCity = (city: string) => {
    this.city = city;
  };
  protected setPostalCode = (postalCode: string) => {
    this.postalCode = postalCode;
  };
  /**
   * Adds the new address to collection
   * @param userId
   */
  protected saveAddress = (userId: string) => {
    if (this.validateAddress()) {
      // make the api call.
      
    } else {
      // throw error.
    }
  };

  protected validateAddress = (): boolean => {
    if (
      this.country != "" &&
      this.state != "" &&
      this.city != "" &&
      this.addressLabelName != "" &&
      this.addressLineOne != "" &&
      this.addressLinetwo != "" &&
      this.postalCode != ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  public getCountry = (): string => {
    return this.country;
  };
  public getAddressLabelName = () => {
    return this.addressLabelName;
  };
  public getAddressLineOne = () => {
    return this.addressLineOne;
  };
  public getAddressLinetwo = () => {
    return this.addressLinetwo;
  };
  public getState = () => {
    return this.state;
  };
  public getCity = () => {
    return this.city;
  };
  public getPostalCode = () => {
    return this.postalCode;
  };
}
