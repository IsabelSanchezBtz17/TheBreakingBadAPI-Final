import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(public authService: AuthService, private router: Router){
    console.group('servicio', this.authService);

  }
 
  checkStatus() : boolean{
  return this.authService.auth;
 }


canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {

   if (this.checkStatus()===false){
    this.router.navigate(['login'])
   }

   return this.checkStatus();
 
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> |  Promise<boolean> | boolean {  
    return this.authService.auth;
  }
}

