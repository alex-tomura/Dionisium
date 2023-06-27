import { ChangeDetectionStrategy, Component} from '@angular/core';
import { AuthHandler } from 'src/app/handlers/auth/auth.service';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.scss', './images-display.component.scss', './bucle-for.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDisplayComponent {
  width = window.innerWidth;
  constructor(private _service:AuthHandler){};

  appear(){
    this._service.when_click.next({status:true, auth:'signup'});
  }
}
