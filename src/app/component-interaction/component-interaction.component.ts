import { SampleService } from './services/sample.service';
import { Component2Component } from './component2/component2.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {

  counter ="I am counter comming from parent to component1 lusing @Input";
  counterChange = '';

  serviceVariable = 'I am a service variable comming from component1'


  @ViewChild(Component2Component) child;

  constructor(
    private sampleService:SampleService
  ) { }

  ngOnInit(): void {
    console.log(this.counter);
    this.sampleService.setComponentData(this.serviceVariable);
  }

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }

  mostrarNumero(obj){
    this.counterChange = obj;
  }

  ngAfterContentInit(){
    
  }

  addItem(event){
    this.counterChange = event;
    console.log(event);
  }

  change_name_age(data) { 
  
    /* Update the current model with 
       the value sent by the child  
       component. */
    // alert(data); 
    this.counterChange = data;
} 

}
