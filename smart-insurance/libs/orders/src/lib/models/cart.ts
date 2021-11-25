export class Cart {
  packages?: CartPackage[];
  }
  
  export class CartPackage {
    productId?: string;
    quantity?: number;
  }
  
  export class CartPackageDetailed {
    product?: any;
    quantity?: number;
  }