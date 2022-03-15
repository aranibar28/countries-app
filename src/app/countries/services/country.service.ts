import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country-interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,population,flags,cca2');
  }

  searchCountry(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${word}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCity(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${word}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryById(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchRegion(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${word}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
