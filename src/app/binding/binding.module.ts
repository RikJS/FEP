import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BindingComponent} from "./binding.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [ BindingComponent ],
  exports: [ BindingComponent ]
})
export class BindingModule { }
