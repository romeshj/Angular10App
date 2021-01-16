import { Component, OnInit } from '@angular/core';
import { ShoppingEditNComponent } from './shopping-edit-n/shopping-edit-n.component';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-n',
  templateUrl: './shopping-list-n.component.html',
  styleUrls: ['./shopping-list-n.component.css']
})
export class ShoppingListNComponent implements OnInit {

  ingredients : Ingredient[] = [
	new Ingredient('Apples', 5),
	new Ingredient('Tomatoes', 10)
  ];
	
  constructor() { }

  ngOnInit(): void {
  }
  
  newIngredientAdded(newIngredient : Ingredient){
	console.log(newIngredient)
	/*this.ingredients.push(
		new Ingredient(newIngredient.name, newIngredient.amount)
	);*/
	this.ingredients.push(newIngredient);
	console.log(this.ingredients)
  }

}
