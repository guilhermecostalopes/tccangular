import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { GrupoPesquisarComponent } from './view/grupo/grupo-pesquisar/grupo-pesquisar.component';
import { GrupoFormularioComponent } from './view/grupo/grupo-formulario/grupo-formulario.component';
import { GrupoServiceService } from './service/grupo-service.service';
import { GrupoRoutingModule } from './routes/grupo-routing.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    GrupoRoutingModule,
    PrimeNgModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    GrupoServiceService,
    ConfirmationService,
    MessageService
  ],
  declarations: [GrupoFormularioComponent, GrupoPesquisarComponent]
})
export class GrupoModule { }
