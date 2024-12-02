import { Component, Input } from '@angular/core';
import { Voto } from '../../models/voto-manager';

@Component({
  selector: 'app-voting',
  standalone: true,
  imports: [],
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.css'
})

export class VotingComponent {
  @Input() votos!: { [key: number]: Voto }; // Armazena os votos como um mapa
  campo1: string = ''; // Primeiro número do voto
  campo2: string = ''; // Segundo número do voto

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
    const candidato = parseInt(this.campo1 + this.campo2, 10); // Concatena os campos para formar o número do candidato
    if (this.votos[candidato]) {
      this.votos[candidato].votos++; // Incrementa o voto para o candidato existente
    } else {
      this.votos[candidato] = new Voto({ candidato, votos: 1 }); // Adiciona um novo candidato com um voto
    }

    alert(`Voto registrado para o candidato ${candidato}`);
    this.corrige(); // Limpa os campos após registrar o voto
  }

  votarBranco(): void {
    alert('Voto registrado em BRANCO.');
    this.corrige();
  }
}