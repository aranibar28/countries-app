import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { ViewCountryComponent } from './countries/pages/view-country/view-country.component';

const routes: Routes = [
  {
    path: 'country',
    component: ByCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'capital',
    component: ByCapitalComponent,
  },
  {
    path: 'region',
    component: ByRegionComponent,
  },
  {
    path: 'country/:id',
    component: ViewCountryComponent,
  },
  {
    path: '**',
    redirectTo: 'country',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
