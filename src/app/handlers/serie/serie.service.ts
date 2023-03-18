import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { viewing } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Injectable({
  providedIn: 'root'
})
export class SerieHandler {

  constructor(private _serie_service:SerieServiceService) { }

  keep_wacthing_object = new Subject<viewing>();
  data:any; 
  v = this.keep_wacthing_object.subscribe(data=>{this.data = data});

  next(body:viewing){
    this.keep_wacthing_object.next(body);
  }

  save(){
    console.log(this.data);
    this._serie_service.updateViewing(this.data);
  }
}
