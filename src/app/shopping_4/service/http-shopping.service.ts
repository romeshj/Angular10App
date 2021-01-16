import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Recipe } from '../shared/recipe.model';

@Injectable()
export class HttpShoppingService {
	
  recipe : Recipe; 	
  url = 'https://udemy-angular-10.firebaseio.com/recipes.json';
  errorSub = new Subject<string>();
  
  constructor(private recipeSrv : RecipeService, private http : HttpClient) { }
  
  saveRecipesData(){
	const recipes = this.recipeSrv.getRecipes();
	console.log( " here firebase " ,  recipes);
	this.http.put(this.url, recipes).subscribe(
		responseData => {
			console.log(responseData);
		},
		error => {
			this.errorSub.next(error.message);
		}
	)
  }
  
  fetchRecipes() {
    return this.http
      .get(
        this.url
      )
      .pipe(
        map(recipes => {		
		  console.log(recipes)
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),		
		tap(recipes => {
			this.recipeSrv.setRecipes(recipes);
		})
      )
  }
}
