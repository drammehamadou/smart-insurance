import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
import {TooltipModule} from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { CategoriesService } from '@smart-insurance/products';
import { HttpClientModule } from '@angular/common/http';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: ShellComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'categories', component: CategoriesListComponent },
    { path: 'categories/form', component: CategoriesFormComponent },
    { path: 'categories/form/:id', component: CategoriesFormComponent },
    { path: 'packages', component: ProductsListComponent },
    { path: 'packages/form', component: ProductsFormComponent },
    { path: 'products/form/:id', component: ProductsFormComponent }
  ] 
},
 
]

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    ShellComponent, 
    SidebarComponent, 
    CategoriesListComponent, 
    CategoriesFormComponent, ProductsFormComponent, ProductsListComponent, UsersFormComponent, UsersListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    ConfirmDialogModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    ToastModule,
    InputTextModule,
    ColorPickerModule,
    FormsModule, 
    ReactiveFormsModule,
    TooltipModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    InputSwitchModule,
    EditorModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [CategoriesService,
    ConfirmationService, MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
