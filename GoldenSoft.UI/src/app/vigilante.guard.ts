import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router){}

  redirect(cookie: boolean): any{
    if(cookie == false){
      this.router.navigate(['/', 'login']);
    }
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = localStorage.getItem('token') ? true : false;
    console.log(cookie);
    this.redirect(cookie);
      return cookie;
  }
  
}
