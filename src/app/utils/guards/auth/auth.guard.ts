import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { UserApi } from '../../api';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // constructor(private router: Router, private userApi: UserApi) { }
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      resolve(true);
      /* this.userApi.getCurrent({include : "roles"}).subscribe((user) => {
      if (this.userApi.isAuthenticated() && _.map(user.roles, 'name').includes('admin')) {
          resolve(true);
        }
        else {
          this.router.navigate(['login']);
          reject('Role');
        }
      }, () => {
        this.router.navigate(['login']);
        reject('Role');
      }) */
    })
  }
}
