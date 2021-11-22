import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CartService } from '..';

export const ordersRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
})
export class OrdersModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage();
  }
}
