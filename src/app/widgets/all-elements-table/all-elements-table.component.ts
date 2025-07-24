import { Component } from '@angular/core';
import { ElementService } from '../../services/element.service';
import { ChemicalElement } from '../../interfaces';

@Component({
  selector: 'app-all-elements-table',
  imports: [],
  templateUrl: './all-elements-table.component.html',
  styleUrl: './all-elements-table.component.css',
})
export class AllElementsTableComponent {
  elements: ChemicalElement[] = [];

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.getAllElements().subscribe((val) => {
      this.elements = val;
      console.log(this.elements);
    });
  }
}
