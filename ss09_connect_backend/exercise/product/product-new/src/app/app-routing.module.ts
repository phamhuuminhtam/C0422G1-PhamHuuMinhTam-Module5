import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDeleteComponent} from "./product-delete/product-delete.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {ProductListComponent} from "./product-list/product-list.component";


const routes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "create", component: ProductAddComponent},
  {path: "edit/:id", component: ProductEditComponent},
  {path: "delete", component: ProductDeleteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
