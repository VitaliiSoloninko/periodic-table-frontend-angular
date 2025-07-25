import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forward-button',
  imports: [RouterLink],
  templateUrl: './forward-button.component.html',
  styleUrl: './forward-button.component.css',
})
export class ForwardButtonComponent {
  @Input() routerLink: string = '/';
  @Input() text: string = 'Weiter';
}
