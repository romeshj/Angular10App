import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidationService } from '../../services/custom-validation.service'

@Component({
  selector: 'app-reactive-form-validation-service',
  templateUrl: './reactive-form-validation-service.component.html',
  styleUrls: ['./reactive-form-validation-service.component.css']
})
export class ReactiveFormValidationServiceComponent implements OnInit {

  userForm : FormGroup;
  submitted = false;
  userLists = [];
  
  constructor(private formBuilder : FormBuilder, private customValidator : CustomValidationService) { }

 ngOnInit(){
	this.initForm();
	this.userLists = this.customValidator.getUserLists();
  }
  
  initForm(){
	this.userForm = this.formBuilder.group({
		firstName : ['', [Validators.required,this.customValidator.patternCharacterValidator()]],
        lastName : ['', [Validators.required, ,this.customValidator.patternCharacterValidator()]],
		password : ['', Validators.required],
		confirmPassword : ['', Validators.required],
		numVal : [''],
		userName : ['', Validators.required]
	},
	{ 
		validator: [
			this.customValidator.MatchPassword('password', 'confirmPassword'), 
			this.customValidator.GTE('numVal', 30),
			this.customValidator.userNameValidator('userName')
			]
	}
	)
	//console.log(this.userForm.get('address').controls, this.userForm.get('address').controls.city);
	//console.log(this.userForm.get('address'))
  }
  
  // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }
	
	get fa() { return this.userForm.get('address')['controls'] }
	
	
	onSubmit() {
	//console.log(this.userForm.get('address'))
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
    }
	
	onReset() {
        this.submitted = false;
        this.userForm.reset();
    }
	
	isValidInput(fieldName): boolean {	
		return this.userForm.controls[fieldName].touched;
	}

}
