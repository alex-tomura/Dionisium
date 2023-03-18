import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  protected URL:string = environment.url_api._update || '';

  constructor(private http:HttpClient) { }

  updateViewing(body:object){
    this.http.post<any>(this.URL + '/update/serie/viewing', body).subscribe();
  }
}
