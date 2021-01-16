import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {	

	//recipeItemSelected = new EventEmitter<Recipe>();
	//recipeItemSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
	
	/*recipes : Recipe[] = [
		new Recipe(
		'Vegetable Soup', 
		'Delicious soup with fresh vegetables cooked in vegetable stock.', 
		'../../../../assets/images/maxresdefault.jpg',
		[
			new Ingredient('Carrots', 1),
			new Ingredient('Tomatoes', 2),
			new Ingredient('Onions', 3),
			new Ingredient('Beans', 10)
		]),
		new Recipe(
		'Chocolate Cake', 
		'Unsweetened cocoa powder is used in the chocolate cake and a dark chocolate (semi sweet or bittersweet) is used in the frosting.', 
		'../../../../assets/images/cake.jpg',
		[
			new Ingredient('Wheat Flour', 2),
			new Ingredient('Cocao Powder', 1),
			new Ingredient('Chocolates', 3),
			new Ingredient('Butter', 2)
		])
	];*/
	
	recipes : Recipe[] = [];
	
	constructor(private shoppingListSrv : ShoppingListService) { }
	
	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}
	
	getRecipes(){
		return this.recipes.slice();
	}
	
	getRecipe(index : number){
		return this.recipes[index];
	}
	
	addIngredientsToShoppingList(ingredients : Ingredient){
		this.shoppingListSrv.addToShoppingList(ingredients);
		this.shoppingListSrv.setRecipeIngredients(ingredients)
	}
	
	addNewRecipe(recipe){
		//this.recipes.push(recipe);
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
		
	}
	
	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
	
	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
	
}
