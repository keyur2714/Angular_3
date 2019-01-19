import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductComponent } from '../product/manage-product/manage-product.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';
const routes : Routes = [
      {
        path: 'manageproduct',component : ManageProductComponent,canActivate: [AuthGuard],
        children: [
          { path: 'productDetail/:id' ,component : ProductDetailComponent}
        ]
      },
];
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule{

}