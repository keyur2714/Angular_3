import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router){
        
    }

    canActivate(activatedRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapshot:RouterStateSnapshot):boolean{
        console.log("========="+activatedRouteSnapshot.url);
        this.router.navigate(['signin']);
        return false;
    }

}