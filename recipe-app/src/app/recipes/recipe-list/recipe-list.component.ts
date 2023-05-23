import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() CurrentRecipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifQDyJ8OllHWJDWhKUDrNo39R-Qncq5gRIQ&usqp=CAU'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16CPZLq9Jk-0GrYAaQ7kqSPS9lgspFYKo-A&usqp=CAU')
  ];


  onRecipeSelected(recipe: Recipe){
    this.CurrentRecipeSelected.emit(recipe);
  }
}
