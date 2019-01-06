import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { ProductService } from './manage-product/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ManageProductComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([   
      {path: '', redirectTo: 'home' ,pathMatch : 'full'},   
      {path: 'home',component : HomeComponent},
      {path: 'aboutus',component : AboutUsComponent},
      {path: 'contactus',component : ContactUsComponent},
      {
        path: 'manageproduct',component : ManageProductComponent,
        children: [
          { path: 'productDetail/:id' ,component : ProductDetailComponent}
        ]
      },
      {
        path: 'newproduct',component : ProductEntryComponent
      },
      {
        path: 'newproduct/:id',component : ProductEntryComponent
      }
      ,      
      {path: '**', component : PageNotFoundComponent}     
    ]
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
