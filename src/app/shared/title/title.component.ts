import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input() colorTitle: string = '';
  @Input() title: string = '';
}
