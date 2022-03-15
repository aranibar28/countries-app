import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  word: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(termino: string) {
    this.word = termino;
    this.error = false;
    this.countryService.searchCity(termino).subscribe({
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
