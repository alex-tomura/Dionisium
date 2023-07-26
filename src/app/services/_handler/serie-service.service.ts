import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Apollo } from 'apollo-angular';
import { get_cover, FWOV, get_search, get_recomendations } from './_apollo';

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {
  protected URL:string = environment.url_api._update || '';

  constructor(private apollo:Apollo, private http:HttpClient) { }

  GetSeries(data:any, type:string, mode:string, to:number, limit?:number){
    let query = get_cover(limit || 10, type, mode, to, data);
    console.log(query)
    return this.apollo.watchQuery({
      query:query
    }).valueChanges;
  }

  GetRecomendations(data:any, type:string, limit?:number){
    let query = get_recomendations(limit || 10, type, data);
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
    let query = FWOV('get_serie', {name:'id', value:id}, data);
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
