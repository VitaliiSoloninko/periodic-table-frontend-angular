import { Component } from '@angular/core';
import { ChemicalElement } from '../../interfaces';
import { Router } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { ElementsTableComponent } from '../../entities/elements-table/elements-table.component';

@Component({
  selector: 'app-elements-table-widget',
  imports: [ElementsTableComponent],
  templateUrl: './elements-table-widget.component.html',
  styleUrl: './elements-table-widget.component.css',
})
export class ElementsTableWidgetComponent {
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
