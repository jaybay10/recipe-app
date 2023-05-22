import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';

  recipe_feature: string = 'recipe';
  shopping_list_feature: string = 'shopping-list';


  onNavigate(feature: string){
    this.recipe_feature = feature;
    this.shopping_list_feature = feature;
  }
}
