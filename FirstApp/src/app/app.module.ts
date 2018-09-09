import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { FailureMsgComponent } from './failure-msg/failure-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessMsgComponent,
    FailureMsgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Object Created...");
  }
  
}
