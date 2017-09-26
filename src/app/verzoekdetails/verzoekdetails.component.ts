import { Component } from '@angular/core';
import {VerzoekdetailsService} from "./verzoekdetails.service";
@Component({
  selector: 'verzoekdetails',
  templateUrl: './verzoekdetails.component.html',
  styleUrls: ['./verzoekdetails.component.css']
})

export class VerzoekdetailsComponent {
  constructor(private verzoekdetailsService: VerzoekdetailsService) { }
  verzoek = this.verzoekdetailsService.getVerzoekDetails();
}
