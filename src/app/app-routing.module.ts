// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CityComponent } from './components/base/city/city.component';
import { CountryComponent } from './components/base/country/country.component';
import { BuildingStructureTypeComponent } from './components/base/building-structure-type/building-structure-type.component';
import { CompanyTypeComponent } from './components/base/company-type/company-type.component';
import { ProvinceComponent } from './components/base/province/province.component';
import { ScaleComponent } from './components/base/scale/scale.component';

const routes: Routes = [
//   { path: 'home', component: WelcomeComponent },
//   { path: 'welcome', redirectTo: 'home', pathMatch: 'full' },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }

{ path: 'country', component: CountryComponent },
{ path: 'city', component: CityComponent },
{ path: 'buildingstructuretype', component: BuildingStructureTypeComponent },
{ path: 'province', component: ProvinceComponent },
{ path: 'scale', component: ScaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { useHash: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




