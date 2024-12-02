import { Component } from '@angular/core';
import { VotingComponent } from '../voting/voting.component';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [VotingComponent, ResultsComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {}
