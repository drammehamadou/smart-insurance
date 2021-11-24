import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
// import { CartService } from '..';
import { ButtonModule } from 'primeng/button';

export const ordersRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, ButtonModule],
})
export class OrdersModule {
  // constructor(cartService: CartService) {
  //   cartService.initCartLocalStorage();
  // }
}
