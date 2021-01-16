import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	
	recipes : Recipe[];
	
  constructor(private recipeSrv : RecipeService) { }

  ngOnInit() {
	this.recipes = this.recipeSrv.getRecipes();
  }

}
