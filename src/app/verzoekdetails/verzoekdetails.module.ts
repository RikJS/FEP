import { NgModule } from '@angular/core';
import {VerzoekdetailsComponent} from './verzoekdetails.component';
import {VerzoekdetailsService} from "./verzoekdetails.service";
@NgModule({
  declarations: [ VerzoekdetailsComponent ],
  exports: [ VerzoekdetailsComponent ],
  providers: [VerzoekdetailsService]
})
export class VerzoekdetailsModule { }
