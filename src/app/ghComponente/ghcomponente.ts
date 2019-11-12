import { OnInit } from '@angular/core';
import { Message } from '../toast/message';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { Grupo } from '../interface/grupo/model/grupo';
import { Usuario } from '../interface/usuario/model/usuario';

export class GHComponente implements OnInit {

  private imprmir: any;

  /**
   * Relativa a imagens
   */
  protected logomarcaFoto: any;
  protected nome: string;
  protected nomeCorreto: string;
  protected extensao: string;
  protected tamanho: number;
  protected selecaoBusca: any;
  protected entidadePesquisa: any[];
  protected id: any;
  protected antesDeletarAlterar: boolean;

  protected msgs: Message[] = [];
  public   home: MenuItem;
  public   items: MenuItem[];
  public   tituloMenu: string;

  protected mostrarPesquisa: boolean;

  protected alteracao: boolean;

  constructor(
    protected modelo: any,
    protected label: string,
    protected pagina: string,
    protected servico: any,
    protected router: Router,
    protected routaAtual: ActivatedRoute,
    protected confirmationService: ConfirmationService,
    protected messageService: MessageService
  ) {}

  ngOnInit() {
    this.mostrarPesquisa = false;
    this.antesDeletarAlterar = false;
    this.breadcrumb();
    const rota = this.routaAtual.snapshot.url[1];
    if (rota !== undefined && rota.path !== 'novo'
      && rota.path !== 'pesquisar') {
      this.preencherAlteracao();
    }
  }

  protected breadcrumb() {
    this.alteracao = false;
    if (this.routaAtual.snapshot.url[1] !== undefined
      && this.routaAtual.snapshot.url[1].path === 'pesquisar') {
      this.items = [
        {label: 'Dashboard', separator: true, routerLink: ['/']},
        {label: this.label, styleClass : 'ui-menuitem-text'}
      ];
    } else {
      if (String(this.routaAtual.snapshot.url[1]) === 'novo') {
        this.tituloMenu = 'Novo';
      } else {
        this.tituloMenu = 'Alterar';
        this.id = this.routaAtual.snapshot.url[1].path;
        this.alteracao = true;
      }
      this.items = [
        {label: 'Dashboard', separator: true, routerLink: ['/']},
        {label: 'Pesquisar ' + this.label, separator: true, routerLink: ['/' + this.pagina + '/pesquisar']},
        {label: this.tituloMenu + ' ' + this.label}
      ];
    }
    this.home = {icon: 'pi pi-home', styleClass: 'ui-breadcrumb: none'};
  }

  public novo() {
    console.log('Novo(a) ' + this.label);
    this.router.navigate(['/' + this.pagina + '/novo']);
  }

  public voltar() {
    console.log('Voltar ' + this.label);
    this.router.navigate(['/' + this.pagina + '/pesquisar']);
  }

  changePage(event: any) {
    this.pesquisar(true);
  }

  public pesquisar(mostrarMensagem: boolean) {
    this.mostrarPesquisa = false;
    this.servico.pesquisar(this.modelo).subscribe(
      (data: any) => {
        this.msgs = [];
        this.entidadePesquisa = data;
        if (mostrarMensagem) {
          this.mensagemTela(data.tipoMensagem.tipo, data.tipoMensagem.sumario, data.tipoMensagem.mensagem);
        }
        if (this.entidadePesquisa.length > 0) {
          this.mostrarPesquisa = true;
        }
      }, (err: any) => {
        this.mensagemTela('error', 'Mensagem de erro', 'Erro no servidor !');
      }
    );
    console.log('Pesquisar: ' + this.modelo);
  }

  public limpar() {
    console.log('Limpar ' + this.modelo);
    this.modelo.id = null;
    this.modelo.dataCadastro = null;
    if (this.modelo instanceof Grupo) {
      this.modelo.nome = null;
    } else if (this.modelo instanceof Usuario) {
      this.modelo.nome = null;
      this.modelo.sobrenome = null;
      this.modelo.dataAniversario = null;
    }
    this.entidadePesquisa = [];
    this.mostrarPesquisa = false;
    console.log('Limpar depois: ' + this.modelo);
  }

  public salvar() {
    this.servico.salvar(this.modelo).subscribe(
      (data: any) => {
        this.msgs = [];
        this.msgs.push({severity: data.tipoMensagem.tipo, summary: data.tipoMensagem.sumario, detail: data.tipoMensagem.mensagem});
        this.messageService.add({severity: data.tipoMensagem.tipo, summary: data.tipoMensagem.sumario, detail: data.tipoMensagem.mensagem});
        this.redirecionamentoAposMensagem(data, false);
      }, (err: any) => {
        this.mensagemTela('error', 'Mensagem de erro', 'Erro no servidor !');
      }
    );
    console.log('salvar: ' + this.modelo);
  }

  public alterar() {
    this.antesAlterarDeletar(this.selecaoBusca);
    if (!this.antesDeletarAlterar) {
      console.log('Alterar ' + this.label);
      this.router.navigate(['/' + this.pagina + '/' + this.selecaoBusca.id]);
      console.log('Alterar: ' + this.modelo);
    }
  }

  public deletar() {
    this.antesAlterarDeletar(this.selecaoBusca);
    if (!this.antesDeletarAlterar) {
      this.confirmationService.confirm({
        message: 'Deseja excluir este registro ?',
        accept: () => {
          this.servico.excluir(this.selecaoBusca.id).subscribe(
            (data: any) => {
              this.mensagemTela(data.tipoMensagem.tipo, data.tipoMensagem.sumario, data.tipoMensagem.mensagem);
              this.redirecionamentoAposMensagem(data, true);
              console.log('Deletar: ' + this.selecaoBusca);
            }
          );
        }
      });
      console.log('Deletar ' + this.label);
    }
  }

  protected antesAlterarDeletar(selecao: any) {
    this.antesDeletarAlterar = false;
    if (selecao === undefined || selecao == null) {
      this.mensagemTela('error', 'Mensagem de erro', 'Deve selecionar uma linha da grade para alterar !');
      this.antesDeletarAlterar = true;
      return true;
    }
    return false;
  }

  protected mensagemTela(tipoMensagem: string, sumario: string, mensagem: string) {
    this.msgs = [];
    this.msgs.push({severity: tipoMensagem, summary: sumario, detail: mensagem});
    this.messageService.add({severity: tipoMensagem, summary: sumario, detail: mensagem});
  }

  protected preencherAlteracao() {
    this.servico.buscarPorId(this.id).subscribe(
      (data: any) => {
        this.modelo = data.lista[0];
      }, (err: any) => {

      }
    );
  }

  protected redirecionamentoAposMensagem(data: any, mesmaPagina: boolean) {
    if (data.tipoMensagem.tipo !== 'error') {
      setTimeout(
        () => {
          mesmaPagina ? this.pesquisar(false) : this.router.navigate([this.pagina]);
        },
      );
    }
  }
}
