import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { get_cover_res } from 'src/app/models';
import { UpdateService } from 'src/app/services/_updates/update.service';
import {types, modes} from './types&modes';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss', './series.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesListComponent implements OnChanges{
  @Input() covers_list:Array<get_cover_res> = [{name:'', section:[{}]}];
  @Input() chargue_status:boolean = false; 
  @Output() order_series = new EventEmitter();
  objects:Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  classes:Array<string> = this.seriesOrderPosition();
  cover_selected:get_cover_res = {name:'', section:[{}]};
  public types = types;
  public modes = modes;

  order_list_properties = {
    type:<string>this.types[0].value,
    mode:<string>this.modes[0].value,
    to:<0 | -1>0,
  }
  actions_list = {
    orientation:<'up' | 'down'>'up',
    showTypes:<boolean> false,
    showModes:<boolean> false
  }

  changueOrientation(){
    if(this.order_list_properties.to == 0){
      this.order_list_properties.to = -1;
      this.actions_list.orientation = 'up';
    }else{this.order_list_properties.to = 0; this.actions_list.orientation = 'down'};
  }

  sendNewOrder(){
    console.log('sd')
    this.order_series.emit(this.order_list_properties);
  }

  constructor(private _service:UpdateService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.covers_list[0] && this.covers_list[0].name && this.covers_list[0].name != '' && this.cover_selected.name == ''){
      this.cover_selected = this.covers_list[0];
    }
  }

  updateViews(serie_id:any, cover_id:any){
    this._service.updateViewing({serie_id, cover_id});
  }

  seriesOrderPosition(){
    if(window.innerWidth <= 600){
      return ['thr', 'one', 'thr', 'one', 'thr', 'thr'];
    }else if(window.innerWidth < 750){
      return ['thr', 'thr', 'one', 'one', 'thr', 'two'];
    }else if(window.innerWidth < 950){
      return ['thr', 'two', 'thr', 'one', 'thr', 'two', 'two', 'thr'];
    }else{
      return ['one', 'two', 'thr', 'one', 'one', 'two', 'thr', 'thr', 'thr', 'thr'];
    }
  }
}
