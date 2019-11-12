import { UsuarioFormularioComponent } from './../view/usuario/usuario-formulario/usuario-formulario.component';
import { UsuarioPesquisarComponent } from '../view/usuario/usuario-pesquisar/usuario-pesquisar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const moduleRoutes: Routes = [
  {
    path: 'usuario/pesquisar',
    component: UsuarioPesquisarComponent
  }
  ,
  {
    path: 'usuario/incluir',
    component: UsuarioFormularioComponent
  }
  ,
  {
    path: 'usuario/:codigo/alterar',
    component: UsuarioFormularioComponent
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
export class UsuarioRoutingModule { }
