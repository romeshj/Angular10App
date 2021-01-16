import { Injectable } from '@angular/core';
import { FormGroup , ValidatorFn, AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

	UserList = ['ankit', 'admin', 'user', 'superuser'];
	
	getUserLists(){
		return this.UserList;
	}

	patternCharacterValidator() : ValidatorFn {
		return (control : AbstractControl) => {
			
			if (!control.value) {
				return null;
			}
			const regex = new RegExp('^[a-zA-Z]+$');
			const valid = regex.test(control.value);
			return valid ? null : { invalidUserName: true };
		}
	}
	
	MatchPassword(password: string, confirmPassword: string) {
		return (formGroup: FormGroup) => {
		  const passwordControl = formGroup.controls[password];
		  const confirmPasswordControl = formGroup.controls[confirmPassword];

		  if (!passwordControl || !confirmPasswordControl) {
			return null;
		  }

		  if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
			return null;
		  }

		  if (passwordControl.value !== confirmPasswordControl.value) {
			confirmPasswordControl.setErrors({ passwordMismatch: true });
		  } else {
			confirmPasswordControl.setErrors(null);
		  }
		}
	}
	
	GTE(controlName: string, requiredValue: number) {	
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			//console.log(control, requiredValue)
			if (!control) {
			  return null;
			}
		   
			if (control.errors && !control.errors.gte) {
				return null;
			}
			
			let v: number = +control.value;
	 
			if (isNaN(v) || v <= +requiredValue) {
			  control.setErrors({ gte: true, requiredValue : requiredValue });
			}
			else 
			{
			  control.setErrors(null);
			}
		}
	}
		
	userNameValidator(controlName: string) {	
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			if (!control) {
			  return null;
			}
		   
			if (control.errors && !control.errors.userNameNotAvailable) {
				return null;
			}
				 
			if (!this.validateUserName(control.value)) {
				control.setErrors({ userNameNotAvailable: true });
			} else {
			  control.setErrors(null);
			}
		}
	}
	
	validateUserName(userName: string) {
		return (this.UserList.indexOf(userName) > -1);
	}
  
}
