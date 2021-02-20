import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-password-validation',
  templateUrl: './tdf-password-validation.component.html',
  styleUrls: ['./tdf-password-validation.component.scss']
})
export class TdfPasswordValidationComponent implements OnInit {

  sub = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(data){
    this.sub = true;
    if (data.invalid) {
      return
    }
    console.log(data.value);
  }
}
