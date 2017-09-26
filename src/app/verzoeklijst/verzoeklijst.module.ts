import { NgModule } from '@angular/core';
import {VerzoeklijstComponent} from "./verzoeklijst.component";
import {VerzoekdetailsService} from "../verzoekdetails/verzoekdetails.service";
import { BrowserModule } from '@angular/platform-browser';
import {DoubleTextModule} from "../pipes/doubleText/double-text.module";

@NgModule({
  imports: [BrowserModule, DoubleTextModule],
  declarations: [ VerzoeklijstComponent ],
  exports: [ VerzoeklijstComponent ],
  providers: [ VerzoekdetailsService ]
})
export class VerzoeklijstModule { }
