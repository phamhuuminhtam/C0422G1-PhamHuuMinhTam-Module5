import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { AngularColorPickerAppComponent } from './component/color-picker/angular-color-picker-app/angular-color-picker-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CalculatorComponent,
    AngularColorPickerAppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
