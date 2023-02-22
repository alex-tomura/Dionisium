import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {
  private URL:string = environment.url_api;

  constructor(private http:HttpClient) { }

  getProject(body:object){
    return this.http.post<any>(this.URL + '/get/serie', body);
  }

  getLanguage(body:object){
    return this.http.post<any>(this.URL + '/get/language', body);
  }

  getSeason(body:object){
    return this.http.post<any>(this.URL + '/get/season', body);
  }

  getChapter(body:object){
    return this.http.post<any>(this.URL + '/get/chapter', body);
  }

  getSearch(body:object){
    return this.http.post<any>(this.URL + '/get/search', body);
  }

  updateViewing(body:object){
    this.http.post<any>(this.URL + '/update/serie/viewing', body).subscribe();
  }
}
