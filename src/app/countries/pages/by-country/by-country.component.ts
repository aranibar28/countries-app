import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  word: string = '';
  error: boolean = false;
  countries: Country[] = [];
  countriesSuggestion: Country[] = [];
  showSuggestion: boolean = false;

  constructor(private countryService: CountryService) {}

  search(termino: string) {
    this.word = termino;
    this.error = false;
    this.countryService.searchCountry(termino).subscribe({
      next: (data) => {
        this.countries = data;
        console.log(this.countries);
      },
      error: (err) => {
        this.error = true;
        this.countries = [];
      },
    });
  }

  suggestion(termino: string) {
    this.error = false;
    this.word = termino;
    this.showSuggestion = true;
    this.countryService.searchCountry(termino).subscribe({
      next: (countries) => {
        this.countriesSuggestion = countries.splice(0, 5);
      },
      error: (error) => (this.countriesSuggestion = []),
    });
  }

  searchSuggestions(termino: string) {
    this.search(termino);
  }
}
