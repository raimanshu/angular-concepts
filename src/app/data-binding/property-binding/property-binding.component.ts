import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  variable_1:boolean = true;
  // variable_2 = 5;
  // variable_3 = 1.5;
  // variable_4 = null;
  // variable_5 = undefined;
  // variable_6 = [1,'2'];
  // variable_7 = {1:'value'};

  constructor() { }

  ngOnInit(): void {
  }

  functionReturn(){
    return this.variable_1;
  }

}
