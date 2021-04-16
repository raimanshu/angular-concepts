import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { RxjsService } from '../../rxjs.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private service: RxjsService) { }

  ngOnInit(): void {
  }

  passString(){
    this.service.sub2.next("This is a string");
    this.service.sub2.subscribe(res => {
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
    const sub = new ReplaySubject(3);

    sub.next(1);
    sub.next(2);
    sub.subscribe(console.log); // OUTPUT => 1,2
    sub.next(3); // OUTPUT => 3
    sub.next(4); // OUTPUT => 4
    sub.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
    sub.next(5); // OUTPUT => 5,5 (log from both subscribers)
  }

  ngOnDestroy(){
    this.service.sub2.unsubscribe();
  
  }
}
