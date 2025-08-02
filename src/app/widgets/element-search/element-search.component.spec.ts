import { ComponentFixture, TestBed } from '@angular/core/testing';
import { commonTestImports, commonTestProviders } from '../../../testing/test-helpers';
import { ElementSearchComponent } from './element-search.component';

describe('ElementSearchComponent', () => {
  let component: ElementSearchComponent;
  let fixture: ComponentFixture<ElementSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementSearchComponent, ...commonTestImports],
      providers: [...commonTestProviders]
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
