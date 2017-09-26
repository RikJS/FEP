import { Component } from '@angular/core';
import {VerzoekdetailsService} from "../verzoekdetails/verzoekdetails.service";
import {Verzoekstatus} from "../verzoekdetails/verzoekstatus";
@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent {
  public name: string;

  constructor() {
    this.name = 'Hello World';
  }

  setName(name: string) {
    this.name = name;
  }
}
