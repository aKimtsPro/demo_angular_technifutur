import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Page404Component } from './components/page404/page404.component';
import { ToDeleteComponent } from './components/to-delete/to-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Page404Component,
    ToDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
