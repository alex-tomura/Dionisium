import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/_auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{
  @Output() changeSing = new EventEmitter();
  body = {
    name:'',
    email:'',
    password:''
  }

  constructor(private auth_service:AuthService) { }

  signup(){
    this.auth_service.signup(this.body);
  }

  singChange(){
    this.changeSing.emit('signin');
  }
}
