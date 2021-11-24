import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '@smart-insurance/orders';
import { ProductsService, Product } from '@smart-insurance/products';
import {SelectItem} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smart-insurance-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
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


}
