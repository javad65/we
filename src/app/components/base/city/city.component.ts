import { Component, OnInit } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';

import { CityModel } from '../../../model/city.model';
import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';
import { BaseKendoGridService } from '../../../services/base-kendo-grid.service';
import { CityService, CityKendoGridService } from '../../../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [CityService, CityKendoGridService],

})
export class CityComponent extends BaseKendoGridComponent {
  public listItems: Array<CityModel>;
  selectDataItem: CityModel;

  constructor(service: CityKendoGridService ) {
    super(service);

    this.selectDataItem = {
      cityId: 3,
      cityName: 'sfdsfdsfsd',
      provinceId: 1,
      provinceName: 'ddd',
      countryId: 1,
      countryName: 'dsfsdlkjf'
    };

    // this._countryService = service;
    // this.gridDataResult = service;
    // this._countryService.readGrid();


  }

  ngOnInitHandler() {
    this.refresh();
  }

  private refresh(): void {
    this._service.readGrid();
    // this._countryService.getCountries().subscribe((c: CountryModel[]) => {
    // this._countryService.fetch(this.state).subscribe((c: CountryModel[]) => {
    //   this.countries = c;
    //   this.loadItems();
    // });

  }





}
