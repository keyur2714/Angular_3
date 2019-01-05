import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {

       appURL: string = 'http://localhost:3000/product';

       constructor(private httpClient: HttpClient){} 

       getProductList():Observable<Product[]>{
            return this.httpClient.get<Product[]>(this.appURL); 
       }
       getProductById(id:number):Observable<Product>{
        return  this.httpClient.get<Product>(this.appURL+"/"+id); 
       } 
}