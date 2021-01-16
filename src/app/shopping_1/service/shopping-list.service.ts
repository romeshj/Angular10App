import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  onIngredientChanged  = new EventEmitter<Ingredient[]>();
  
  ingredients : Ingredient[] = [
	new Ingredient('Apples', 5),
	new Ingredient('Tomatoes', 10)
  ];
  
  recipeIngredientsLists = [];
  
  getIngredients(){
	return this.ingredients.slice();
  }
  
  
	addIngredient(newIngredient : Ingredient){
		this.ingredients.push(newIngredient);
		this.onIngredientChanged.emit(this.ingredients.slice());
	}
	
	addToShoppingList(recipeIngredients){
		console.log( " ==== recipeIngredients ==== ", recipeIngredients)
		this.ingredients.push(...recipeIngredients);
		this.onIngredientChanged.emit(this.ingredients.slice());
	}
	
	setRecipeIngredients(recipeIngredients){
		this.recipeIngredientsLists = recipeIngredients;
	}
	
	getRecipeIngredients(){
		return this.recipeIngredientsLists;
	}
}
