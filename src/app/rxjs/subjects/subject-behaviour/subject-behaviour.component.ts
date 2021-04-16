import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RxjsService } from '../../rxjs.service';

@Component({
  selector: 'app-subject-behaviour',
  templateUrl: './subject-behaviour.component.html',
  styleUrls: ['./subject-behaviour.component.css']
})
export class SubjectBehaviourComponent implements OnInit {

  constructor(private service: RxjsService) { }

  ngOnInit(): void {
    // this.service.sub.next(5);

    // setTimeout(() => {
    //   this.service.sub.subscribe((res)=> {
    //     alert(res);
    //   console.log(res);
    //   })
    // }
    // , 200);




  }

  passString() {
    this.service.sub1.next("This is a string");
    this.service.sub1.subscribe(res => {
      alert(res);
    });
  }

  passBlank() {
    alert("Shows error, needs at least one parameter");
    // this.service.sub.next();
    // this.service.sub.subscribe(res => {
    //   alert(res);
    // });
  }

  behaviourSubjectInsideComponent() {
    const subject = new BehaviorSubject(123);

    // two new subscribers will get initial value => output: 123, 123
    subject.subscribe(console.log);
    subject.subscribe(console.log);

    // two subscribers will get new value => output: 456, 456
    subject.next(456);

    // new subscriber will get latest value (456) => output: 456
    subject.subscribe(console.log);

    // all three subscribers will get new value => output: 789, 789, 789
    subject.next(789);

    // output: 123, 123, 456, 456, 456, 789, 789, 789
  }

  ngOnDestroy(){
    this.service.sub1.unsubscribe();
  
  }

}
