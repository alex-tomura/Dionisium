import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { serie_cover } from 'src/app/models';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertsComponent {
  @Input() _data:{_values:{background:string, button:string}, _serie:serie_cover} = {_values:{background:'#00000000', button:'white'}, _serie:{}};
  width = window.innerWidth;
}
