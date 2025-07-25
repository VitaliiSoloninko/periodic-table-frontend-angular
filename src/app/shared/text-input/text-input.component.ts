import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent {
  @Input() control!: AbstractControl;
  @Input() label!: string;
  @Input() type: 'text' | 'password' | 'email' | 'number' = 'text';
  @Input() placeholder?: string;
  @Input() disabled: boolean = false;

  get formControl() {
    return this.control as FormControl;
  }

  get inputPlaceholder(): string {
    return this.placeholder || this.label;
  }
}
