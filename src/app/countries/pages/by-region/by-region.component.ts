import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
})
export class ByRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getClassCSS(region: string): string {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
  activeRegion(region: string) {
    if (region === this.regionActive) {
      return;
    }
    this.regionActive = region;
    this.countries = [];
    this.error = false;

    this.countryService.searchRegion(region).subscribe({
      next: (data) => {
        this.countries = data;
      },
      error: (err) => {
        this.error = true;
        this.countries = [];
      },
    });
  }
}
