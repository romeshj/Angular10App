import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-validations-submit',
  templateUrl: './form-validations-submit.component.html',
  styleUrls: ['./form-validations-submit.component.css']
})
export class FormValidationsSubmitComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  
  }
  
  submitForm(f){
  console.log(f)
	if(f.submitted && f.valid){
		console.log(f.value);
	 }
  }

}
