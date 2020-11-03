import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SiteFrameworkModule } from './site-framework/site-framework.module';

import { CarrerasModule } from './carreras/carreras.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteFrameworkModule,
    CarrerasModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
