import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductEntryComponent } from './product/product-entry/product-entry.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes : Routes = [
    {path: '', redirectTo: 'home' ,pathMatch : 'full'},         
      {path: 'home',component : HomeComponent},
      {path: 'aboutus',component : AboutUsComponent},
      {path: 'contactus',component : ContactUsComponent},      
      {
        path: 'newproduct',component : ProductEntryComponent
      },
      {
        path: 'newproduct/:id',component : ProductEntryComponent
      },
      {path: 'signin',component : LoginComponent},           
      {path: 'signout',component : LogoutComponent},           
      {path: '**', component : PageNotFoundComponent}     
];

@NgModule({
    imports :[ RouterModule.forRoot(routes)],
    exports :[ RouterModule ]  
})
export class AppRoutingModule{
}