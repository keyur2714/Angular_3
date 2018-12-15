import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
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
}
