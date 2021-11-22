import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  initCartLocalStorage() {
    const intialCart = {
      // @ts-ignore
      items: [] 
    }
    const intialCartJson =JSON.stringify(intialCart)
    localStorage.setItem('cart', intialCartJson)
  }
}
