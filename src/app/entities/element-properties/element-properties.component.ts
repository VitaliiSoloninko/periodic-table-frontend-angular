import { Component, Input } from '@angular/core';
import { ChemicalElement } from '../../interfaces';
import { PropertyRowComponent } from '../../shared/property-row/property-row.component';

@Component({
  selector: 'app-element-properties',
  imports: [PropertyRowComponent],
  templateUrl: './element-properties.component.html',
  styleUrl: './element-properties.component.css',
})
export class ElementPropertiesComponent {
  @Input() element: ChemicalElement | null = null;
}
