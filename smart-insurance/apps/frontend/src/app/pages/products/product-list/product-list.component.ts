import { Component, Input, OnInit } from '@angular/core';
import { CartItem, CartService } from '@smart-insurance/orders';
import { ProductsService, Product, products } from '@smart-insurance/products';
import {SelectItem} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smart-insurance-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() product: Product;
  products: Product[] = [];
  sortOptions: SelectItem[] = [];
    sortOrder!: number;
    sortField!: string;
    
  constructor(private productsService: ProductsService,
              private cartService: CartService,
              private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
    
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your package has been added to the cart!');
  }

  // addProductToCart() {
  //   const cartItem: CartItem = {
  //     productId: this.product.id,
  //     quantity: 1
  //   };
  //   this.cartService.setCartItem(cartItem);
  // }

}
