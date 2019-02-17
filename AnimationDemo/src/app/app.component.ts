import { Component } from '@angular/core';
import { STATE_ANIMATION } from './animations/simple-state.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [STATE_ANIMATION]
})
export class AppComponent {
  title = 'AnimationDemo';

  state = 'start';

  toggleState(){
    this.state = this.state == 'start' ? 'stop' : 'start';
  }
}
