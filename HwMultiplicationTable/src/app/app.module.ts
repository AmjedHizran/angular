import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { PepoleInfoComponent } from './pepole-info/pepole-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiplicationTableComponent,
    PepoleInfoComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
