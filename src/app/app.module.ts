import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third party
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


// Kendo
import { RTL } from '@progress/kendo-angular-l10n';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { RippleModule } from '@progress/kendo-angular-ripple';

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
    ProvinceComboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    SnotifyModule,

    // Register the kendo modules
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DropDownsModule,
    DialogModule,
    RippleModule,

    // BaseModule,
    // UnitModule,
    // BuyerModule,
    // WbsModule,

    AppRoutingModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
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







