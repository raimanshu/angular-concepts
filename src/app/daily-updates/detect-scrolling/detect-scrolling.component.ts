import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-detect-scrolling',
  templateUrl: './detect-scrolling.component.html',
  styleUrls: ['./detect-scrolling.component.css']
})
export class DetectScrollingComponent implements OnInit {

  // @HostListener('scroll', ['$event'])
  // scrollHandler(event) {
  //   console.debug("Scroll Event");
  // }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    console.debug("Scroll Event");
  }


  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    // bootom
    if(event.target.scrollHeight == Math.floor(event.target.scrollTop) + event.target.clientHeight){
      alert('Reached at bottom of div');
    } 
    if(event.target.scrollTop == 0){
      alert('Reached at top of div');
    }

    // // top
    // scrolltop == 0

    
    // visible height + pixel scrolled >= total height 
    // if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
    //   console.log("End");
    // }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onElementScroll($event) {
    console.log("element scrolling");
  }

  onWindowScroll($event) {
    console.log("window scrolling");
  }

}
