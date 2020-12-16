import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404twoComponent } from './page404two/page404two.component';
import { SecondComponent } from './second/second.component';
import { TwoComponent } from './two.component';

const routes: Routes = [
  {
    path: '', component: TwoComponent, children: [
      { path: 'second', component: SecondComponent },
      { path: 'first', loadChildren: () => import(`./first/first.module`).then(m => m.FirstModule) },
      { path: '', redirectTo: 'second', pathMatch: 'full' },
      { path: '**', component: Page404twoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
