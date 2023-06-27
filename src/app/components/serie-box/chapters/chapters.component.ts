import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { chapters_seasons, seasons } from 'src/app/models';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnChanges{
  @Input() season:seasons = {};
  @Input() serie:string = '';

  ngOnChanges(changes: SimpleChanges): void {
    let chapters = [...this.season.chapters || []];
    let vh = window.innerHeight / 100;
    let vw = window.innerWidth / 100;
    let _cont = this.containerValues();
    const newChapters:Array<chapters_seasons> = [];
    chapters.forEach(chapterObj => {
      let chapter = {...chapterObj};
      let nameLength = <number> chapter.name?.length;
      let cont:number = ((_cont * vw) * 2) + ((3 * vh) * 2);
      let letter = 1.35 * vh;
      if(cont < letter * nameLength){
        let leftover = letter * nameLength - cont;
        console.log(leftover, leftover / letter, nameLength, Math.trunc(nameLength - (leftover / letter)));
        let newName = chapter.name?.slice(0, Math.trunc(nameLength - (leftover / letter)) - 3) + '...';
        chapter.name = newName;
        newChapters.push(chapter);
      }else{newChapters.push(chapter)};
      let newSeason = {...this.season}; newSeason.chapters = newChapters;
      if(newChapters.length == chapters.length){this.season = newSeason};
    });
  }
  
  containerValues():number{
    if(window.innerWidth > 1250){return 21.75}
    if(window.innerWidth <= 1250){return 28.333333}
    if(window.innerWidth <= 950){return 46}
    if(window.innerWidth <= 550){return 59.85}
    return 0;
  }
}
