import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.scss']
})
export class IdiomaComponent{
  @Input() language_selected:Array<any> = [];
  @Output() selected = new EventEmitter();
  selection = this.language_selected[0] || 'proximamente';
  status:boolean = false;

  openOptions(){
    this.status = !this.status;
  }
  
  selectLenguage(value:string){
    this.selected.emit(value);
  }
}
