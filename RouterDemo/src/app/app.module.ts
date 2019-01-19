import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { ProductService } from './product/manage-product/product.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './auth/authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product-module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,    
    PageNotFoundComponent,        
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    FormsModule,
    ProductModule,
    AppRoutingModule,
  ],
  providers: [ProductService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
