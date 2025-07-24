import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-all-elements-table',
  imports: [JsonPipe],
  templateUrl: './all-elements-table.component.html',
  styleUrl: './all-elements-table.component.css',
})
export class AllElementsTableComponent {
  elements: any[] = [];

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.getAllElements().subscribe((val) => {
      this.elements = val;
      console.log(this.elements);
    });
  }
}
