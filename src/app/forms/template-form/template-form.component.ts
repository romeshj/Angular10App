import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  //@ViewChild('f', {static :  false}) signUpForm : NgForm;
  submitted = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  submitForm(f){
	  /*if(this.signUpForm.valid){
		this.submitted = true;
		console.log(this.signUpForm.value);
	  }*/
	  
	  if(f.valid){
		this.submitted = true;
		console.log(f.value);
	  }
  }

}
