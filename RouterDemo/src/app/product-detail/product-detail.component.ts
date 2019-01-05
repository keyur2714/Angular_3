import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../manage-product/product.model';
import { ProductService } from '../manage-product/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();
  productId: number = 0;

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.productId = params.id;
      }
    )

    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.productId = parseInt(paramMap.get('id'));
        console.log(this.productId);
        this.productService.getProductById(this.productId).subscribe(
         (product:Product)=>{
          console.log(product);
          this.product = product;
        }
        )
      }
    )

    
  } 

}
