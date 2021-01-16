import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../service/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListSrv : ShoppingListService) { }
	
  ngOnInit(): void {
  }
  
  
  addIngredientItem(ingredientNameInput : HTMLInputElement, ingredientAmountInput : HTMLInputElement){
	const ingName = ingredientNameInput.value;
	const ingAmount = parseInt(ingredientAmountInput.value);
	const newIng = new Ingredient(ingName, ingAmount);
	this.shoppingListSrv.addIngredient(newIng)
  }

}
