import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChemicalElement } from '../../interfaces';
import { ElementService } from '../../services/element.service';
import { ElementCardComponent } from '../../entities/element-card/element-card.component';
import { ElementPropertiesComponent } from '../../entities/element-properties/element-properties.component';

@Component({
  selector: 'app-element-detail',
  imports: [ElementCardComponent, ElementPropertiesComponent],
  templateUrl: './element-detail.component.html',
  styleUrl: './element-detail.component.css',
})
export class ElementDetailComponent implements OnInit {
  element: ChemicalElement | null = null;
  elementId: number | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elementService: ElementService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.elementId = +params['id'];
      if (this.elementId) {
        this.loadElement(this.elementId);
      }
    });
  }

  loadElement(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.elementService.getElementById(id).subscribe({
      next: (element) => {
        this.element = element;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden des Elements:', err);
        this.error = 'Element nicht gefunden';
        this.isLoading = false;
      },
    });
  }
}
