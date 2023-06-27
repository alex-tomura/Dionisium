import { Component } from '@angular/core';
import { chapters, serie } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  search:string = ''; 
  limit:{ls:number, lc:number} = this.defineLimit();
  series:Array<serie> = [];
  chapters:Array<chapters> = [];

  constructor(private _service:SerieServiceService) { }

  defineLimit(){
    let ls:number = 5; let lc:number = 5;
    if(window.innerWidth <= 1000){
      ls = 4; lc = 4;
    }
    if(window.innerWidth <= 800){
      ls = 4; lc = 2;
    }
    return {
      ls:<number> ls,
      lc:<number> lc
    }
  }

  found(){
    this._service.SearchQuery(`
      serie {
        _id
        date
        thumnail
        name
      }
      chapters {
        _id
        season
        serie
        name
        duration
        thumnail
      }
    `, this.limit.lc, this.limit.ls, this.search).subscribe((data:any)=>{
      this.series = data.data.search.serie;
      this.chapters = data.data.search.chapters;
      let chapters = [...this.chapters];
      let vh = window.innerHeight / 100;
      let vw = window.innerWidth / 100;
      // let _cont = this.containerValues();
      let _cont = 10;
      const newChapters:Array<chapters> = [];
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
        if(newChapters.length == chapters.length){this.chapters = newChapters};
      });
    });
  }
}
