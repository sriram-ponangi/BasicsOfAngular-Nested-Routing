import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { FirstComponent } from './first.component';
import { GammaComponent } from './gamma/gamma.component';
import { Page404firstComponent } from './page404first/page404first.component';

const routes: Routes = [
  {
    path: '', component: FirstComponent, children: [
      
      {
        path: 'alpha', component: AlphaComponent
      },
      {
        path: 'beta', component: BetaComponent
      },
      {
        path: 'gamma', component: GammaComponent
      },
      {
        path: '', redirectTo: 'alpha', pathMatch: 'full'
      },
      { path: '**', component:  Page404firstComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
