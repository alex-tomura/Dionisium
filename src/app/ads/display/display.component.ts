import { AfterViewChecked, AfterViewInit, Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  moduleId:'module.id',
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent{
  @Input() banner:any;
}
  
