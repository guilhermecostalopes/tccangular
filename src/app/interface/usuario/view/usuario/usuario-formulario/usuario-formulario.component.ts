import { OnInit, Component } from '@angular/core';
import { GHComponente } from 'src/app/ghComponente/ghcomponente';
import { UsuarioServiceService } from '../../../service/usuario-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Usuario } from '../../../model/usuario';
import { Grupo } from 'src/app/interface/grupo/model/grupo';
import { GrupoServiceService } from 'src/app/interface/grupo/service/grupo-service.service';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.css']
})
export class UsuarioFormularioComponent extends GHComponente implements OnInit {

  public grupos: Grupo[];

  constructor(
    protected grupoService: GrupoServiceService,
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

  ngOnInit() {
    super.ngOnInit();
    this.todosGrupos();
  }

  public todosGrupos() {
    // tslint:disable-next-line:new-parens
    const grupo = new Grupo;
    this.grupoService.pesquisar(grupo).subscribe(
      (data: any) => {
        this.grupos = data.lista;
      }, err => {

      }
    );
  }
}
