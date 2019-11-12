import { PrincipalComponent } from './interface/principal/principal.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
