import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
//   template: `
//   <h2>Child Component</h2><i>{{message}}</i>
// `,
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() message:string = "";

  constructor() {
  console.log("ChildComponent:Constructor");
  }

  ngOnChanges() {
    console.log("ChildComponent:OnChanges");
  }


  ngOnInit() {
    console.log("ChildComponent:OnInit");
  }

  ngDoCheck() {
    console.log("ChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("ChildComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ChildComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ChildComponent:OnDestroy");
  }
}