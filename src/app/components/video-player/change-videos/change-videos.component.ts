import { Component, Input, OnInit } from '@angular/core';
import { seasons } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-change-videos',
  templateUrl: './change-videos.component.html',
  styleUrls: ['./change-videos.component.scss']
})
export class ChangeVideosComponent implements OnInit {
  @Input() season_id:string = '';
  @Input() serie_name:any;
  season:seasons = {};

  constructor(private _service:SerieServiceService) { }

  ngOnInit(): void {
    this._service.GetSeasons(`
        number
        chapters {
          name
          thumb
          number
          chapter
        }
    `, this.season_id).subscribe((data:any)=>{
      this.season = data.data.get_season;
      let season = {...this.season};
      let chapters =  [...this.season.chapters || []];
      season.chapters = chapters.sort((a?:any, b?:any) => {
        if(a.number > b.number){return 1;}
        if(a.number < b.number){return -1;}
        console.log(this.season.chapters?.values);
        return 0;
      });
      this.season = season;
    });
  }

}
