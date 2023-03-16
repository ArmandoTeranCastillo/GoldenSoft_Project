import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import LocalStore from 'devextreme/data/local_store';
import jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

  private role;

  constructor(private cookieService: CookieService, private router: Router){
    this.role = localStorage.getItem('role');
    console.log(this.role);
  }

  redirect(cookie: boolean): boolean{
    if(cookie == false){
      this.router.navigate(['/', 'login']);
      return false;
    }else{
      if(this.role != 'Admin'){
        this.router.navigate(['/', 'userhome']);
        return false;
      } else {
        return true;
      }   
    }
  }

  getUserRole(): string {
    const role = localStorage.getItem('role') ?? '';
    return role;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = localStorage.getItem('token')? true : false;
    return this.redirect(cookie);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
  
}
