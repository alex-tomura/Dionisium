import { Component } from '@angular/core';
import { SerieServiceService } from 'src/app/services/serie-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  body = {
    search:''
  }
  series:any = [];
  chapters:any = [];

  constructor(private _service:SerieServiceService) { }

  search(){
    this._service.getSearch(this.body).subscribe((data:any)=>{
      this.series = data.series;
      this.chapters = data.chapters;
    });
  }
}
