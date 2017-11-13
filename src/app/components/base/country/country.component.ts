import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// kendo
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';


import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';

import { BaseKendoGridService } from '../../../services/base-kendo-grid.service';
import { CountryKendoGridService } from '../../../services/country.service';
import { CountryModel } from '../../../model/country.model';

import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [
    CountryKendoGridService
  ]

})
export class CountryComponent extends BaseKendoGridComponent {

  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          { value: 'Java' },
          { value: 'C++' },
          { value: 'C#' }
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          { value: 'JavaScript' },
          { value: 'CoffeeScript' },
          { value: 'Lua' }
        ]
      }
    ]
  };

  constructor(service: CountryKendoGridService) {
    super(service);

    // this._countryService = service;
    // this.gridDataResult = service;
    // this._countryService.readGrid();
  }

  // tslint:disable-next-line:use-life-cycle-interface
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




}


