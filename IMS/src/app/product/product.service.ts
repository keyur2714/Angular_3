import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private appURL : string = 'http://localhost:3000/product';

  constructor(private http:Http) { }

  getProductList():Observable<Response>{
    return this.http.get(this.appURL);
  }

  getProductById(id:number):Observable<Response>{
    return this.http.get(this.appURL+"/"+id);
  }

  saveProduct(product:Product):Observable<Response>{
    return this.http.post(this.appURL,product);
  }

  updateProduct(product:Product):Observable<Response>{
    return this.http.put(this.appURL+"/"+product.id,product);
  }

  deletProductById(id:number):Observable<Response>{
    return this.http.delete(this.appURL+"/"+id);
  }
}
