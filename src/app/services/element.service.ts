import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ELEMENTS_URL } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor(private http: HttpClient) {}

  getAllElements() {
    return this.http.get<any[]>(ELEMENTS_URL);
  }
}
