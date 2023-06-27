import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AuthHandler } from 'src/app/handlers/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  status:boolean = false;
  auth:string = 'signup';
  change:boolean = false;

  private _subs:Subscription = new Subscription();
  constructor(private _auth_handler:AuthHandler, private _router:Router) { }

  ngOnInit(): void {
    this._auth_handler.when_click.subscribe(data => {
      this.status = data.status;
      this.auth = data.auth;
    });
    this._subs = this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event:any)=>{
      if(this._router.url == '/home' || this._router.url == '/list'){this.change = true}
      else{this.change = false}
    });
  }

  appear(value:string){
    this.auth = value;
    this.status = true;
  }

  close(){
    if(this.change == true){
      this.status = false;
    }
  }

  changeSing(value:string){
    this.auth = value;
  }
}
