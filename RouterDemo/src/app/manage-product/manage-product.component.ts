import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  productList: Product[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (productList: Product[])=>{
        this.productList = productList;
      }
    )
  }

}
