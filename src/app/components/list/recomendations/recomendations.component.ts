import { AfterViewInit, Component } from '@angular/core';
import { serie_cover } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss']
})
export class RecomendationsComponent implements AfterViewInit {
  series:Array<serie_cover> = [{}];

  constructor(private _service:SerieServiceService) { }

  ngAfterViewInit(): void {
    this._service.GetRecomendations(`
      _id
      name
      MovileCover
    `, 'forYou', this.DefineLimit()).subscribe((data:any)=>{
      this.series = data.data.get_recomendations;
    });
  }

  DefineLimit(){
    if(window.innerWidth < 600){
      return 4;
    }else if(window.innerWidth < 950){
      return 6;
    }
    return 8;
  }
}
