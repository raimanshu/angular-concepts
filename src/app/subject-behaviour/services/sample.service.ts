import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private subject = new Subject<any>();

  sendMessage(message) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next(0);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
