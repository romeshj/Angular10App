import { Component, OnInit } from '@angular/core';
import { HttpShoppingService } from '../service/http-shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private httpService : HttpShoppingService) { }
  
  ngOnInit() {
   
  }
  
  onSaveRecipes(){
	this.httpService.saveRecipesData();
  }
  
  onFetchRecipes(){
	this.httpService.fetchRecipes().subscribe();
  }
  
}
