import { Component } from '@angular/core';
import { VotoService } from '../../services/voto.service';
import { Voto } from '../../models/voto-manager';

@Component({
  selector: 'app-voting',
  standalone: true,
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent {
  campo1: string = '';
  campo2: string = '';

  constructor(private votoService: VotoService) {}

  inserir(valor: number): void {
    if (!this.campo1) {
      this.campo1 = valor.toString();
    } else if (!this.campo2) {
      this.campo2 = valor.toString();
    }
  }

  corrige(): void {
    this.campo1 = '';
    this.campo2 = '';
  }

  votar(): void {
    const candidato = parseInt(this.campo1 + this.campo2, 10);
    const novoVoto: Voto = { candidato, votos: 1 };
    this.votoService.registrarVoto(novoVoto);
    this.corrige();
  }

  votarBranco(): void {
    const votoBranco: Voto = { candidato: 0, votos: 1 }; // Candidato "0" representa voto em branco
    this.votoService.registrarVoto(votoBranco);
    alert('Voto registrado em BRANCO.');
    this.corrige();
  }
}
