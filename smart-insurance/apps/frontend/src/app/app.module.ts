import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UiModule } from '@smart-insurance/ui';

import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contactus', component: ContactusComponent },
  {path: 'packages', component: ProductListComponent}
]

@NgModule({
  declarations: [AppComponent, 
    HomePageComponent, 
    ProductListComponent, 
    ProductFormComponent, 
    ContactusComponent, 
    AboutusComponent, 
    HeaderComponent, 
    FooterComponent, 
    NavComponent, NewsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    UiModule,
    DataViewModule,
    RatingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
