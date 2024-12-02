import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Voto } from '../models/voto-manager';

@Injectable({
  providedIn: 'root',
})
export class VotoService {
  private votosSubject = new BehaviorSubject<{ [key: number]: Voto }>({});
  votos$ = this.votosSubject.asObservable();

  registrarVoto(novoVoto: Voto): void {
    const votosAtuais = this.votosSubject.value;
    const candidato = novoVoto.candidato;

    if (votosAtuais[candidato]) {
      votosAtuais[candidato].votos++;
    } else {
      votosAtuais[candidato] = novoVoto;
    }

    this.votosSubject.next({ ...votosAtuais });
  }
}
