import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiplicationTableComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
