import { Component, OnInit } from '@angular/core';


export class User {
  public name: string;
  public email: string;
  public password: string;
  public hobbies: string;
}

@Component({
  selector: 'app-form-model-user',
  templateUrl: './form-model-user.component.html',
  styleUrls: ['./form-model-user.component.css']
})
export class FormModelUserComponent implements OnInit {
	user = new User();

  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  constructor() { }
 ngOnInit(): void {
  }
  onSubmit(form) {
    console.log(form.value)
  }

}
