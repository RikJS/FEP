import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  email: string;

  constructor(route: ActivatedRoute) {
    this.email = route.snapshot.params['email'];
  }

}
