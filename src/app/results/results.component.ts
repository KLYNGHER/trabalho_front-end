import { Component, OnInit, Input } from '@angular/core';
import { VotoService } from '../../services/voto.service';
import { Voto } from '../../models/voto-manager';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  listaVotos: Array<Voto> = [];

  constructor(private votoService: VotoService) {}

  ngOnInit(): void {
    this.votoService.votos$.subscribe((votos) => {
      this.listaVotos = Object.values(votos); // Atualiza a lista de votos
    });
  }
}
