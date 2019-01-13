import { Observable,of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
@Injectable()
export class AuthenticationService {

    appUrl:string = 'http://localhost:3000/users';
    authenticated : boolean = false;
    reDirectUrl: string = 'home';

    constructor(private httpClient:HttpClient){
    }

    authenticate(userName:string,password:string):Observable<User[]>{
        return this.httpClient.get<User[]>(this.appUrl);
    }

    setAuthenticated(authenticated: boolean):void{
        this.authenticated = authenticated;
    }

    setReDirectUrl(url:string){
        this.reDirectUrl = url;
    }

    getReDirectUrl():string{
        return this.reDirectUrl;
    }

    isAuthenticated():boolean{
        return this.authenticated;
    }

    signOut():void{
        this.setAuthenticated(false);        
    }

}