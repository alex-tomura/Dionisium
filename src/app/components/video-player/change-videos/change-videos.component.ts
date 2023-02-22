import { Component, Input, OnInit } from '@angular/core';
import { SerieServiceService } from 'src/app/services/serie-service.service';

@Component({
  selector: 'app-change-videos',
  templateUrl: './change-videos.component.html',
  styleUrls: ['./change-videos.component.scss']
})
export class ChangeVideosComponent implements OnInit {
  @Input() season_id:any;
  @Input() serie_name:any;
  season:any = [];

  constructor(private _service:SerieServiceService) { }

  ngOnInit(): void {
    this._service.getSeason({id:this.season_id}).subscribe((data:any)=>{
      this.season = data.season.chapters.sort((a:any, b:any) => {
        if(a.number > b.number){return 1;}
        if(a.number < b.number){return -1;}
        return 0;
      });;
    });
  }

}
