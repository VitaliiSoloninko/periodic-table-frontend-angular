import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChemicalElement } from '../../interfaces';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-all-elements-table',
  imports: [],
  templateUrl: './all-elements-table.component.html',
  styleUrl: './all-elements-table.component.css',
})
export class AllElementsTableComponent {
  elements: ChemicalElement[] = [];

  constructor(private router: Router, private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.getAllElements().subscribe((val) => {
      this.elements = val;
      console.log(this.elements);
    });
  }

  openElement(elementId: number): void {
    this.router.navigate(['/element', elementId]);
  }
}
