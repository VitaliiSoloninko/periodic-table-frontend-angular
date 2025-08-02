import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

/**
 * Базовые импорты для большинства тестов
 */
export const commonTestImports = [
  HttpClientTestingModule,
  RouterTestingModule
];

/**
 * Mock для ActivatedRoute
 */
export const mockActivatedRoute = {
  provide: ActivatedRoute,
  useValue: {
    params: of({ id: '1' }),
    snapshot: { params: { id: '1' } },
    queryParams: of({}),
    fragment: of(''),
    data: of({})
  }
};

/**
 * Базовые провайдеры для тестов
 */
export const commonTestProviders = [
  mockActivatedRoute
];
