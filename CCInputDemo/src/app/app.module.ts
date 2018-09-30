import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CustomGridComponent } from './custom-grid/custom-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ItemListComponent,
    CustomGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
