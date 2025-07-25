import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { ChemicalElement } from '../../interfaces';
import { ElementService } from '../../services/element.service';

import { ElementCartListComponent } from '../../entities/element-cart-list/element-cart-list.component';

@Component({
  selector: 'app-element-search',
  imports: [ReactiveFormsModule, ElementCartListComponent],
  templateUrl: './element-search.component.html',
  styleUrl: './element-search.component.css',
})
export class ElementSearchComponent {
  searchForm: FormGroup;
  searchResults: ChemicalElement[] = [];
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private elementService: ElementService) {
    this.searchForm = this.fb.group({
      name: [''],
    });

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((value) => value && value.trim().length > 0),
        switchMap((searchTerm) => {
          this.isLoading = true;
          return this.elementService.searchByName(searchTerm.trim());
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (results) => {
          this.searchResults = results;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error:', err);
          this.searchResults = [];
          this.isLoading = false;
        },
      });

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(
        debounceTime(100),
        filter((value) => !value || value.trim().length === 0),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.searchResults = [];
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
