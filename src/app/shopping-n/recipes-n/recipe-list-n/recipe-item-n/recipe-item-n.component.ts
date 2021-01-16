import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item-n',
  templateUrl: './recipe-item-n.component.html',
  styleUrls: ['./recipe-item-n.component.css']
})
export class RecipeItemNComponent implements OnInit {

  @Input() recipe : Recipe;
  @Output() recipeItemSelected = new EventEmitter<{recipe : Recipe}>();
  
  constructor() { }

  ngOnInit(): void {
	
  }
  
  onRecipeItem(recipe){
	this.recipeItemSelected.emit(recipe);
  }
}
