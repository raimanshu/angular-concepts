import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-du-index',
  templateUrl: './du-index.component.html',
  styleUrls: ['./du-index.component.css']
})
export class DuIndexComponent implements OnInit {

  singleComponent = new FormControl();
  optionList;
  constructor() { 
    this.optionList = [
      {id:1,value:'one'},
      {id:1,value:'two'},
      {id:1,value:'three'},
      {id:1,value:'four'},
      {id:1,value:'five'},
    ]
  }

  ngOnInit(): void {
    this.singleComponent.patchValue(this.optionList[0]);
  }

  getSelectValue(){
    alert(JSON.stringify(this.singleComponent.value));
  }

}
