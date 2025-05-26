import {StatusAdocao} from "./status-adocao.model";

export class Animal {

  id: number;
  nome: string;
  tipoAnimal: string;
  idade: number;
  raca: string;
  statusAdocao: StatusAdocao | string;
  imagem: string;
  descricao: string;
}
