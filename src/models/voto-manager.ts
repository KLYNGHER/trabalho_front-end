// Interface para definir o contrato de votos
export interface IVoto {
    candidato: number; // Número do candidato
    votos: number;     // Quantidade de votos
  }
  
  // Classe para implementar o voto com base na interface IVoto
  export class Voto {
    candidato: number;
    votos: number;
  
    constructor(voto: IVoto) {
      this.candidato = voto.candidato;
      this.votos = voto.votos;
    }
  }
  
  