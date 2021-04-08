import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  c2 = {
    'font-weight': 'bold'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
