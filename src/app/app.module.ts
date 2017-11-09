import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import localeFa from '@angular/common/locales/fa';


// third party
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

// Kendo
import { RTL } from '@progress/kendo-angular-l10n';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
/* Loading CLDR data */
import { load } from '@progress/kendo-angular-intl';
// load(
//     require('cldr-data/supplemental/likelySubtags.json'),
//     require('cldr-data/supplemental/currencyData.json'),
//     require('cldr-data/supplemental/weekData.json'),

//     require('cldr-data/main/es/numbers.json'),
//     require('cldr-data/main/es/currencies.json'),
//     require('cldr-data/main/es/dateFields.json'),
//     require('cldr-data/main/es/ca-gregorian.json'),
//     require('cldr-data/main/es/timeZoneNames.json')
// );


import { AppRoutingModule } from './app-routing.module';
// // modules
// import { UnitModule } from './components/unit/unit.module';
// import { BuyerModule } from './components/buyer/buyer.module';
// import { WbsModule } from './components/wbs/wbs.module';


// Components
import { AppComponent } from './app.component';
import { DeleteConfirmComponent } from './components/shared/delete-confirm/delete-confirm.component';
import { CountryComboComponent } from './components/shared/country-combo/country-combo.component';
import { CityComponent } from './components/base/city/city.component';
import { CityDetailComponent } from './components/base/city-detail/city-detail.component';
import { CountryComponent } from './components/base/country/country.component';
import { BuildingStructureTypeComponent } from './components/base/building-structure-type/building-structure-type.component';
import { CompanyTypeComponent } from './components/base/company-type/company-type.component';
import { ProvinceComponent } from './components/base/province/province.component';
import { ScaleComponent } from './components/base/scale/scale.component';

// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BaseService } from './services/base.service';
import { BaseKendoGridService } from './services/base-kendo-grid.service';
import { CountryService } from './services/country.service';
import { CountryComboService } from './services/country-combo.service';
import { ProvinceService } from './services/province.service';
import { CityService, CityKendoGridService } from './services/city.service';
import { ProvinceComboComponent } from './components/shared/province-combo/province-combo.component';


import { SpecialStatusComponent } from './components/buyer/special-status/special-status.component';
import { SpecialStatusValueComponent } from './components/buyer/special-status-value/special-status-value.component';
import { SpecialStatusUpsertomponent } from './components/buyer/special-status-value-upsert/special-status-value-upsert.component';
import { SpecialStatusValueGridComponent } from './components/buyer/special-status-value-grid/special-status-value-grid.component';
import { PersonComponent } from './components/buyer/person/person.component';
import { PersonDetailComponent } from './components/buyer/person-detail/person-detail.component';
import { PersonSpecialStatusComponent } from './components/buyer/person-special-status/person-special-status.component';

@NgModule({
  declarations: [
    // CountryComboComponent,
    AppComponent,

    DeleteConfirmComponent,
    // ,PageNotFoundComponent
    CountryComboComponent,
    CityComponent,
    CountryComponent,
    BuildingStructureTypeComponent,
    CompanyTypeComponent,
    ProvinceComponent,
    ScaleComponent,
    CityDetailComponent,
    ProvinceComboComponent,

    SpecialStatusComponent,
    SpecialStatusValueComponent,
    SpecialStatusValueGridComponent,
    PersonComponent,
    PersonDetailComponent,
    PersonSpecialStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    SnotifyModule,
    Ng4LoadingSpinnerModule,

    // Register the kendo modules
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DropDownsModule,
    DialogModule,
    RippleModule,
    DateInputsModule,
    CalendarModule,

    // BaseModule,
    // UnitModule,
    // BuyerModule,
    // WbsModule,

    AppRoutingModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
   // { provide: LOCALE_ID, useValue: 'fa' },
    SnotifyService,

    BaseService,
    BaseKendoGridService,

    CountryService,
    ProvinceService,

    { provide: RTL, useValue: true }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  static injector: Injector;

  constructor (injector: Injector) {
    AppModule.injector = injector;
  }
 }







