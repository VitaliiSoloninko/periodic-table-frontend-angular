import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  imports: [],
  templateUrl: './property-row.component.html',
  styleUrl: './property-row.component.css',
})
export class PropertyRowComponent {
  @Input() label: string = '';
  @Input() value: string | number | null | undefined = '';
}
