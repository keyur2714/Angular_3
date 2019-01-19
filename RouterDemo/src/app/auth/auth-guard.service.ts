import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router,private authenticationService:AuthenticationService){
        
    }

    canActivate(activatedRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapshot:RouterStateSnapshot):boolean{
        console.log("========="+routerStateSnapshot.url);        
        this.authenticationService.setReDirectUrl(routerStateSnapshot.url);
        if(this.authenticationService.isAuthenticated()){
            return true;
        }
        this.router.navigate(['/']);
        return false;        
    }

}