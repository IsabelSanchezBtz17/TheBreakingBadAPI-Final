import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import StorageHelper from '../helpers/storage.helper';
import { Constants } from 'src/app/libs/constants.class';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(public authService: AuthService, private router: Router){
  }
 


canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
      console.log('A', this.authService.checkStatus())
   return Boolean(StorageHelper.getItem(Constants.auth))
 
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> |  Promise<boolean> | boolean {  
    
      if (Boolean(StorageHelper.getItem(Constants.auth))==true){
        console.log('L', this.authService.checkStatus())
        this.router.navigate(['home'])}
      
        

    return this.authService.checkStatus()
 
  }
}

