import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { Page404twoComponent } from './page404two/page404two.component';
import { SecondComponent } from './second/second.component';
import { FirstModule } from './first/first.module';



@NgModule({
  declarations: [TwoComponent, Page404twoComponent, SecondComponent],
  imports: [
    CommonModule,
    TwoRoutingModule,
    FirstModule
  ]
})
export class TwoModule { }
