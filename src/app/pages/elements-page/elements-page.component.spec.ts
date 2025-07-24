import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsPageComponent } from './elements-page.component';

describe('ElementsPageComponent', () => {
  let component: ElementsPageComponent;
  let fixture: ComponentFixture<ElementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
