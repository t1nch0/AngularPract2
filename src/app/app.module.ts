import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { DirectivapractDirective } from './directivas/directivapract.directive';



@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Prueba2Component,
    DirectivapractDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
