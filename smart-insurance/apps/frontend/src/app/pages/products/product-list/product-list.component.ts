import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '@smart-insurance/products';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'smart-insurance-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  sortOptions: SelectItem[] = [];
    sortOrder!: number;
    sortField!: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
