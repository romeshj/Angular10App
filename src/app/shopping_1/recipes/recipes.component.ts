import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
	
  
  selectedRecipeDetail: Recipe;
	
  constructor(private recipeSrv : RecipeService) { }

  ngOnInit() {
	this.recipeSrv.recipeItemSelected
	.subscribe(
		(recipe : Recipe) => {
			this.selectedRecipeDetail = recipe;
		}
	)
  }
  
}
