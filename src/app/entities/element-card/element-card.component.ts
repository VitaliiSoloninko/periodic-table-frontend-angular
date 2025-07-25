import { Component, Input } from '@angular/core';
import { ChemicalElement } from '../../interfaces';

@Component({
  selector: 'app-element-card',
  imports: [],
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.css',
})
export class ElementCardComponent {
  @Input() element: ChemicalElement | null = null;
}
