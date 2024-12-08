import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Voto } from '../models/voto-manager';

@Injectable({
  providedIn: 'root', //vai ser acessível globalmente
})
export class VotoService {
  private votosSubject = new BehaviorSubject<{ [key: number]: Voto }>({}); //gerencia o estado dos votos
  votos$ = this.votosSubject.asObservable(); //converte um BehaviorSubject em observable 
                                             //permite que a comunicação em tempo real

  registrarVoto(novoVoto: Voto): void {
    const votosAtuais = this.votosSubject.value;
    const candidato = novoVoto.candidato;

    if (votosAtuais[candidato]) {
      votosAtuais[candidato].votos++;
    } else {
      votosAtuais[candidato] = novoVoto;
    }

    this.votosSubject.next({ ...votosAtuais });//cria um novo objeto, garantindo que as mudanças seja detectadas
  }
}
