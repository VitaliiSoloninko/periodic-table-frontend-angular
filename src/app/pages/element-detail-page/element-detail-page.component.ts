import { Component } from '@angular/core';
import { BackButtonComponent } from '../../features/back-button/back-button.component';
import { TitleComponent } from '../../shared/title/title.component';
import { ElementDetailComponent } from '../../widgets/element-detail/element-detail.component';

@Component({
  selector: 'app-element-detail-page',
  imports: [TitleComponent, BackButtonComponent, ElementDetailComponent],
  templateUrl: './element-detail-page.component.html',
  styleUrl: './element-detail-page.component.css',
})
export class ElementDetailPageComponent {}
