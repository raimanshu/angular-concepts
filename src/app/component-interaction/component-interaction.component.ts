import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  counter ="I am counter comming from parent to component1 lusing @Input";
  counterChange;

  constructor() { }

  ngOnInit(): void {
    console.log(this.counter);
  }

  mostrarNumero(obj){
    this.counterChange = obj;
    console.log(obj);
  }

  addItem(event){
    this.counterChange = event;
    console.log(event);
  }

}
