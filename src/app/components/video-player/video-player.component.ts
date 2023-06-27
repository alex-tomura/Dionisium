import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('description') description!:ElementRef; descriptionZ:boolean = false; textZ:'3vh' | 'max-content' = '3vh';
  chapter:chapters = {};
  chapter_id:string;
  season:string;
  serie:string;
  body:viewing = {
    name:'',
    thumnail:'',
    redirect:<any>this._routes.url,
    minute:0,
    token:localStorage.getItem('token'),
  }

  constructor(private _route:ActivatedRoute, private _routes:Router,  private _service:SerieServiceService, public _serie_handler: SerieHandler) {
    this.chapter_id = <string> this._route.snapshot.paramMap.get('id');
    this.season = <string> this._route.snapshot.paramMap.get('season');
    this.serie = <string> this._route.snapshot.paramMap.get('name');
  }

  seeMore(){
    switch (this.textZ) {
      case '3vh': this.textZ = 'max-content'; break;
      case 'max-content': this.textZ = '3vh'; break;
    }
  }

  ngOnInit(){
    this._service.GetChapter(`
      description
      number
      name
      secure_url
      thumnail
    `, this.chapter_id).subscribe((data:any)=>{
      this.chapter = data.data.get_chapter;
      this.body.name = `${this.serie} -${this.chapter.number}` || '';
      this.body.thumnail = this.chapter.thumnail || '';

      const description = this.description.nativeElement;
      this.descriptionZ = description.scrollWidth > description.clientWidth || description.scrollHeight > description.clientHeight;
      
      setTimeout(()=>{
        this._serie_handler.next(this.body);
        this.loadDisqus();
      }, 30000);
    });
  }

  loadDisqus(): void {
    let localwindow:any = <any>window;
    if (localwindow?.['DISQUS']) {
      localwindow?.['DISQUS'].reset({
        reload: true,
        config: function () {
          this.page.identifier = 'unique_identifier_for_page';
          this.page.url = 'url_of_the_page';
        }
      });
      window = localwindow;
    } else {
      const script = document.createElement('script');
      script.src = 'https://dionisium.disqus.com/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }
}