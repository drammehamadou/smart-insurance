import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@smart-insurance/products';

@Component({
  selector: 'smart-insurance-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
