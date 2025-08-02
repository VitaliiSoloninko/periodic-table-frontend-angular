import { ComponentFixture, TestBed } from '@angular/core/testing';
import { commonTestImports, commonTestProviders } from '../../../testing/test-helpers';
import { ElementsPageComponent } from './elements-page.component';

describe('ElementsPageComponent', () => {
  let component: ElementsPageComponent;
  let fixture: ComponentFixture<ElementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsPageComponent, ...commonTestImports],
      providers: [...commonTestProviders]
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
