import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app1-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  constructor(private messageService: SampleService) { }

  firstValue = 1;
  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage(this.firstValue);
  }

  clearMessages(): void {
      // clear messages
      this.messageService.clearMessages();
  }

}
