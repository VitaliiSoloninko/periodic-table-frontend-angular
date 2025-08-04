import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { ChemicalElement } from '../../entities/element/model';
import { ElementService } from '../../services/element.service';

import { SearchFormComponent } from '../../entities/search/ui/search-form/search-form.component';
import { SearchResultsComponent } from '../../entities/search/ui/search-results/search-results.component';

@Component({
  selector: 'app-element-search',
  imports: [SearchFormComponent, SearchResultsComponent],
  templateUrl: './element-search.component.html',
  styleUrl: './element-search.component.css',
})
export class ElementSearchComponent {
  searchResults: ChemicalElement[] = [];
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(private elementService: ElementService) {}

  onSearchChange(searchTerm: string): void {
    if (!searchTerm || searchTerm.trim().length === 0) {
      this.searchResults = [];
      this.isLoading = false;
      return;
    }

    this.isLoading = true;

    this.elementService
      .searchByName(searchTerm.trim())
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe({
        next: (results) => {
          this.searchResults = results;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Search error:', err);
          this.searchResults = [];
          this.isLoading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
