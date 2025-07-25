import { Component, Input } from '@angular/core';
import { ChemicalElement } from '../../interfaces';
import { ElementCardComponent } from '../element-card/element-card.component';

@Component({
  selector: 'app-element-cart-list',
  imports: [ElementCardComponent],
  templateUrl: './element-cart-list.component.html',
  styleUrl: './element-cart-list.component.css',
})
export class ElementCartListComponent {
  @Input() results: ChemicalElement[] = [];
  @Input() isLoading = false;
}
