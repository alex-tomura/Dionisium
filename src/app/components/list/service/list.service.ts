import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  protected URL:string = process.env['url_api'] || '';

  constructor(private http:HttpClient){}

  getList(){
    return this.http.get<any>(this.URL + '/get/series');
  }

  getViewing(){
    return this.http.post<any>(this.URL + '/get/viewing', {token:localStorage.getItem('token')});
  }

  updateViews(body:any){
    this.http.post<any>(this.URL + '/update/serie/views', body).subscribe();
  }
}
