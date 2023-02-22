import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent{
  @Input() chapters:any;
  @Input() season:any;
  @Input() serie:any;
}
