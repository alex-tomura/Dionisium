import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SerieHandler } from '../handlers/serie/serie.service';

@Injectable({
  providedIn: 'root'
})
export class SaveVideoGuard implements CanDeactivate<unknown> {
  constructor(public _service:SerieHandler){};
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._service.save();
    return true;
  }
  
}
