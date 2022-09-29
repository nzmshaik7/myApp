import { Component } from '@angular/core';
import { MenuItem } from './menu_item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza!';
  names: string[] = ['Fred', 'Julie', 'Sam', 'Olivia'];
  isHungry: boolean = true;

  itemOne: MenuItem = {
    item: 'Chicken Fingers',
    category: 'dinner',
    price: 11.99
  }

  itemTwo: MenuItem = {
    item: 'Pizza',
    category: 'dinner',
    price: 11.99
  }

  itemThree: MenuItem = {
    item: 'Wings',
    category: 'sides',
    price: 8.99
  }

  itemFour: MenuItem = {
    item: 'Breadsticks',
    category: 'sides',
    price: 4.99
  }

  itemFive: MenuItem = {
    item: 'Ceasar Salad',
    category: 'salads',
    price: 5.99
  }

  itemSix: MenuItem = {
    item: 'Cinnamon Roll',
    category: 'desert',
    price: 8.99
  }

  menuItems: MenuItem[] = [this.itemOne, this.itemTwo, this.itemThree,
      this.itemFour, this.itemFive, this.itemSix
      ];
  headers: string[] = ['Item', 'Category', 'Price']

}
