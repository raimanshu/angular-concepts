import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { RxjsService } from '../../rxjs.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private service: RxjsService) { }

  ngOnInit(): void {
  }

  passString(){
    this.service.sub3.next("This is a string");
    this.service.sub.subscribe(res => {
      alert(res);
    });
  }

  passBlank(){
    this.service.sub3.next();
    this.service.sub3.subscribe(res => {
      alert(res);
    });
  }

  subjectInsideComponent(){
    const sub = new AsyncSubject();

    sub.subscribe(console.log);
    
    sub.next(123); //nothing logged
    
    sub.subscribe(console.log);
    
    sub.next(456); //nothing logged
    sub.complete(); //456, 456 logged by both subscribers
  }

  ngOnDestroy(){
    this.service.sub3.unsubscribe();
  
  }




}
