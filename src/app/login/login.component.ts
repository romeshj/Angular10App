import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { CheckCredentialsService } from '../services/check-credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username="";
  password="";
  userData=[];
  errorMessage="";
  returnUrl="";
  
  
  constructor(private userService : UserService, private chkCred: CheckCredentialsService, public router : Router) { }

  ngOnInit() {
      console.log(this.userService.getUserData())
	  this.userService.getUserData().subscribe(responseData => {
		this.userData.push(responseData);
	  },
	  error => this.errorMessage = error
	)
  }
  
  loginFn(){	
	/*if(this.username == this.userData[0][0].user_name && this.password == this.userData[0][0].password){
		this.chkCred.setUserLoggedIn();
		if(this.chkCred.getUserLoggedIn() == true){
			this.returnUrl = this.chkCred.redirectUrl || "/dashboard";
			this.router.navigate([this.returnUrl]);
		}
	}*/
	this.router.navigate(["/dashboard"]);
  }

}
