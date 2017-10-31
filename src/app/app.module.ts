import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
// modules
import { BaseModule } from './base/base.module';
import { UnitModule } from './unit/unit.module';
import { BuyerModule } from './buyer/buyer.module';
import { WbsModule } from './wbs/wbs.module';


// Components
import { AppComponent } from './app.component';
import { CountryComboComponent } from './components/country-combo/country-combo.component';

// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BaseService } from './shared/services/base.service';
import { BaseKendoGridService } from './shared/services/base-kendo-grid.service';

@NgModule({
  declarations: [
   // CountryComboComponent,
    AppComponent,
    // ,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Register the modules
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DropDownsModule,

    BaseModule,
    UnitModule,
    BuyerModule,
    WbsModule,

    AppRoutingModule
  ],
  providers: [
    BaseService,
    BaseKendoGridService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
