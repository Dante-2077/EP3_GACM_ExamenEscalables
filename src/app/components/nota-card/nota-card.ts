import { Component, input } from '@angular/core';
import { Nota } from '../../interfaces/nota.interface';

@Component({
  imports: [],
  selector: 'app-nota-card',
  styleUrl: './nota-card.css',
  templateUrl: './nota-card.html',
})
export class NotaCard {

  nota = input.required<Nota>();
}
