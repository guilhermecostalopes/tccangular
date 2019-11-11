import { UsuarioServiceService } from './service/usuario-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormularioComponent } from './view/usuario/usuario-formulario/usuario-formulario.component';
import { UsuarioPesquisarComponent } from './view/usuario/usuario-pesquisar/usuario-pesquisar.component';
import { UsuarioRoutingModule } from './routes/usuario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  providers: [UsuarioServiceService],
  declarations: [UsuarioFormularioComponent, UsuarioPesquisarComponent]
})
export class UsuarioModule { }
