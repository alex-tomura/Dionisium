import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnChanges {
  @Input() seasons:any;
  @Output() selected = new EventEmitter();
  select:number = 1;
  next:boolean = false;
  back:boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.verify();
  }

  verify(){
    if(this.seasons != (null || undefined)){
      if(this.seasons.length <= this.select){
        this.next = false;
      }
      else if(this.seasons.length > this.select){
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
      this.selected.emit(this.select);
      this.verify();
    }
    if(value == 'back'){
      this.select -= 1;
      this.selected.emit(this.select);
      this.verify();
    }
  }
}
