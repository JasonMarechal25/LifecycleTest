import { Component } from '@angular/core';
import { Data, DataService } from './data/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  constructor(public service: DataService) {
    this.service.dummyData.dummyValue = 3;
  }

  public up() {
    console.log('Up');
    this.service.dummyData.dummyValue++;
  }
}
