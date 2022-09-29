import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormRegisComponent} from './form-regis/form-regis.component';
import {Form2Component} from './form2/form2.component';
import {LoginUserComponent} from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegisComponent,
    Form2Component,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
