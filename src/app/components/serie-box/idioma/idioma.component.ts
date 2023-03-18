import { Component, EventEmitter, Input, Output } from '@angular/core';
import { language_serie } from 'src/app/models';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.scss']
})
export class IdiomaComponent{
  @Input() languages?:Array<language_serie> = [];
  @Input() language_selected:string = '';
  @Output() selected = new EventEmitter();
  status:boolean = false;

  openOptions(){
    this.status = !this.status;
  }
  
  selectLenguage(value:string){
    this.selected.emit(value);
  }
}
