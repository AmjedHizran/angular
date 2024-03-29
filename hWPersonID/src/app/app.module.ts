import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import { AppComponent } from './app.component';
import { ArrPersonComponent } from './arr-person/arr-person.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
