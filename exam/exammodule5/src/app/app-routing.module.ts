import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';
import {AddComponent} from './add/add.component';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'add', component: AddComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
