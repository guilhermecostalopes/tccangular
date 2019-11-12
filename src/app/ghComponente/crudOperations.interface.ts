import 'rxjs/add/operator/map';

export interface CrudOperations<T, ID> {
salvar(t: T);
bloquear(t: T);
desbloquear(t: T);
inativo(t: T);
pesquisar(t: T);
excluir(id: ID);
buscarPorId(id: ID);
buscarTodosStatusDoRegistro();
buscarTodosSimNao();
imprimirTodos();
}
