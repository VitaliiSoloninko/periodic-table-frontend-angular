import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElementsTableComponent } from '../../entities/elements-table/elements-table.component';
import { ChemicalElement } from '../../interfaces';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-all-elements-table',
  imports: [ElementsTableComponent],
  templateUrl: './all-elements-table.component.html',
  styleUrl: './all-elements-table.component.css',
})
export class AllElementsTableComponent {
  elements: ChemicalElement[] = [];
  isLoading = false;

  constructor(private router: Router, private elementService: ElementService) {}

  ngOnInit(): void {
    this.loadElements();
  }

  private loadElements(): void {
    this.isLoading = true;
    this.elementService.getAllElements().subscribe({
      next: (elements) => {
        this.elements = elements;
        this.isLoading = false;
        console.log('Elements loaded:', elements);
      },
      error: (err) => {
        console.error('Error loading elements:', err);
        this.isLoading = false;
      },
    });
  }

  onElementOpen(elementId: number): void {
    this.router.navigate(['/element', elementId]);
  }
}
