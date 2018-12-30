import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ManageProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home',component : HomeComponent},
      {path: 'aboutus',component : AboutUsComponent},
      {path: 'contactus',component : ContactUsComponent},
      {path: 'manageproduct',component : ManageProductComponent}
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
