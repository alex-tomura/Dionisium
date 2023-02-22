import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { viewed } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/serie-service.service';

@Injectable({
  providedIn: 'root'
})
export class SerieHandler {

  constructor(private _serie_service:SerieServiceService) { }

  keep_wacthing_object = new Subject<viewed>();
  data:any; 
  v = this.keep_wacthing_object.subscribe(data=>{this.data = data});

  next(body:viewed){
    this.keep_wacthing_object.next(body);
  }

  save(){
    this._serie_service.updateViewing(this.data);
  }
}
