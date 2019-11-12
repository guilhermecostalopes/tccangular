import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../../service/usuario-service.service';
import { Usuario } from '../../../model/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GHComponente } from 'src/app/ghComponente/ghcomponente';

@Component({
  selector: 'app-usuario-pesquisar',
  templateUrl: './usuario-pesquisar.component.html',
  styleUrls: ['./usuario-pesquisar.component.css']
})
export class UsuarioPesquisarComponent extends GHComponente {

  constructor(
    protected usuarioService: UsuarioServiceService,
    protected router: Router,
    protected routaAtual: ActivatedRoute,
    protected confirmationService: ConfirmationService,
    protected messageService: MessageService
  ) {
    super(
      // tslint:disable-next-line:new-parens
      new Usuario,
      'Usuário',
      'usuario',
      usuarioService,
      router,
      routaAtual,
      confirmationService,
      messageService
    );
  }
}
