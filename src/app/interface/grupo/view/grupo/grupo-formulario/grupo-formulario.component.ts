import { Component } from '@angular/core';
import { GHComponente } from 'src/app/ghComponente/ghcomponente';
import { GrupoServiceService } from '../../../service/grupo-service.service';

import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Grupo } from '../../../model/grupo';

@Component({
  selector: 'app-grupo-formulario',
  templateUrl: './grupo-formulario.component.html',
  styleUrls: ['./grupo-formulario.component.css']
})
export class GrupoFormularioComponent extends GHComponente {

  constructor(
    protected grupoService: GrupoServiceService,
    protected router: Router,
    protected routaAtual: ActivatedRoute,
    protected confirmationService: ConfirmationService,
    protected messageService: MessageService
  ) {
    super(
      // tslint:disable-next-line:new-parens
      new Grupo,
      'Grupo',
      'grupo',
      grupoService,
      router,
      routaAtual,
      confirmationService,
      messageService
    );
  }
}
