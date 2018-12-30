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
  newProduct : Product = new Product();
  statusCode: string = '';
  isUpdate: boolean = false;  

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList():void{
    // this.productService.getProductList().subscribe(
    //   (response : Response)=>{
    //     console.log(response);
    //     console.log(response.json());
    //     this.productList = response.json();
    //   },
    //   (error)=>{

    //   }
    // );
    // this.productService.getProductListWithMap().subscribe(
    //   (productList : Product[])=>{
    //     console.log(productList);        
    //     this.productList = productList;
    //   },
    //   (error)=>{

    //   }
    // );
    this.productService.getProductListWithHttpClient().subscribe(
      (productList : Product[])=>{
        console.log(productList);        
        this.productList = productList;
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
          this.getProductList();
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
        this.productService.saveProduct(this.newProduct).subscribe(
          (data: Response)=>{
            console.log(data.json());
            this.statusCode = "200";
            this.getProductList();
          },
          (error)=>{

          }
        )            
    }
  }

  edit(id:number):void{
    this.isUpdate = true;
    this.productService.getProductById(id).subscribe(
      (response:Response)=>{
        this.newProduct = response.json();
        if(this.newProduct.warranty === 'Y')
          this.newProduct.warranty = 'true';
        else
          this.newProduct.warranty = 'false';
      },
      ()=>{

      }
    )
  }

  delete(id:number):void{
    let confirmMsg = confirm("Are you sure want to delete?");
    if(confirmMsg){
      this.productService.deletProductById(id).subscribe(
        (data:Response)=>{
          this.statusCode = "400";
          this.getProductList();
        }
      )
    }
  }
}
