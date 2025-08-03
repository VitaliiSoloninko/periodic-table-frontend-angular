import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  commonTestImports,
  commonTestProviders,
} from '../../../../../testing/test-helpers';
import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFormComponent, ...commonTestImports],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
