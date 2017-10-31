import { Component, OnInit } from '@angular/core';

import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';


import { ProvinceModel } from './province.model';
import { CountryModel } from '../country/country.model';

import { BaseKendoGridService } from '../../shared/services/base-kendo-grid.service';
import { ProvinceService } from './province.service';

import { CountryComboComponent} from '../../components/country-combo/country-combo.component';
import { BaseKendoGridComponent } from '../../shared/components/base-kendo-grid.component';


@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss'],
  providers: [ProvinceService]
})
export class ProvinceComponent extends BaseKendoGridComponent {
  public listItems: Array<CountryModel> ;

  constructor(service: ProvinceService) {
    super(service);

    // this._countryService = service;
    // this.gridDataResult = service;
    // this._countryService.readGrid();
  }

  ngOnInitHandler() {
    this.refresh();
    // .sub;


  }

  private refresh(): void {
    this._service.readGrid();
    // this._countryService.getCountries().subscribe((c: CountryModel[]) => {
    // this._countryService.fetch(this.state).subscribe((c: CountryModel[]) => {
    //   this.countries = c;
    //   this.loadItems();
    // });

  }


  public dataStateChange(state: DataStateChangeEvent): void {

    this._service.state = state;
    this.refresh();
  }


}
