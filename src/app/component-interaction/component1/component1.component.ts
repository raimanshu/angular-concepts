import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Input() counter ;
  counterChange = "dddd"
  @Output() newItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.counterChange ;
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


}
