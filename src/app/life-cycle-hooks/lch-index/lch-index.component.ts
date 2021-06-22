import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lch-index',
  templateUrl: './lch-index.component.html',
//   template: `
//   <h2>Life Cycle Hooks</h2>

// `,
  styleUrls: ['./lch-index.component.scss']
})
export class LchIndexComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  public angular: boolean = false;
  public displayChild: boolean = false;
  message;

  constructor() {
    console.log("AppComponent: Constructor");
  }

  setmessage(value) {
    this.message = value;
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }
}
