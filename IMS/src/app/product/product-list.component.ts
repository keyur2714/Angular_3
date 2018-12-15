import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Response } from '@angular/http';
import { Product } from './product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  selectedProduct: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (response : Response)=>{
        console.log(response);
        console.log(response.json());
        this.productList = response.json();
      },
      (error)=>{

      }
    );
  }

  getProductDetail(id:number):void{
    this.productService.getProductById(id).subscribe(
      (response:Response)=>{
        this.selectedProduct = response.json();
      },
      (error)=>{

      }
    )
  }
}
