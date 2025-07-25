import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCartListComponent } from './element-cart-list.component';

describe('ElementCartListComponent', () => {
  let component: ElementCartListComponent;
  let fixture: ComponentFixture<ElementCartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementCartListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
