import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RectComponent } from './rect.componet';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,RectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

