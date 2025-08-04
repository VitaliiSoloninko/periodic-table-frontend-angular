import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChemicalElement } from '../../entities/element/model';
import { ElementsTableComponent } from '../../entities/element/ui/elements-table/elements-table.component';
import { ElementService } from '../../services/element.service';

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
