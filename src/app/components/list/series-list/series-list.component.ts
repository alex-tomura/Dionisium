import { Component, EventEmitter, Input, Output } from '@angular/core';
import { get_cover_res } from 'src/app/models';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent{
  @Input() orderSeries:get_cover_res = {section:[{}]};
  @Input() chargue_status:boolean = false; @Output() order_series = new EventEmitter();
  series:Array<any> = [
    {tittle:'popular'},{tittle:'nuevo'},{tittle:'shonen'},
    {tittle:'seinen'},{tittle:'dobladas'},{tittle:'largas'},
  ]
  objects = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  classes = this.seriesOrderPosition();

  // constructor(private _service:ListService) { }

  order(value:string){
    this.order_series.emit(value);
  }

  updateViews(serie_id:any, cover_id:any){
    // this._service.updateViews({serie_id, cover_id});
  }

  seriesOrderPosition(){
    if(window.innerWidth < 600){
      return ['one', 'two', 'thr', 'one', 'one', 'thr', 'two', 'thr', 'thr', 'thr'];
    }else if(window.innerWidth < 950){
      return ['one', 'thr', 'two', 'thr', 'one', 'one', 'two', 'thr', 'thr', 'thr']
    }
    return ['one', 'two', 'thr', 'one', 'one', 'two', 'thr', 'thr', 'thr', 'thr'];
  }
}
