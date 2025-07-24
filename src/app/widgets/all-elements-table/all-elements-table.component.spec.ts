import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllElementsTableComponent } from './all-elements-table.component';

describe('AllElementsTableComponent', () => {
  let component: AllElementsTableComponent;
  let fixture: ComponentFixture<AllElementsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllElementsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllElementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
