import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthInterCeptor implements HttpInterceptor{

    constructor(){}
    intercept(req : HttpRequest<any>,next: HttpHandler):Observable<any>{
        let token = sessionStorage.getItem("token");
        console.log("Inside Interceptor..."+token);
        if(token){
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            });
          }
        return next.handle(req).pipe(
            tap( 
                (data)=>{
                    console.log(data+" ========= Response");
                }
            )
        );
    }
}