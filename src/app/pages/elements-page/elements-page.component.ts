import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { ElementsTableWidgetComponent } from '../../widgets/elements-table-widget/elements-table-widget.component';

@Component({
  selector: 'app-elements-page',
  imports: [TitleComponent, ElementsTableWidgetComponent],
  templateUrl: './elements-page.component.html',
  styleUrl: './elements-page.component.css',
})
export class ElementsPageComponent {}
