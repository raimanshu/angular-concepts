import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { RxjsService } from '../../rxjs.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private service: RxjsService) { }

  ngOnInit(): void {
  }

  passString(){
    this.service.sub.next("This is a string");
    this.service.sub.subscribe(res => {
      alert(res);
    });
  }

  passBlank(){
    this.service.sub.next();
    this.service.sub.subscribe(res => {
      alert(res);
    });
  }

  subjectInsideComponent(){
    const sub = new Subject();

    sub.next(1);
    sub.subscribe(x => {
      console.log('Subscriber A', x);
    });
    sub.next(2); // OUTPUT => Subscriber A 2
    sub.subscribe(x => {
      console.log('Subscriber B', x);
    });
    sub.next(3); // OUTPUT => Subscriber A 3, Subscriber B 3 (logged from both subscribers)
  }

  ngOnDestroy(){
    this.service.sub.unsubscribe();
  
  }




}
