import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from './services/_auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dionisium';
  token = localStorage.getItem('token');
  touch:boolean = this.isTouch();
  background:string = '#00000000';

  constructor(private _auth_service:AuthService){}

  isTouch(){
    if(
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/i))
    ){
      return true;
    }
    return false;
  }

  ngOnInit(){
    if(this.token != ('' || null || undefined)){
      this._auth_service.decodedToken(this.token);
    }
    else{
      if(localStorage.getItem('status')){
        localStorage.removeItem('status');
      }
    }
  }
}