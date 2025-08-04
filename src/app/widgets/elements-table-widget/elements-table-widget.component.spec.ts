import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  commonTestImports,
  commonTestProviders,
} from '../../../testing/test-helpers';
import { ElementsTableWidgetComponent } from './elements-table-widget.component';

describe('ElementsTableWidgetComponent', () => {
  let component: ElementsTableWidgetComponent;
  let fixture: ComponentFixture<ElementsTableWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsTableWidgetComponent, ...commonTestImports],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementsTableWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
