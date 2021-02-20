import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  stringInterpolation(){
    // alert('working on string interpolatio...');
    // this.router.navigateByUrl('data-binding/string-interpolation');
    this.router.navigate(['data-binding/string-interpolation']);
  }
}
