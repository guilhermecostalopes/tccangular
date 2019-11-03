import { Grupo } from '../../grupo/model/grupo';
import { SuperGrupo } from '../../model/supergrupo';

export class  Usuario extends SuperGrupo{
    grupo: Grupo;
    nome: string;
    sobrenome: string;
    dataaniversario: string;
}
