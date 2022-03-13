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

  constructor(private countryService: CountryService) {}

  search(word: string) {
    this.word = word;
    this.error = false;
    this.countryService.searchCountry(word).subscribe({
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
}
