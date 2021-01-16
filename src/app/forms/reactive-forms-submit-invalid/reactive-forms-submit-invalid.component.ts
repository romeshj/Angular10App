import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../validators/must-match.validators';
import { GTE } from '../validators/gte.validators';

@Component({
  selector: 'app-reactive-forms-submit-invalid',
  templateUrl: './reactive-forms-submit-invalid.component.html',
  styleUrls: ['./reactive-forms-submit-invalid.component.css']
})
export class ReactiveFormsSubmitInvalidComponent implements OnInit {

  userForm : FormGroup;
  submitted = false;
 
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(){
  this.initForm();
  }
  
  initForm(){
	this.userForm = this.formBuilder.group({
		title : ['', Validators.required],
		firstName : ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
        lastName : ['', [Validators.required, ,Validators.pattern(/^[a-zA-Z]+$/)]],
		// validates date format yyyy-mm-dd
		dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
		email: ['', [Validators.required, Validators.email]],
		password : ['', Validators.required],
		confirmPassword : ['', Validators.required],
		acceptTerms : ['', Validators.required],
		gender : ['', Validators.required],
		address : this.formBuilder.group({
			city : ['', [Validators.required, ,Validators.pattern(/^[a-zA-Z- ]+$/)]],
			street : ['', [Validators.required, ,Validators.pattern(/^[a-zA-Z0-9- ]+$/)]],
			zipcode : ['', [Validators.required, ,Validators.pattern(/^[0-9]{5}$/)]]
		}),
		numVal : ['']
	},
	//{ updateOn: 'submit'},
		{
            validator: [MustMatch('password', 'confirmPassword'), GTE('numVal', 30)]
		}
	)
	//console.log(this.userForm.get('address').controls, this.userForm.get('address').controls.city);
	console.log(this.userForm.controls)
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
	
	isInputRequired(fieldName): boolean {	
		return this.userForm.controls[fieldName].value === '' && this.userForm.controls[fieldName].invalid;
	}
	
	isValidInput(fieldName): boolean {	
		return this.userForm.controls[fieldName].value !== '' && this.userForm.controls[fieldName].touched
	}
	
	isAddressInputRequired(fieldName): boolean {	
		return this.userForm.get('address')['controls'][fieldName].value === '' && this.userForm.get('address')['controls'][fieldName].invalid;
	}
	
	isAddressValidInput(fieldName): boolean {
		return this.userForm.get('address')['controls'][fieldName].value !== '' && this.userForm.get('address')['controls'][fieldName].touched;
	}
	
	
}
