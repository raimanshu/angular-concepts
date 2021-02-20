import { SampleService } from './../services/sample.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  @Input() counter;
  counterChange;

  serviceVariable;

  
  // @Output() newItemEvent = new EventEmitter();

  @Output() public data = new EventEmitter();

  constructor(
    private sampleService : SampleService
  ) { }

  ngOnInit(): void {
    this.counterChange;

    this.data.emit('I am a data variable comming from child component1 to parent component');

    this.serviceVariable = this.sampleService.getComponentData();
    

  }


  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }


}
