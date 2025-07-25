import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChemicalElement } from '../interfaces';
import { ELEMENT_SEARCH_URL, ELEMENTS_URL } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor(private http: HttpClient) {}

  getAllElements(): Observable<ChemicalElement[]> {
    return this.http.get<ChemicalElement[]>(ELEMENTS_URL);
  }

  getElementById(id: number): Observable<ChemicalElement> {
    return this.http.get<ChemicalElement>(`${ELEMENTS_URL}/${id}`);
  }

  searchByName(name: string): Observable<ChemicalElement[]> {
    return this.http.get<ChemicalElement[]>(
      `${ELEMENT_SEARCH_URL}/name?q=${name}`
    );
  }
}
