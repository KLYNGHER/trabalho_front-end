import { Component } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Voto } from '../models/voto-manager';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  
              BodyComponent, 
              FooterComponent, 
              HeaderComponent,
              ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'urna-eletronica';
  listaDeVotos: Voto[] | undefined;

  atualizarVotos(listaVotos: Voto[]): void {
    this.listaDeVotos = listaVotos;
    console.log('Votos no AppComponent:', this.listaDeVotos);
  }
}
