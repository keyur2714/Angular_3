import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  productList: Product[] = [];
  
  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (productList: Product[])=>{
        this.productList = productList;
      }
    )
  }

  addNewProduct():void{
    this.router.navigate(['newproduct']);
  }
  
  edit(id):void{
    this.router.navigate(['newproduct',id]);
  }
}
