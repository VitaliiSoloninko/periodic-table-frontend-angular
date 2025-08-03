import { Component, Input } from '@angular/core';
import { ChemicalElement } from '../../../../interfaces';
import { ElementCardComponent } from '../../../element-card/element-card.component';

@Component({
  selector: 'app-search-results',
  imports: [ElementCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {
  @Input() results: ChemicalElement[] = [];
  @Input() isLoading = false;
}
