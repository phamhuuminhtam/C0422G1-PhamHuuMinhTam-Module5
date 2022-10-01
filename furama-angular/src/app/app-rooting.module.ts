import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";


const routes: Routes = [
  {path: 'customer-rest', component: CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRootingModule { }
