import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
@Injectable()
export class ProductServiceWithNoHeader {

       appURL: string = 'http://localhost:3000/product';       
       constructor(private httpClient: HttpClient){} 

       getProductList():Observable<Product[]>{
          return this.httpClient.get<Product[]>(this.appURL); 
       }
       getProductById(id:number):Observable<Product>{          
          return  this.httpClient.get<Product>(this.appURL+"/"+id); 
       } 

       saveProductWithHttpClient(product:Product):Observable<number> {               
            return this.httpClient.post<number>(this.appURL,product);
       }

       updateProduct(product:Product):Observable<number>{          
            return this.httpClient.put<number>(this.appURL+"/"+product.id,product);
       }

       deletProductById(id:number):Observable<Response>{
            return this.httpClient.delete<Response>(this.appURL+"/"+id);
       }

}