import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { GrupoPesquisarComponent } from './view/grupo/grupo-pesquisar/grupo-pesquisar.component';
import { GrupoFormularioComponent } from './view/grupo/grupo-formulario/grupo-formulario.component';
import { GrupoServiceService } from './service/grupo-service.service';
import { GrupoRoutingModule } from './routes/grupo-routing.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    GrupoRoutingModule,
    PrimeNgModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [GrupoServiceService],
  declarations: [GrupoFormularioComponent, GrupoPesquisarComponent]
})
export class GrupoModule { }
