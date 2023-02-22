import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthHandler } from '../handlers/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _service:AuthHandler){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let status:any = localStorage.getItem('status');
    if(status == 'bszof=gpt=msbohsyr'){
      return true;
    }
    else{
      this._service.when_click.next({status:true, auth:'signup'});
      return true;
    }
  }
  
}
