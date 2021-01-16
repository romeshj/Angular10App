import { Injectable } from '@angular/core';

@Injectable()
export class CheckCredentialsService {
	isUserLoggedIn = false;
	redirectUrl="";
	
	constructor() { }
	
	setUserLoggedIn(){
		this.isUserLoggedIn = true;
	}

	getUserLoggedIn(){
		return this.isUserLoggedIn;
	}
}
