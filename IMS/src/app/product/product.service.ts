import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Product } from './product.model';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private appURL : string = 'http://localhost:3000/product';

  constructor(private http:Http,private httpClient:HttpClient) { }

  getProductList():Observable<Response>{
    return this.http.get(this.appURL);
  }

  getProductListWithMap():Observable<Product[]>{
    // return this.http.get(this.appURL).map(
    //   (response)=>{
    //     let body = response.json();
    //     return body;
    //   }
    // );

    return this.http.get(this.appURL)    
    .map(this.extractResponse)
    .catch(this.handleError);    
  }

  getProductListWithHttpClient():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.appURL);
  }

  getProductById(id:number):Observable<Response>{
    return this.http.get(this.appURL+"/"+id);
  }

  saveProduct(product:Product):Observable<Response>{
    return this.http.post(this.appURL,product);
  }

  saveProductWithHttpClient(product:Product):Observable<number> | Promise<number> {
    return this.httpClient.post<number>(this.appURL,product);
  }

  updateProduct(product:Product):Observable<number>{
    return this.http.put(this.appURL+"/"+product.id,product).map(this.extractResponse);
  }

  deletProductById(id:number):Observable<Response>{
    return this.http.delete(this.appURL+"/"+id);
  }

  extractResponse(response:Response):any{
    let body = response.json();
    return body;
  }

  handleError(response:any):any{
    return Observable.throw(response.json());
  }
}
