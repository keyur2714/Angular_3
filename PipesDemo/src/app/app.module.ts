import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { StatusConvertPipe } from './status-convert.pipe';
import { LoopPipe } from './loop.pipe';
import { TestService } from './test-service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    StatusConvertPipe,
    LoopPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
