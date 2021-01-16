import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
	
  constructor(private recipeSrv : RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
	this.recipes = this.recipeSrv.getRecipes();
  }
  
  onAddNewRecipe(){
	this.router.navigate(['new'], {relativeTo : this.activatedRoute})
  }

}
