import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { languages_covers, seasons_language } from 'src/app/models';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnChanges {
  @Input() language:languages_covers = {};
  @Output() selected = new EventEmitter();
  select:number = 1;
  next:boolean = false;
  back:boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.verify();
  }

  verify(){
    if(this.language.seasons != (null || undefined)){
      if(this.language.seasons.length <= this.select){
        this.next = false;
      }
      else if(this.language.seasons.length > this.select){
        this.next = true;
      }
      if(this.select > 1){
        this.back = true;
      }
      else{this.back = false}
    }
  }

  selectSeason(value:string){
    if(value == 'next'){
      this.select += 1;
    }else if(value == 'back'){
      this.select -= 1;
    }
    this.selected.emit(this.language?.seasons?.[this.select - 1].season);
    this.verify();
  }
}
