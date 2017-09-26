import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DetailsComponent} from "./details.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [ DetailsComponent ],
  exports: [ DetailsComponent ]
})
export class DetailsModule { }
