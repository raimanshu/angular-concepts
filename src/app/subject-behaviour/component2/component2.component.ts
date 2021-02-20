import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app1-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnDestroy {

  messages: number = 0;
  subscription: Subscription;

  constructor(private messageService: SampleService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => {
        this.messages = this.messages + message;
      });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
