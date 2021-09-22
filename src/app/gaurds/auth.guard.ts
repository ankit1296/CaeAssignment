import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IStorageData } from '../interfaces/storage.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const storageData = localStorage.getItem('app');
    const userData: IStorageData = storageData
      ? JSON.parse(storageData)
      : undefined;
    if (userData && userData.user && userData.user.loginTime) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
