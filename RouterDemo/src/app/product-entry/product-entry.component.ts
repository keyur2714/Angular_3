import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../manage-product/product.model';
import { ProductService } from '../manage-product/product.service'; 
@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  newProduct : Product = new Product();
  statusCode: string = '';
  isUpdate: boolean = false;  
  productId : number = 0;

  constructor(private location:Location,private productService:ProductService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        console.log(params);
         if(params.id === '')
            this.productId = 0;
         else{
            this.productId = params.id;
            if(this.productId > 0){
              this.productService.getProductById(this.productId).subscribe(
                (existingProduct: Product)=>{
                  this.newProduct = existingProduct;
                }
              )
            }
         }
           
      }
    )
  }

  back():void{
    this.location.back();
  }

  update(){    
      if(this.newProduct.warranty){
        this.newProduct.warranty = "Y";
      }else{
        this.newProduct.warranty = "N";
      }            
      this.productService.updateProduct(this.newProduct).subscribe(
        (data: number)=>{
          console.log(data);
          this.statusCode = "201";          
        },
        (error)=>{

        }
      )                
  }
  saveOrUpdate(frm):void{    
        if(frm.valid){
          if(this.newProduct.warranty){
            this.newProduct.warranty = "Y";
          }else{
            this.newProduct.warranty = "N";
          }      
            this.productService.saveProductWithHttpClient(this.newProduct).subscribe(
              (data: number)=>{
                console.log(data);
                this.statusCode = "200";            
              },
              (error)=>{

              }
            )            
        }  
    }
}
