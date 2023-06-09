import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingriedent.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Bananas', 8)
  ];

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
