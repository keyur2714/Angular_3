import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NumericoperationsComponent } from './numericoperations/numericoperations.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NumericoperationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
