import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	
  @Input() selectedRecipeDetail;
  
  constructor(private recipeSrv : RecipeService) { }

  ngOnInit(): void {
  console.log("selectedRecipeDetail", this.selectedRecipeDetail)
  }
  
  onAddToShoppingList(){
	this.recipeSrv.addIngredientsToShoppingList(this.selectedRecipeDetail.ingredients);
  }

}
