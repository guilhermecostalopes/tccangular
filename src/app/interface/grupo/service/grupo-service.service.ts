import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../model/grupo';
import { CrudService } from 'src/app/ghComponente/gh.service';
import { BASE_SISTEMA } from 'src/app/ghComponente/base-api-url-default';

@Injectable({
  providedIn: 'root'
})
export class GrupoServiceService extends CrudService<Grupo, number> {

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient, 'grupos');
  }

  listarPorNome(p: Grupo) {
    return this.httpClient.post(BASE_SISTEMA + this.base + '/listarPorNome', p);
  }
}
