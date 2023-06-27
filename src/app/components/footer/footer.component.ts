import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent{
  @Input() background:string = '#00000000';
  medias = [
    {name:'instagram', img:'assets/instagram-icon.svg', url:''},
    {name:'twitter', img:'assets/twitter-icon.svg', url:''},
    {name:'facebook', img:'assets/facebook-icon.svg', url:''},
    {name:'whatsapp', img:'assets/whatsapp-icon.svg', url:''},
    {name:'youtube', img:'assets/youtube-icon.svg', url:''}
  ]

  constructor() { }

}
