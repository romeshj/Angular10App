import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpShoppingService } from '../service/http-shopping.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
 private userSub : Subscription;
 isAuthenticated =  false;
	
  constructor(private httpService : HttpShoppingService, private authService : AuthService) { }
  
  ngOnInit() {
   this.userSub = this.authService.user.subscribe(user => {
		this.isAuthenticated = user ? true : false;
		//console.log(user)
		//console.log(this.isAuthenticated, !user, !!user);
   })
  }
  
  onSaveRecipes(){
	this.httpService.saveRecipesData();
  }
  
  onFetchRecipes(){
	this.httpService.fetchRecipes().subscribe();
  }
  
  onLogOut(){
	this.authService.logout();
  }
  
  ngOnDestroy(){
	this.userSub.unsubscribe();
  }
  
}
