import { Component, NgZone, OnInit } from '@angular/core';
// import { Interface } from 'readline';
import '../external-js-file-comm/js-inside-component.js'
// import { test1 } from '../../../assets/js/js-inside-assets'; 
// declare var insideComponent: any;

declare var foo;

// function hello() {
//   alert('Hello!!!');
// }

declare var myExtObject: any;
declare var webGlObject: any;
declare var insideComponent:any;
declare var foo:any;
declare var test1:any;

// declare const myTest: any;
declare let myTest: any;

declare function myMethod();

@Component({
  selector: 'app-external-js-file-comm',
  templateUrl: './external-js-file-comm.component.html',
  styleUrls: ['./external-js-file-comm.component.css']
})
export class ExternalJsFileCommComponent implements OnInit {

  constructor(
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    // window['angularComponentReference'] = { component: this, zone: this.ngZone, loadAngularFunction: () => this.angularFunctionCalled(), };  


    // (<any>window).my = (<any>window).my || {};
    // (<any>window).my.namespace = (<any>window).my.namespace || {};
    // (<any>window).my.namespace.publicFunc = this.publicFunc.bind(this);
    
    window['angularComponentReference'] = { component: this, zone: this.ngZone, loadAngularFunction: () => this.angularFunctionCalled(), };  

  }

  ngOnDestroy() {
    // window.angularComponent = null;
  }

  // -------------------------------
  angularFunctionCalled() {
    alert('Angular 2+ function is called');
  }

  CallFunction1() {
    myExtObject.func1();
  }

  CallFunction2() {
    myExtObject.func2();
  }

  CallFunction3() {
    webGlObject.init();
  }

  CallFunction4(){
    insideComponent();
    // foo();
  }

  CallFunction5(){
    // insideComponent();
    foo();
  }

  CallFunction6(){
    // insideComponent();
    test1.func1();
  }


  // ngOnDestroy() {
  //   (<any>window).my.namespace.publicFunc = null;
  // }

  // publicFunc() {
  //   this.ngZone.run(() => this.privateFunc());
  // }

  // privateFunc() {
  //   // do private stuff
  // }

  // Interface Window { my: any; }

}
