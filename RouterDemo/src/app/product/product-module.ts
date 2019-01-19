import { NgModule } from '@angular/core';
import { ManageProductComponent } from '../product/manage-product/manage-product.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductEntryComponent } from '../product/product-entry/product-entry.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
    declarations: [
        ManageProductComponent,        
        ProductDetailComponent,
        ProductEntryComponent   
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule
    ],
    providers: [
        AuthGuard
    ]

})
export class ProductModule{
}