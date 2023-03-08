import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGeneratorModule } from './form-generator/form-generator.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormSelectionComponent } from './form-selection/form-selection.component';
import { FormMenuModule } from './form-menu/form-menu.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FormSelectionComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormGeneratorModule,
    FormMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
