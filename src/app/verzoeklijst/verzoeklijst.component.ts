import { Component } from '@angular/core';
import {VerzoekdetailsService} from "../verzoekdetails/verzoekdetails.service";
import {Verzoekstatus} from "../verzoekdetails/verzoekstatus";
@Component({
  selector: 'verzoeklijst',
  templateUrl: './verzoeklijst.component.html',
  styleUrls: ['./verzoeklijst.component.css']
})

export class VerzoeklijstComponent {
  constructor(private verzoekdetailsService: VerzoekdetailsService) {

  }
  verzoeken = this.verzoekdetailsService.getAllVerzoekDetails();
  verzoekstatussen = Verzoekstatus;

}
