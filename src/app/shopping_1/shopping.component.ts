import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  featureSection = 'Recipes';
  constructor() { }

  ngOnInit(): void {
	//this.loadFeature('Recipes');
  }
  
  loadFeature(feature){
  console.log(feature)
	this.featureSection = feature.feature;
  }

}
