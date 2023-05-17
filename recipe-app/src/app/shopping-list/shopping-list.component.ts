import { Component } from '@angular/core';
import { ingredient } from '../shared/ingriedent.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: ingredient[] = [
    new ingredient('Apples', 5),
    new ingredient('Tomatoes', 10),
    new ingredient('Bananas', 8)
  ];

}
