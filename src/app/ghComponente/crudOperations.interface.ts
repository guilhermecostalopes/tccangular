import 'rxjs/add/operator/map';

export interface CrudOperations<T, ID> {
salvar(t: T);
alterar(t: T);
pesquisar(t: T);
excluir(id: ID);
buscarPorId(id: ID);
}
