export class StatusAdocao {

  static readonly DISPONIVEL: StatusAdocao = {id: 1, sigla: 'D', descricao: 'Disponível'};
  static readonly EM_PROCESSO: StatusAdocao = {id: 2, sigla: 'P', descricao: 'Em processo de adoção'};
  static readonly ADOTADO: StatusAdocao = {id: 3, sigla: 'A', descricao: 'Adotado'};

  id: number;
  sigla: string;
  descricao: string;

  static getSigla(statusAdocao: StatusAdocao): string {
    return statusAdocao?.sigla;
  }

  static valueOfBySigla(sigla: string): any {
    return STATUS_ADOCAO.find((status: StatusAdocao) => status.sigla === sigla);
  }

}

export const STATUS_ADOCAO: StatusAdocao[] = [
  StatusAdocao.DISPONIVEL, StatusAdocao.EM_PROCESSO, StatusAdocao.ADOTADO
];
