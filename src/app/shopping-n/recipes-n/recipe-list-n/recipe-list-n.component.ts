import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { RecipeItemNComponent } from './recipe-item-n/recipe-item-n.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list-n',
  templateUrl: './recipe-list-n.component.html',
  styleUrls: ['./recipe-list-n.component.css']
})
export class RecipeListNComponent implements OnInit {

  recipes : Recipe[] = [
		new Recipe('Vegetable Soup Recipe', 'Delicious soup with fresh vegetables cooked in vegetable stock.', '../../../../assets/images/maxresdefault.jpg'),
		new Recipe('Simple Chocolate Cake Recipe', 'Unsweetened cocoa powder is used in the chocolate cake and a dark chocolate (semi sweet or bittersweet) is used in the frosting.', '../../../../assets/images/cake.jpg')
	];
	
	@Output() selectedRecipe = new EventEmitter<{recipe : Recipe}>();
	
  constructor() { }

  ngOnInit(): void {
  }
  
  getRecipeItem(item){
	this.selectedRecipe.emit(item);
  }
}
