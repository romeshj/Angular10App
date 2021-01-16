import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit-n',
  templateUrl: './shopping-edit-n.component.html',
  styleUrls: ['./shopping-edit-n.component.css']
})
export class ShoppingEditNComponent implements OnInit {

  @Output() onAddIngredient = new EventEmitter<Ingredient>();
	
  ngOnInit(): void {
  }
  
  
  addIngredientItem(ingredientNameInput : HTMLInputElement, ingredientAmountInput : HTMLInputElement){
	const ingName = ingredientNameInput.value;
	const ingAmount = ingredientAmountInput.value;
	/*const newIng = {
		ingredientName : ingName, 
		ingredientAmount : ingAmount
	}*/
	const newIng = new Ingredient(ingName, ingAmount);
	this.onAddIngredient.emit(newIng)
  }

}
