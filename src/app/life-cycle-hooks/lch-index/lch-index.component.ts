import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lch-index',
  templateUrl: './lch-index.component.html',
  styleUrls: ['./lch-index.component.scss']
})
export class LchIndexComponent implements OnInit, OnChanges, DoCheck,AfterContentChecked,AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  test: number = 0;
  constructor() { console.log("constructor" + this.test++); }

  ngOnInit(): void {
    console.log("ngOnInit" + this.test++);
  }

  ngOnChanges(){
    console.log("ngOnChanges" + this.test++);
  }
  ngDoCheck(){
    console.log("ngDoCheck" + this.test++);
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit" + this.test++);
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked" + this.test++);
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit" + this.test++);
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked" + this.test++);
  }
  ngOnDestroy() {
    console.log("ngOnDestroy" + this.test++);
  }


}
