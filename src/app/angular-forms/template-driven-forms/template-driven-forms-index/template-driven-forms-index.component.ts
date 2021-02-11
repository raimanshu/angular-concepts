import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms-index',
  templateUrl: './template-driven-forms-index.component.html',
  styleUrls: ['./template-driven-forms-index.component.css']
})
export class TemplateDrivenFormsIndexComponent implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    temsCondition: '',
    color: ''
  };
  // {
  //   "name": {
  //     "firstName": "",
  //     "lastName": ""
  //   },
  //   "email": "",
  //   "password": "",
  //   "confirmPassword": "",
  //   "temsCondition": ""
  // }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(data) {
    console.log(data);
  }

}
