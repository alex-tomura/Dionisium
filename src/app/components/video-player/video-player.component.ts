import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieHandler } from 'src/app/handlers/serie/serie.service';
import { chapters, viewing } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('video')video!:ElementRef;
  chapter:chapters = {};
  chapter_id:any;
  season:any;
  serie:any;
  body:viewing = {
    name:'',
    thumnail:'',
    redirect:<any>this._routes.url,
    minute:0,
    token:localStorage.getItem('token'),
  }

  constructor(private _route:ActivatedRoute, private _routes:Router,  private _service:SerieServiceService, public _serie_handler: SerieHandler) {
    this.chapter_id = this._route.snapshot.paramMap.get('id');
    this.season = this._route.snapshot.paramMap.get('season');
    this.serie = this._route.snapshot.paramMap.get('name');
    let route = _routes.url.split('/')[5].split('?'); if(route.length > 1 && route[1].split('=')[0] == 'time'){
      this.body.minute = Number(route[1].split('=')[1]);
    }
  }

  ngOnInit(){
    this._service.GetChapter(`
      description
      number
      secure_url
      thumnail
    `, this.chapter_id).subscribe((data:any)=>{
      this.chapter = data.data.get_chapter;
      this.body.name = `${this.serie} -${this.chapter.number}` || '';
      this.body.thumnail = this.chapter.thumnail || '';
      this.video.nativeElement.currentTime = this.body.minute;

      setInterval(()=>{
        this.body.minute = Number(Number(this.video.nativeElement.currentTime).toFixed());
        this._serie_handler.next(this.body);
      }, 6000);
    });
  }
}