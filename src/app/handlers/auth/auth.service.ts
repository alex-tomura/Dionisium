import { Injectable, OnInit } from '@angular/core';
import { auth_v_model } from 'src/app/models';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHandler {

  constructor() { }

  private auth_validator = new Subject<auth_v_model>();
  public when_click = new Subject<any>();

  next(value:auth_v_model){
    this.auth_validator.next(value);
    localStorage.setItem('token' , value.token);
    localStorage.setItem('status', 'bszof=gpt=msbohsyr');
    this.when_click.next({status:false})
  }

  getSubject(){
    return this.auth_validator;
  }
}
