import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloCacBonTreComponent } from './hello-cac-bon-tre/hello-cac-bon-tre.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloCacBonTreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
