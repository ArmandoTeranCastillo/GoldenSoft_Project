import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserVigilanteGuard implements CanActivate {
  private role;

  constructor(private router: Router){
    this.role = localStorage.getItem('role');
    console.log(this.role);
  }

  redirect(cookie: boolean): boolean{
    if(cookie == false){
      this.router.navigate(['/', 'login']);
      return false;
      }else{
      return true;
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
