import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSearchComponent } from './element-search.component';

describe('ElementSearchComponent', () => {
  let component: ElementSearchComponent;
  let fixture: ComponentFixture<ElementSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
