import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Voto } from '../../models/voto-manager';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'], // Corrigido para styleUrls (plural)
})
export class ResultsComponent implements OnChanges {
  @Input({ required: true }) votos!: { [key: number]: Voto }; // Entrada de votos do pai
  @Output() listaAtualizada = new EventEmitter<Voto[]>(); // Emite a lista de votos atualizada
  listaVotos: Voto[] = []; // Lista computada de votos

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['votos']) {
      this.listaVotos = Object.values(this.votos); // Atualiza a lista ao receber novos votos
      this.listaAtualizada.emit(this.listaVotos); // Emite a lista atualizada
    }
  }
}
