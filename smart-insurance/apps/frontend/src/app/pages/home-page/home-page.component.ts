import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@smart-insurance/products';

@Component({
  selector: 'smart-insurance-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}

