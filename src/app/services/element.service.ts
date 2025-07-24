import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ELEMENTS_URL } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor(private http: HttpClient) {}

  getAllElements(): Observable<Element[]> {
    return this.http.get<Element[]>(ELEMENTS_URL);
  }
}
