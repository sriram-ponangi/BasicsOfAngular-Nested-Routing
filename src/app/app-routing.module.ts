import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { Page404Component } from './page404/page404.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'two', loadChildren: () => import(`./two/two.module`).then(m => m.TwoModule) },
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
