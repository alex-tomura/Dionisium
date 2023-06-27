import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chapters_seasons, language, languages_covers, seasons, seasons_languages_covers, serie_cover } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-serie-box',
  templateUrl: './serie-box.component.html',
  styleUrls: ['./serie-box.component.scss']
})
export class SerieBoxComponent implements OnInit {
  serie_id:any;
  serie:serie_cover = {};
  seasons_list:Array<seasons> = [{}];
  season:seasons = {};
  language:languages_covers = {};
  episode:any;

  constructor(private _route:ActivatedRoute, private _service:SerieServiceService) {this.serie_id = this._route.snapshot.paramMap.get('id')}

  ngOnInit(): void {
    this._service.GetProject(`
      PCCover
      description
      name
      type
      languages {
        language
        seasons {
          number
          season
        }
      }
    `, this.serie_id).subscribe((data:any)=>{
      this.serie = data.data.get_serie;
      if(this.serie.languages && this.serie.languages?.length > 0 && this.serie.languages[0].seasons && this.serie.languages[0].seasons?.length > 0){
        this.selectSeason(<string>this.serie.languages[0].seasons[0].season);
      }
    });
  }

  selectLanguage(language:languages_covers){
    this.language = language;
  }
  
  selectSeason(id:string){
    if(this.seasons_list.some(season => season._id == id)){
      this.season = <seasons_languages_covers>this.seasons_list.find(season => season._id == id);
    }else{
      this._service.GetSeasons(`
        _id
        number
        chapters {
          duration
          name
          thumb
          number
          chapter
        }
      `, id).subscribe((data:any) => {
        this.season = data.data.get_season;
        this.seasons_list.push(this.season);
        this.episode = this.season.chapters?.['0'] || this.serie;
      });
    }
  }
}
