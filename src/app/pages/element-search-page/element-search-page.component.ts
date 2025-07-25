import { Component } from '@angular/core';
import { ElementSearchComponent } from '../../widgets/element-search/element-search.component';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-element-search-page',
  imports: [ElementSearchComponent, TitleComponent],
  templateUrl: './element-search-page.component.html',
  styleUrl: './element-search-page.component.css',
})
export class ElementSearchPageComponent {}
