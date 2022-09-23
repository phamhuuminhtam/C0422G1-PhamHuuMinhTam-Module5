import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CustomerAddComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
