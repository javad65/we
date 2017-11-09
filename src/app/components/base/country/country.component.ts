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


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],

})
export class CountryComponent extends BaseKendoGridComponent {

  // public gridDataResult: Observable<GridDataResult>;
  // public state: State = {
  //   skip: 0,
  //   take: 10,
  // };
  // private editedRowIndex: number;
  // private editedItem: CountryModel;
  // private _countryService: CountryService;

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


  public dataStateChange(state: DataStateChangeEvent): void {

    this._service.state = state;
    this.refresh();
  }

  //   protected pageChange(event: PageChangeEvent): void {

  //     this.state.skip = event.skip;
  //     this. refresh();
  // }



  // protected addHandler({sender}) {
  //   this.closeEditor(sender);

  //     sender.addRow(<CountryModel>{});
  // }

  // protected editHandler({sender, rowIndex, dataItem}) {
  //   this.closeEditor(sender);

  //   this.editedRowIndex = rowIndex;
  //   this.editedItem = Object.assign({}, dataItem);
  //   this._countryService.save(dataItem, false);

  //   sender.editRow(rowIndex);
  // }

  // protected cancelHandler({sender, rowIndex}) {
  //   this.closeEditor(sender, rowIndex);
  // }

  // private closeEditor(grid, rowIndex = this.editedRowIndex) {
  //   grid.closeRow(rowIndex);
  //   this._countryService.resetItem(this.editedItem);
  //   this.editedRowIndex = undefined;
  //   this.editedItem = undefined;
  // }

  // protected saveHandler({sender, rowIndex, dataItem, isNew}) {
  //   this._countryService.save(dataItem, isNew);

  //   sender.closeRow(rowIndex);

  //   this.editedRowIndex = undefined;
  //   this.editedItem = undefined;
  // }

  // protected removeHandler({dataItem}) {
  //   this._countryService.remove(dataItem);
  // }











}


