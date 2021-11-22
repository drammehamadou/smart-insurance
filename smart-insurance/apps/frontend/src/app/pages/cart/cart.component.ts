import { Component, OnInit } from '@angular/core';
import { CartService } from '@smart-insurance/orders';

@Component({
  selector: 'smart-insurance-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  packages = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
