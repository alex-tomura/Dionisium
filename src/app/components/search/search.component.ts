import { Component } from '@angular/core';
import { chapters, serie } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  search:string = ''; 
  limit:{ls:number, lc:number} = this.defineLimit();
  series:Array<serie> = [];
  chapters:Array<chapters> = [];

  constructor(private _service:SerieServiceService) { }

  defineLimit(){
    let ls:number = 5; let lc:number = 5;
    if(window.innerWidth >= 800){
      ls = 4; lc = 2;
    }
    return {
      ls:<number> ls,
      lc:<number> lc
    }
  }

  found(){
    this._service.SearchQuery(`
      serie {
        _id
        date
        thumnail
      }
      chapters {
        _id
        season
        serie
        name
        duration
        thumnail
      }
    `, this.limit.lc, this.limit.ls, this.search).subscribe((data:any)=>{
      this.series = data.data.search.serie;
      this.chapters = data.data.search.chapters;
    });
  }
}
