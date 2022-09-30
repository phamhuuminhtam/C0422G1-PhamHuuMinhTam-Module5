import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from './dictionary-exercis/dictionary/dictionary.component';
import {DictionaryDetailComponent} from './dictionary-exercis/dictionary-detail/dictionary-detail.component';
import {ProductCreateComponent} from './product-management/product/product-create/product-create.component';
import {ProductListComponent} from './product-management/product/product-list/product-list.component';
import {ProductUpdateComponent} from './product-management/product/product-update/product-update.component';


const routes: Routes = [
  {path: "", component: DictionaryComponent},
  {path:":word", component: DictionaryDetailComponent},
  {path: 'product/list',component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/update/:id', component: ProductUpdateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
