import { Component, EventEmitter, Output } from '@angular/core';
import { VotingComponent } from '../voting/voting.component';
import { ResultsComponent } from '../results/results.component';
import { Voto } from '../../models/voto-manager';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ VotingComponent, ResultsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  votos: { [key: number]: Voto } = {}; // Objeto com os votos dos candidatos
  @Output() votosAtualizados = new EventEmitter<Voto[]>(); // Emite a lista de votos atualizada

  processarLista(listaVotos: Voto[]): void {
    console.log('Lista de votos atualizada:', listaVotos);
    this.votosAtualizados.emit(listaVotos); // Emite a lista para o componente pai (AppComponent)
  }
}