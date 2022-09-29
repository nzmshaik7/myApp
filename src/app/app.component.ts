import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp sd';
  names: string[] = ['Fred', 'Julie', 'Sam', 'Olivia'];

  isHungry: boolean = true;
  
}
