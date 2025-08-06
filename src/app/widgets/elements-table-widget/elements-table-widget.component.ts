import { Component, OnInit } from '@angular/core';
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
export class ElementsTableWidgetComponent implements OnInit {
  elements: ChemicalElement[] = [];
  isLoading = false;

  private readonly STORAGE_KEY = 'elements-cache';

  constructor(private router: Router, private elementService: ElementService) {}

  ngOnInit(): void {
    this.loadElements();
  }

  private loadElements(): void {
    const cached = this.getFromLocalStorage();
    if (cached && cached.length > 0) {
      this.elements = cached;
      return;
    }

    this.isLoading = true;
    this.elementService.getAllElements().subscribe({
      next: (elements) => {
        this.elements = elements;
        this.isLoading = false;
        this.saveToLocalStorage(elements);
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }

  private saveToLocalStorage(elements: ChemicalElement[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(elements));
    } catch (error) {}
  }

  private getFromLocalStorage(): ChemicalElement[] | null {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      return null;
    }
  }

  onElementOpen(elementId: number): void {
    this.router.navigate(['/element', elementId]);
  }
}
