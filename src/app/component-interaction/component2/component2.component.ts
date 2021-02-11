import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  message = 'Hola Mundo!';
  
  constructor() { }

  ngOnInit(): void {
  }

}
