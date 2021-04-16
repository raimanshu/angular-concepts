import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  sub = new Subject();
  sub1:any = new BehaviorSubject(1);
  sub2:any = new ReplaySubject(2);
  sub3:any = new AsyncSubject();
  constructor() { }
}
