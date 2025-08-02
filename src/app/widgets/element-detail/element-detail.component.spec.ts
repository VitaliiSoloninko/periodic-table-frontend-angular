import { ComponentFixture, TestBed } from '@angular/core/testing';
import { commonTestImports, commonTestProviders } from '../../../testing/test-helpers';
import { ElementDetailComponent } from './element-detail.component';

describe('ElementDetailComponent', () => {
  let component: ElementDetailComponent;
  let fixture: ComponentFixture<ElementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementDetailComponent, ...commonTestImports],
      providers: [...commonTestProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
