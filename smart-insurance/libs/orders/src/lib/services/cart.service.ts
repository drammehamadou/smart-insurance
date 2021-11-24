// import { Injectable } from '@angular/core';
// import { Cart, CartItem } from '../models/cart';

// export const CART_KEY = "cart"

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor() {}

//   initCartLocalStorage() {
//     const intialCart = {
//       // @ts-ignore
//       items: []
//     }
//     const intialCartJson =JSON.stringify(intialCart)
//     localStorage.setItem(CART_KEY, intialCartJson)
//   }

//   getCart() : Cart {
//     const cartJsonString: string = localStorage.getItem(CART_KEY);
//     const cart: Cart = JSON.parse(cartJsonString);
//     return cart
//   }

//   setCartItem(cartItem: CartItem) : Cart {
//     const cart = this.getCart();
//     cart.items.push(cartItem);
//     const cartJson =JSON.stringify(cart)
//     localStorage.setItem(CART_KEY, cartJson)
//     return cart;
//   }
// }

import { Product } from '@smart-insurance/products';

export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}