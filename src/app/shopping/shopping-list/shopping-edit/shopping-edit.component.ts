import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../service/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('ingFrm', {static :  false}) ingredientForm : NgForm;
  submitted = false;
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;
  
  constructor(private shoppingListSrv : ShoppingListService) { }
	
  ngOnInit() {
	this.subscription = this.shoppingListSrv.startedEditing.subscribe(
		(index : number) => {
			this.editedItemIndex = index;
			this.editMode = true;
			this.editedItem = this.shoppingListSrv.getIngredient(index);
			console.log(this.editedItem)
			this.ingredientForm.setValue({
				ingredientName : this.editedItem.name,
				ingredientAmount : this.editedItem.amount
			})
		}
	)
	
  }
  
  
  /*addIngredientItem(ingredientNameInput : HTMLInputElement, ingredientAmountInput : HTMLInputElement){
	const ingName = ingredientNameInput.value;
	const ingAmount = parseInt(ingredientAmountInput.value);
	const newIng = new Ingredient(ingName, ingAmount);
	this.shoppingListSrv.addIngredient(newIng)
  }*/
  
  checkIngredientNameExistence(ingrName: string):boolean {
	const allIngredients = this.shoppingListSrv.getIngredients();
    return allIngredients.some(e => e.name === ingrName);
  }
    
  onSubmit(form){
  
	this.submitted = true;
	const ingredient = form.value;
	const ingName = ingredient.ingredientName;
	const ingAmount = parseInt(ingredient.ingredientAmount);
	const ingredientExist = this.checkIngredientNameExistence(ingName);
	const newIng = new Ingredient(ingName, ingAmount);
	this.editMode ? this.shoppingListSrv.updateIngredient(this.editedItemIndex, newIng) : !ingredientExist ? this.shoppingListSrv.addIngredient(newIng) : null;
	form.reset();
	this.editMode = false;
  }
  
  onClear(){
	this.ingredientForm.reset();
	this.editMode = false;
  }
  
  onDelete(){
    this.shoppingListSrv.deleteIngredient(this.editedItemIndex);
	this.onClear();
  }
  
  
  ngOnDestroy(){
	this.subscription.unsubscribe();
  }

}
