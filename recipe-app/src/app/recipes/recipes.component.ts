import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.modal'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  selectedRecipe!: Recipe;

  selectedRecipeDetail(recipe: Recipe){
    this.selectedRecipe = recipe;
  }
}
