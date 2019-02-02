import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {

       appURL: string = 'http://localhost:3000/product';
       httpHeaders : HttpHeaders = new HttpHeaders();
       constructor(private httpClient: HttpClient){} 

       getProductList():Observable<Product[]>{
          this.httpHeaders = new HttpHeaders(
               {
               "Authorization" : 'Bearer '+sessionStorage.getItem("token")
               }
          );
          return this.httpClient.get<Product[]>(this.appURL,{headers : this.httpHeaders}); 
       }
       getProductById(id:number):Observable<Product>{          
          this.httpHeaders = new HttpHeaders(
               {
               "Authorization" : 'Bearer '+sessionStorage.getItem("token")
               }
          );
          return  this.httpClient.get<Product>(this.appURL+"/"+id,{headers: this.httpHeaders}); 
       } 

       saveProductWithHttpClient(product:Product):Observable<number> {
               this.httpHeaders = new HttpHeaders(
                    {
                    "Authorization" : 'Bearer '+sessionStorage.getItem("token")
                    }
               );
            return this.httpClient.post<number>(this.appURL,product,{headers : this.httpHeaders});
       }

       updateProduct(product:Product):Observable<number>{
          this.httpHeaders = new HttpHeaders(
               {
               "Authorization" : 'Bearer '+sessionStorage.getItem("token")
               }
          );
            return this.httpClient.put<number>(this.appURL+"/"+product.id,product,{headers : this.httpHeaders});
       }

       deletProductById(id:number):Observable<Response>{
          this.httpHeaders = new HttpHeaders(
               {
               "Authorization" : 'Bearer '+sessionStorage.getItem("token")
               }
          );
            return this.httpClient.delete<Response>(this.appURL+"/"+id,{headers : this.httpHeaders});
       }

}