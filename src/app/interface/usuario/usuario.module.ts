import { UsuarioServiceService } from './service/usuario-service.service';
import { UsuarioFormularioComponent } from './view/usuario/usuario-formulario/usuario-formulario.component';
import { UsuarioPesquisarComponent } from './view/usuario/usuario-pesquisar/usuario-pesquisar.component';
import { UsuarioRoutingModule } from './routes/usuario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  providers: [UsuarioServiceService],
  declarations: [UsuarioFormularioComponent, UsuarioPesquisarComponent]
})
export class UsuarioModule { }
