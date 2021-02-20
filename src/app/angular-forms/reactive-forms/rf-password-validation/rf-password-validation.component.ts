import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../custom-validators/sample.validators';

@Component({
  selector: 'app-rf-password-validation',
  templateUrl: './rf-password-validation.component.html',
  styleUrls: ['./rf-password-validation.component.scss']
})
export class RfPasswordValidationComponent implements OnInit {

  signup: FormGroup;
  signup2: FormGroup;
  noFileInitialize: boolean;
  sub = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeRegistration();
  }

  initializeRegistration() {
    this.noFileInitialize = false;
    this.signup = this.fb.group({
      "password": ["", [Validators.required, Validators.minLength(6)]],
      "confirm_password": ["", Validators.required],
    }, {
      validators: MustMatch('password', 'confirm_password')
    })

    this.signup2 = this.fb.group({
      "password2": ["", [Validators.required, Validators.minLength(6)]],
      "confirm_password2": ["", Validators.required],
    }, {
      validators: MustMatch('password2', 'confirm_password2')
    })
  }

  get f() {
    return this.signup.controls;
  }

  get f2() {
    return this.signup2.controls;
  }

  onSubmitForm() {
    this.sub = true;
    if (this.signup.invalid) {
      return
    }
    console.log(this.signup.value);
  }

  onSubmitForm2() {
    if (this.signup2.invalid) {
      return
    }
    console.log(this.signup2.value);
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
