import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Apollo } from 'apollo-angular';
import { get_cover, FWOV, get_search } from './_apollo';

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {
  protected URL:string = environment.url_api._update || '';

  constructor(private apollo:Apollo, private http:HttpClient) { }

  GetSeries(data:any, type:Array<number>, limit?:number){
    let query = get_cover(limit || 10, data, type);
    return this.apollo.watchQuery({
      query:query
    }).valueChanges;
  }

  GetViewing(data:any, token:any){
    let query = FWOV('get_viewing', {name:'token', value:token},  data);
    return this.apollo.watchQuery({
      query:query
    }).valueChanges;
  }

  GetProject(data:any, id:string){
    let query = FWOV('get_series', {name:'id', value:id}, data);
    return this.apollo.watchQuery({
      query:query
    }).valueChanges;
  }

  GetLanguage(data:any, id:string){
    let query = FWOV('get_language', {name:'id', value:id}, data);
    return this.apollo.watchQuery({
      query:query
    }).valueChanges;
  }

  GetSeasons(data:any, id:string){
    let query = FWOV('get_season', {name:'id', value:id}, data);
    return this.apollo.watchQuery({
      query:query
    }).valueChanges;
  }

  GetChapter(data:any, id:string){
    let query = FWOV('get_chapter', {name:'id', value:id}, data);
    return this.apollo.watchQuery({
      query:query
    }).valueChanges;
  }

  SearchQuery(data:any, chapters:number, series:number, search:string){
    let query = get_search(chapters, series, search, data);
    return this.apollo.watchQuery({
      query:query
    }).valueChanges;
  }

  updateViewing(body:object){
    this.http.post<any>(this.URL + '/update/serie/viewing', body).subscribe();
  }
}
