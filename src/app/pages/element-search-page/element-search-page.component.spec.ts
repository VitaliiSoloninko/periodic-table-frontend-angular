import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSearchPageComponent } from './element-search-page.component';

describe('ElementSearchPageComponent', () => {
  let component: ElementSearchPageComponent;
  let fixture: ComponentFixture<ElementSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementSearchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
