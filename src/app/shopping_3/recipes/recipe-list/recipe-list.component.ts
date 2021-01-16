import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
	
	recipes : Recipe[];
	subscription: Subscription;
	
  constructor(private recipeSrv : RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
	this.subscription = this.recipeSrv.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
	this.recipes = this.recipeSrv.getRecipes();
  }
  
  onAddNewRecipe(){
	this.router.navigate(['new'], {relativeTo : this.activatedRoute})
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
