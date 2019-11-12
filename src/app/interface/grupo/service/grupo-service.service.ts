import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../model/grupo';
import { CrudService } from 'src/app/ghComponente/gh.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoServiceService extends CrudService<Grupo, number> {

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient, 'grupo');
  }
}
