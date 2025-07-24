import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { AllElementsTableComponent } from '../../widgets/all-elements-table/all-elements-table.component';

@Component({
  selector: 'app-elements-page',
  imports: [TitleComponent, AllElementsTableComponent],
  templateUrl: './elements-page.component.html',
  styleUrl: './elements-page.component.css',
})
export class ElementsPageComponent {}
