import { PrincipalComponent } from './interface/principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
