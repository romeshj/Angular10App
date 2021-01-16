import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail-n',
  templateUrl: './recipe-detail-n.component.html',
  styleUrls: ['./recipe-detail-n.component.css']
})
export class RecipeDetailNComponent implements OnInit {

  @Input() selectedRecipeDetail;
  
  constructor() { }

  ngOnInit(): void {
  console.log("selectedRecipeDetail", this.selectedRecipeDetail)
  }

}
