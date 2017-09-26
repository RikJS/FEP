import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EventsDemoComponent} from "./eventsDemo.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [ EventsDemoComponent ],
  exports: [ EventsDemoComponent ]
})
export class EventsDemoModule { }
