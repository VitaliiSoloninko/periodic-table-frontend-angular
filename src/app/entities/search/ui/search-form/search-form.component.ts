import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  searchForm: FormGroup;

  @Input() isLoading = false;
  @Output() searchChange = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      name: [''],
    });

    this.searchForm.get('name')?.valueChanges.subscribe((value) => {
      this.searchChange.emit(value || '');
    });
  }
}
