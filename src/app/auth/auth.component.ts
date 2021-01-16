import { Component, ComponentFactoryResolver, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService, AuthResponseData } from '../services/auth.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { AlertComponent } from '../alert/alert.component';
import { PlaceholderDirective } from '../directives/placeholder.directive';
import { Observable, Subscription  } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit , OnDestroy{
  isLoading = false;
  isLoginMode = true;
  error : string = '';
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
   private closeSub: Subscription;
   
  constructor(private authService : AuthService, private router : Router, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
	
  }
  
  onSwitchMode(){
	this.isLoginMode = !this.isLoginMode;
  }
  
  onSubmit(form : NgForm){
	if(!form.valid){
		return;
	}	
	const email = form.value.email;
	const password = form.value.password;	
	let authObs : Observable<AuthResponseData>;		
    this.isLoading = true;
			
    if(this.isLoginMode){
		authObs = this.authService.login(email,password);
	}
	else {		
		authObs = this.authService.signUp(email,password);
	}

	authObs
	.subscribe(
		responseData => {
			console.log(responseData);
			this.isLoading = false;
			this.error = '';
			this.router.navigate(['/dashboard/recipes'])
		},
		errorMessage => {
			console.log( " errorMessage here  " , errorMessage);
			this.error = errorMessage;
			console.log("this.error", this.error, this.error.length);
			this.showErrorAlert(errorMessage);
			this.isLoading = false;
		}
	);
	
	form.reset();
  }
  
  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
  
  /*closeModal(){
	this.error = '';
  }*/
  
  private showErrorAlert(message: string) {
  console.log(" message ", message)
    // const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    
	const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
	
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
