import { Component } from '@angular/core';
import {VerzoekdetailsService} from "../verzoekdetails/verzoekdetails.service";
import {Verzoekstatus} from "../verzoekdetails/verzoekstatus";
@Component({
  selector: 'eventsDemo',
  templateUrl: './eventsDemo.component.html',
  styleUrls: ['./eventsDemo.component.css']
})

export class EventsDemoComponent {
  constructor() {
  }
  logs: string[] = [];

  addToLog(log: string) {
    this.logs.push(log);
  }
}
