import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChemicalElement } from '../interfaces';
import { ELEMENTS_URL } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor(private http: HttpClient) {}
  private apiUrl =
    'https://periodic-table-backend-nestjs-postgresql-production.up.railway.app';

  getAllElements(): Observable<ChemicalElement[]> {
    return this.http.get<ChemicalElement[]>(ELEMENTS_URL);
  }

  getElementById(id: number): Observable<ChemicalElement> {
    return this.http.get<ChemicalElement>(`${ELEMENTS_URL}/${id}`);
  }

  searchByName(name: string): Observable<ChemicalElement[]> {
    return this.http.get<ChemicalElement[]>(
      `${this.apiUrl}/elements-search/name?q=${name}`
    );
  }

  searchBySymbol(symbol: string): Observable<ChemicalElement[]> {
    return this.http.get<ChemicalElement[]>(
      `${this.apiUrl}/elements-search/symbol?symbol=${symbol}`
    );
  }
}
