import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent{
  @Output() changeSing = new EventEmitter();
  body = {
    email:'',
    password:''
  }

  constructor(private auth_service:AuthService) { } 

  singin(){
    this.auth_service.signin(this.body);
  }

  withGoogle(){
    this.auth_service.withGoogle();
  }

  singChange(){
    this.changeSing.emit('signup');
  }
}
