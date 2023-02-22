import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieServiceService } from 'src/app/services/serie-service.service';

@Component({
  selector: 'app-serie-box',
  templateUrl: './serie-box.component.html',
  styleUrls: ['./serie-box.component.scss']
})
export class SerieBoxComponent implements OnInit {
  body = {
    serie_id:<any>'',
  }
  serie:any = {seasons:[]};
  language:any = {};
  season:any = {};
  episode:any = {};
  chapters:Array<any> = [];

  constructor(private _route:ActivatedRoute, private _service:SerieServiceService) {this.body.serie_id = this._route.snapshot.paramMap.get('id')}

  ngOnInit(): void {
    this._service.getProject(this.body).subscribe((data:any) => {
      this.serie = data.serie;
      if(data.serie.lenguages.length > 0){
        this.selectLanguage(data.serie.lenguages[0].id);
      }
    });
  }

  selectLanguage(id:any){
    this._service.getLanguage({id}).subscribe((data:any) => {
      this.language = data.language;
      if(data.language.seasons.length > 0){
        this.selectSeason(1);
      }
    });
  }
  
  selectSeason(p:number){
    this._service.getSeason({id:this.language.seasons[p - 1].id}).subscribe((data:any) => {
      this.season = data.season;
      this.chapters = this.season.chapters.sort((a:any, b:any) => {
        if(a.number > b.number){return 1;}
        if(a.number < b.number){return -1;}
        return 0;
      });
      if(this.season.chapters.length > 0){
        this.episode = this.season.chapters[0];
      }else{this.episode.thumnail = this.serie.thumnail}
    });
  }
}
