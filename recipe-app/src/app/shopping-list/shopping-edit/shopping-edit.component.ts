import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingriedent.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  
  @ViewChild('nameInput') nameInputReference!: ElementRef;
  @ViewChild('amountInput') amountInputReference!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  DeleteItem(){
    console.log("DeleteItem");
  }

  ClearInputFields(){
    this.nameInputReference.nativeElement.value = '';
    this.amountInputReference.nativeElement.value = '';
  }
}
