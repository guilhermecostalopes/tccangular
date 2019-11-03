import { UsuarioServiceService } from './service/usuario-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormularioComponent } from './view/usuario/usuario-formulario/usuario-formulario.component';
import { UsuarioPesquisarComponent } from './view/usuario/usuario-pesquisar/usuario-pesquisar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UsuarioServiceService],
  declarations: [UsuarioFormularioComponent, UsuarioPesquisarComponent]
})
export class UsuarioModule { }
