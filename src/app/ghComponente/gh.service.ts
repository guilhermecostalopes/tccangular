import { HttpClient } from '@angular/common/http';
import { CrudOperations } from './crudoperations.interface';
import { BASE_SISTEMA } from './base-api-url-default';

export class CrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected httpClient: HttpClient,
    protected base: string
  ) {}

  salvar(t: T) {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/inserir', t);
  }

  alterar(t: T) {
    return this.httpClient.put(BASE_SISTEMA + this.base + '/alterar', t);
  }

  pesquisar(p: T) {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/listar', p);
  }

  excluir(id: ID) {
    return this.httpClient.delete(BASE_SISTEMA + this.base + '/' + id);
  }

  buscarPorId(id: ID) {
    return this.httpClient.get(BASE_SISTEMA + this.base + '/alterar/' + id);
  }
}
