import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AuthHandler } from '../../handlers/auth/auth.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected URL:string = environment.url_api._auth || '';
  constructor(private http:HttpClient, private handler:AuthHandler, private fireAuth:AngularFireAuth) { }

  signin(body:object){
    this.http.post<any>(this.URL + '/signin', body).subscribe(data => {
      this.handler.next(data);
    });
  }

  signup(body:object){
    this.http.post<any>(this.URL + '/signup', body).subscribe(data => {
      this.handler.next(data);
    });
  }

  async withGoogle(){
    const data = await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if(data.user){
      this.http.post<any>(this.URL + '/withGoogle', {email:data.user.email, id:data.user.uid, name:data.user.displayName}).subscribe(data => {
        this.handler.next(data);
      });
      console.log('d')
    }
    console.log('s')
  }

  decodedToken(token:string){
    this.http.post<any>(this.URL + '/verify', {token:token}).subscribe(data => {
      this.handler.next(data);
      return data;
    });
  }

  changeAvatar(body:Object){
    this.http.post<any>(this.URL + '/update/avatar', body).subscribe();
  }
}
