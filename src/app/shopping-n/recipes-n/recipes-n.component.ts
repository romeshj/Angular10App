import { Component, OnInit } from '@angular/core';
import { RecipeListNComponent } from './recipe-list-n/recipe-list-n.component';
import { RecipeDetailNComponent } from './recipe-detail-n/recipe-detail-n.component';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-n',
  templateUrl: './recipes-n.component.html',
  styleUrls: ['./recipes-n.component.css']
})
export class RecipesNComponent implements OnInit {

  selectedRecipeDetail: Recipe;
	
  constructor() { }

  ngOnInit(): void {
  }
  
  getSelectedRecipe(recipeItem){
	this.selectedRecipeDetail = recipeItem;
  }

}
