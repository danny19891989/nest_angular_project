import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGeneratorModule } from './form-generator/form-generator.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent],
  imports: [
    BrowserModule,
    CommonModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    FormGeneratorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
