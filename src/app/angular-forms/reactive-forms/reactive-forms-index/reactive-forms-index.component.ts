import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-index',
  templateUrl: './reactive-forms-index.component.html',
  styleUrls: ['./reactive-forms-index.component.scss']
})
export class ReactiveFormsIndexComponent implements OnInit {

  signup: FormGroup;
  noFileInitialize: boolean;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeRegistration();
  }

  initializeRegistration() {
    this.noFileInitialize = false;
    this.signup = this.fb.group({
      "input_text": "",
      "input_email": "",
      "input_password": "",
      "input_color": "",
      "input_date": "",
      "input_datetime_local": "",
      "input_file": "",
      "input_month": "",
      "input_number": "",
      "input_range": "",
      "input_reset": "",
      "input_search": "",
      "input_tel": "",
      "input_time": "",
      "input_url": "",
      "input_week": "",
      "input_checkbox": "",
      "male": "",
      "female": ""
    })
  }

  initializeForm() {
    this.noFileInitialize = true;
    this.signup = this.fb.group({
      "input_text": "Test",
      "input_email": "test@test.com",
      "input_password": "BH84udf0",
      "input_color": "#595496",
      "input_date": "2021-02-13",
      "input_datetime_local": "2021-02-13T16:01",
      // "input_file": "C:\\fakepath\\ROR.odt",
      "input_month": "2021-02",
      "input_number": 1234567890,
      "input_range": 29,
      "input_reset": "",
      "input_search": "12345abc",
      "input_tel": "1234567890",
      "input_time": "16:03",
      "input_url": "http://localhost:8000/angular-forms/template-driven-forms",
      "input_week": "2021-W06",
      "input_checkbox": "",

      "male": "true",
      "female": "false"
  })
  }

  // {
  //   "input": {
  //     "input_text": "",
  //     "input_email": "rarora+1@anviam.com",
  //     "input_password": "BH84udf0",
  //     "input_color": "",
  //     "input_date": "",
  //     "input_datetime-local": "",
  //     "input_file": "",
  //     "input_month": "",
  //     "input_number": "",
  //     "input_range": "",
  //     "input_reset": "",
  //     "input_search": "",
  //     "input_tel": "",
  //     "input_time": "",
  //     "input_url": "",
  //     "input_week": "",
  //     "input_checkbox": ""
  //   },
  //   "gender": {
  //     "male": "",
  //     "female": ""
  //   }
  // }
}
