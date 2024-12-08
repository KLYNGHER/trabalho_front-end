import { Component } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BodyComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'urna-eletronica';
  /*listaDeVotos: Voto[] | undefined;

  atualizarVotos(listaVotos: Voto[]): void {
    this.listaDeVotos = listaVotos;
    console.log('Votos no AppComponent:', this.listaDeVotos);
  }*/
}
