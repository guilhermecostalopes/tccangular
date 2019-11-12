import { HttpClient } from '@angular/common/http';
import { CrudOperations } from './crudoperations.interface';
import { BASE_SISTEMA } from './base-api-url-default';

export class CrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected httpClient: HttpClient,
    protected base: string
  ) {}

  salvar(t: T) {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/salvar', t);
  }

  bloquear(t: T) {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/bloquear', t);
  }

  desbloquear(t: T) {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/desbloquear', t);
  }

  inativo(t: T) {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/inativo', t);
  }

  pesquisar(p: T) {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/pesquisar', p);
  }

  excluir(id: ID) {
    return this.httpClient.delete(BASE_SISTEMA + this.base + '/' + id);
  }

  buscarPorId(id: ID) {
    return this.httpClient.get(BASE_SISTEMA + this.base + '/alterar/' + id);
  }

  buscarTodosStatusDoRegistro() {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/todosStatusDoRegistro', null);
  }

  buscarTodosSimNao() {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/simNao', null);
  }

  imprimirTodos() {
    return this.httpClient.get(BASE_SISTEMA + this.base + '/imprimirTodos');
  }
}
