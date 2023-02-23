import { AfterViewInit, Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  moduleId:'module.id',
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements AfterViewInit{
  @Input() banner:any;
  showAd = environment.url_api || {};
  constructor() {}
  ngAfterViewInit() {
    setTimeout(() => {
      try {
        let wind:any = window;
        (wind['adsbygoogle'] = wind['adsbygoogle'] || []).push({
          overlays: {bottom:true}
        });
      } catch (e) {
        console.error(e);
      }
    }, 2000);
  }
}
  
