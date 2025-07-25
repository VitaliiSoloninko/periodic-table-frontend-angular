import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css',
})
export class NavLinkComponent {
  @Input() routerLink: string = '';
  @Input() text: string = '';
}
