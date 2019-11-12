import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { CrudService } from 'src/app/ghComponente/gh.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService  extends CrudService<Usuario, number> {

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient, 'usuarios');
  }
}
