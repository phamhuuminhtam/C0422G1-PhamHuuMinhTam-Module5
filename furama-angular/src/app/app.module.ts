import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityAddComponent } from './facility/facility-add/facility-add.component';
import { FacilityDetailComponent } from './facility/facility-detail/facility-detail.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRootingModule} from "./app-rooting.module";

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityAddComponent,
    FacilityDetailComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule,
      AppRootingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
