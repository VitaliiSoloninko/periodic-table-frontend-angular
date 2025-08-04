import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChemicalElement } from '../../../../interfaces';

@Component({
  selector: 'app-elements-table',
  imports: [],
  templateUrl: './elements-table.component.html',
  styleUrl: './elements-table.component.css',
})
export class ElementsTableComponent {
  @Input() elements: ChemicalElement[] = [];
  @Input() isLoading = false;

  @Output() elementOpen = new EventEmitter<number>();

  onElementOpen(elementId: number): void {
    this.elementOpen.emit(elementId);
  }
}
