import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  onActivate(e, outlet){
    window.scrollTo(0,0)
    outlet.scrollTop = 0;
  }
}
