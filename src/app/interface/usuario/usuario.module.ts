import { UsuarioServiceService } from './service/usuario-service.service';
import { UsuarioFormularioComponent } from './view/usuario/usuario-formulario/usuario-formulario.component';
import { UsuarioPesquisarComponent } from './view/usuario/usuario-pesquisar/usuario-pesquisar.component';
import { UsuarioRoutingModule } from './routes/usuario-routing.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConfirmationService,
  MessageService
} from 'primeng/api';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    UsuarioRoutingModule,
    PrimeNgModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    UsuarioServiceService,
    ConfirmationService,
    MessageService
  ],
  declarations: [UsuarioFormularioComponent, UsuarioPesquisarComponent]
})
export class UsuarioModule { }
