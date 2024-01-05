import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AppStateService} from "../services/app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private appStateService:AppStateService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.appStateService.authentState.roles=="ADMIN") {
      return true;
    } else {

      return this.router.parseUrl('/home/unauthorized');
    }
  }
}
