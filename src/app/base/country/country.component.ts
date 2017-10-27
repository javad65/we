import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent  } from '@progress/kendo-angular-grid';


import { CountryService } from './country.service';
import { CountryModel } from './country.model';
import { products } from './product';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],

})
export class CountryComponent implements OnInit {

  public gridDataResult: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 10,
  };
  private editedRowIndex: number;
  private editedItem: CountryModel;
  private _countryService: CountryService;


  constructor(service: CountryService) {
    this._countryService = service;

    this.gridDataResult = service;
    this._countryService.readGrid();
  }

  ngOnInit() {
    this. refresh();
     // .sub;
   }

  private refresh(): void {
    this._countryService.readGrid();

    // this._countryService.getCountries().subscribe((c: CountryModel[]) => {
    // this._countryService.fetch(this.state).subscribe((c: CountryModel[]) => {
    //   this.countries = c;
    //   this.loadItems();
    // });

  }





  public dataStateChange(state: DataStateChangeEvent): void {

    this._countryService.state = state;
    this. refresh();
  }

//   protected pageChange(event: PageChangeEvent): void {

//     this.state.skip = event.skip;
//     this. refresh();
// }



protected addHandler({sender}) {
  this.closeEditor(sender);

    sender.addRow(<CountryModel>{});
}

protected editHandler({sender, rowIndex, dataItem}) {
  this.closeEditor(sender);

  this.editedRowIndex = rowIndex;
  this.editedItem = Object.assign({}, dataItem);
  this._countryService.save(dataItem, false);

  sender.editRow(rowIndex);
}

protected cancelHandler({sender, rowIndex}) {
  this.closeEditor(sender, rowIndex);
}

private closeEditor(grid, rowIndex = this.editedRowIndex) {
  grid.closeRow(rowIndex);
  this._countryService.resetItem(this.editedItem);
  this.editedRowIndex = undefined;
  this.editedItem = undefined;
}

protected saveHandler({sender, rowIndex, dataItem, isNew}) {
  this._countryService.save(dataItem, isNew);

  sender.closeRow(rowIndex);

  this.editedRowIndex = undefined;
  this.editedItem = undefined;
}

protected removeHandler({dataItem}) {
  this._countryService.remove(dataItem);
}











}


