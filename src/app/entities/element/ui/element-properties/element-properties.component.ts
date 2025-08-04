import { Component, Input } from '@angular/core';
import { PropertyRowComponent } from '../../../../shared/property-row/property-row.component';
import { ChemicalElement } from '../../model';

@Component({
  selector: 'app-element-properties',
  imports: [PropertyRowComponent],
  templateUrl: './element-properties.component.html',
  styleUrl: './element-properties.component.css',
})
export class ElementPropertiesComponent {
  @Input() element: ChemicalElement | null = null;
}
