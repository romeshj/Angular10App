import { Component, OnInit } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	
  ingredients : Ingredient[];
  
  selecteRecipeIngredients = [];
	
  constructor(private shoppingListSrv : ShoppingListService) { }
	
  ngOnInit(): void {
  
	this.selecteRecipeIngredients = this.shoppingListSrv.getRecipeIngredients();
	console.log( " ==== this.selecteRecipeIngredients ==== ", this.selecteRecipeIngredients);
	
	this.ingredients = this.shoppingListSrv.getIngredients();
	console.log( " ==== this.ingredients ==== ", this.ingredients);
	
	
	this.shoppingListSrv.onIngredientChanged
	.subscribe(
		(ingredients : Ingredient[]) => {
			this.ingredients = ingredients
		}
	)
	
	//this.ingredients = this.ingredients.filter(el => this.selecteRecipeIngredients.indexOf(el) === -1);
	//console.log( " ==== this.ingredients ==== ", this.ingredients);
  }
  
}
