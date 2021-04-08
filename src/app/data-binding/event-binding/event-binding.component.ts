import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  eventData;
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  showText(event){
    console.log(event);
    this.text = "This is shown on click inside function";

  }
}
