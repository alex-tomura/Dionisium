import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AuthHandler } from 'src/app/handlers/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() event = new EventEmitter();
  position:number = 0;
  status:boolean = false;
  auth_status:boolean = false;
  avatar:string = 'deku';
  background:string = '#000000';

  private _subs:Subscription = new Subscription();
  constructor(private _auth_handler:AuthHandler, private _router:Router) { }

  ngOnInit(): void {
    this._subs = this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event:any)=>{
      if(this._router.url == '/home'){
        this.background = '#0f0324';
        this.event.emit({background:'#0f0324'});
      }else{
        this.background = '#000000';
        this.event.emit({background:'#00000000'});
      };

      if(this._router.url == '/home' || this._router.url == '/list'){this.position = 0}else
      if(this._router.url == '/serie/search'){this.position = (100 / 3)}else
      {this.position = (100 / 1.5)}
    });
    this._auth_handler.getSubject().subscribe((data:any)=>{
      if(data != undefined && data.token != undefined){
        this.auth_status = true;
        this.avatar = data.avatar;
      }
    });
  }

  
  appear(value:string){
    this._auth_handler.when_click.next({status:true, auth:value});
  }
}
