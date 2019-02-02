import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { ProductServiceWithNoHeader } from './product.service.withnoheader';
@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  productList: Product[] = [];
  statusCode: string = '';
  
  constructor(private productService: ProductServiceWithNoHeader,private router:Router) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails():void{
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

  delete(id):void{
    let confirmMsg = confirm("Are you sure want to delete product?");
    if(confirmMsg){
      this.productService.deletProductById(id).subscribe(
        (data)=>{                    
          this.statusCode = "204";          
          this.getProductDetails();
        },(error)=>{}
      )
    }
  }
}
