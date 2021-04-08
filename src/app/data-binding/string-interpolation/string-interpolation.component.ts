import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {

  variable_1 = "This is 'variable_1' value";
  variable_2 = 5;
  variable_3 = 1.5;
  variable_4 = null;
  variable_5 = undefined;
  variable_6 = [1,'2'];
  variable_7 = {1:'value'};

  constructor() { }

  ngOnInit(): void {
  }

  functionReturn(){
    return this.variable_1;
  }

}
