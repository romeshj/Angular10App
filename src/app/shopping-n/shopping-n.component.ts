import { Component, OnInit } from '@angular/core';
import { HeaderNComponent } from './header-n/header-n.component';
import { RecipesNComponent } from './recipes-n/recipes-n.component';
import { ShoppingListNComponent } from './shopping-list-n/shopping-list-n.component';


@Component({
  selector: 'app-shopping-n',
  templateUrl: './shopping-n.component.html',
  styleUrls: ['./shopping-n.component.css']
})
export class ShoppingNComponent implements OnInit {

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
