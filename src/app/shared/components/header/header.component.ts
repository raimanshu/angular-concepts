import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToPreviousPage(){
    history.back()
  }

  goToNextPage(){
    history.forward();
  }

  toggleSideNav(){
    $('#sidebar').toggleClass('active');
  }
}
