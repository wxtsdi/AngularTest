import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RectComponent } from './rect.componet';
import { FormsModule } from '@angular/forms';
import { backgroundChangeDirective,changeBackgroundDirective } from './backgroundChange.directive';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,RectComponent,backgroundChangeDirective,changeBackgroundDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

