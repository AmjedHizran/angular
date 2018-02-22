import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ComponentsService } from './services/app.components.service';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ComponentsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
