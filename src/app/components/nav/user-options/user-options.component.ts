import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/_auth/auth.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent {
  @Input() selected:any;
  icons = ['deku', 'dabi'];
  body = {
    token:localStorage.getItem('token'),
    avatar:''
  }

  constructor(private _auth_service:AuthService) { }

  change(value:string){
    this.body.avatar = value;
    this.selected = value;
    this._auth_service.changeAvatar(this.body);
  }

  logout(){
    localStorage.clear();
    window.location.reload();
  }
}
