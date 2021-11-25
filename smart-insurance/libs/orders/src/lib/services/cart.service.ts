// import { Injectable } from '@angular/core';
// import { Cart, CartPackage } from '../models/cart';

// export const CART_KEY = "cart"

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor() {}

//   initCartLocalStorage() {
//     const intialCart = {
//       // @ts-ignore
//       packages: []
//     }
//     const intialCartJson =JSON.stringify(intialCart)
//     localStorage.setPackage(CART_KEY, intialCartJson)
//   }

//   getCart() : Cart {
//     const cartJsonString: string = localStorage.getPackage(CART_KEY);
//     const cart: Cart = JSON.parse(cartJsonString);
//     return cart
//   }

//   setCartPackage(cartPackage: CartPackage) : Cart {
//     const cart = this.getCart();
//     cart.packages.push(cartPackage);
//     const cartJson =JSON.stringify(cart)
//     localStorage.setPackage(CART_KEY, cartJson)
//     return cart;
//   }
// }

import { Product } from '@smart-insurance/products';

export class CartService {
  packages: Product[] = [];

  addToCart(product: Product) {
    this.packages.push(product);
  }

  getPackages() {
    return this.packages;
  }

  clearCart() {
    this.packages = [];
    return this.packages;
  }

}