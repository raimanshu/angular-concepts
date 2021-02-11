import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-password-validation',
  templateUrl: './tdf-password-validation.component.html',
  styleUrls: ['./tdf-password-validation.component.css']
})
export class TdfPasswordValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(data){
    console.log(data);
  }
}
