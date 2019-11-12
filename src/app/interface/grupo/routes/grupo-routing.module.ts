import { GrupoPesquisarComponent } from './../view/grupo/grupo-pesquisar/grupo-pesquisar.component';
import { GrupoFormularioComponent } from './../view/grupo/grupo-formulario/grupo-formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes: Routes = [
  {
    path: 'grupo/pesquisar',
    component: GrupoPesquisarComponent
  }
  ,
  {
    path: 'grupo/novo',
    component: GrupoFormularioComponent
  }
  ,
  {
    path: 'grupo/alterar/:codigo',
    component: GrupoFormularioComponent
  }
];

@NgModule({
    exports: [RouterModule],
    imports: [
    RouterModule.forRoot(moduleRoutes,
      {
        useHash: true,
        enableTracing: false
      })
    ],
    providers: [],
    declarations: []
})
export class GrupoRoutingModule { }
