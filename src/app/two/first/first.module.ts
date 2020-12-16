import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { Page404firstComponent } from './page404first/page404first.component';


@NgModule({
  declarations: [FirstComponent, AlphaComponent, BetaComponent, GammaComponent, Page404firstComponent],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
