import { GrupoPesquisarComponent } from './view/grupo/grupo-pesquisar/grupo-pesquisar.component';
import { GrupoFormularioComponent } from './view/grupo/grupo-formulario/grupo-formulario.component';
import { GrupoServiceService } from './service/grupo-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GrupoServiceService],
  declarations: [GrupoFormularioComponent, GrupoPesquisarComponent]
})
export class GrupoModule { }
