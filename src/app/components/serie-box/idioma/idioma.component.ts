import { Component, EventEmitter, Input, Output } from '@angular/core';
import { languages_covers } from 'src/app/models';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.scss']
})
export class IdiomaComponent{
  @Input() languages!:Array<languages_covers>;
  @Input() language_selected:languages_covers = {};
  @Output() selected = new EventEmitter();
  status:boolean = false;

  selectLanguage(value:languages_covers){
    this.selected.emit(value.language);
    this.status = !this.status;
  }
}
