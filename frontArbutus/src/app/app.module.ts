import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArbutusComponent } from './components/arbutus/arbutus.component';

@NgModule({
  declarations: [
    AppComponent,
    ArbutusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
