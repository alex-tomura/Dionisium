import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {
  URL = 'http://localhost:3000/api'

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
