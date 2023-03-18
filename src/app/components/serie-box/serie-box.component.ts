import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { language, seasons, serie } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-serie-box',
  templateUrl: './serie-box.component.html',
  styleUrls: ['./serie-box.component.scss']
})
export class SerieBoxComponent implements OnInit {
  body = {
    serie_id:<any>'',
  }
  serie:serie = {};
  language:language = {};
  season:seasons = {};
  episode:any = {};
  chapters:Array<any> = [];

  constructor(private _route:ActivatedRoute, private _service:SerieServiceService) {this.body.serie_id = this._route.snapshot.paramMap.get('id')}

  ngOnInit(): void {
    this._service.GetProject(`
      thumnail
      name
      description
      lenguages {
        id
        name
      }
    `, this.body.serie_id).subscribe((data:any)=>{
      this.serie = data.data.get_series;
      if(this.serie.lenguages?.[0]){
        this.selectLanguage(this.serie.lenguages?.[0]?.id || '');
      }
      console.log(this.serie.lenguages)
    });
  }

  selectLanguage(id:string){
    this._service.GetLanguage(`
      name
      seasons {
        id
      }
    `, id).subscribe((data:any) => {
      this.language = data.data.get_language;
      console.log(this.language);
      if(this.language.seasons && this.language.seasons.length > 0){
        this.selectSeason(1);
      }
    });
  }
  
  selectSeason(p:number){
    this._service.GetSeasons(`
      _id
      number
      chapters {
        duration
        name
        thumnail
        id
      }
    `, this.language.seasons?.[p - 1]?.id || '').subscribe((data:any) => {
      this.season = data.data.get_season;

      this.chapters = this.season.chapters?.sort((a:any, b:any) => {
        if(a.number > b.number){return 1;}
        if(a.number < b.number){return -1;}
        return 0;
      }) || [];

      this.episode = this.season.chapters?.[0] || this.serie;
    });
  }
}
