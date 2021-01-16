import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode = false;
	recipe: Recipe;
	
  constructor(private recipeSrv: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
	this.activatedRoute.params
	.subscribe(
		(params : Params) => {
			this.id = +params['id'];
			this.editMode = params['id'] !== null;
			this.recipe = this.recipeSrv.getRecipe(this.id);
		}
	)
  }

}
