import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
  medias = [
    {name:'instagram', img:'assets/instagram-icon.svg', url:''},
    {name:'twitter', img:'assets/twitter-icon.svg', url:''},
    {name:'facebook', img:'assets/facebook-icon.svg', url:''},
    {name:'whatsapp', img:'assets/whatsapp-icon.svg', url:''},
    {name:'youtube', img:'assets/youtube-icon.svg', url:''}
  ]

  constructor() { }

}
