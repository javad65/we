import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CountryModel } from '../model/country.model';
import { BaseService } from './base.service';
import { BaseKendoGridService } from './base-kendo-grid.service';

@Injectable()
export class CountryService extends BaseKendoGridService {

  constructor(http: Http) {
    super(http, 'country/');

  }



  public read() {
    // if (this.dataItems.length) {
    //     return super.next(this.dataItems);
    // }

    // this.fetch()
    //     .do(data => this.data = data)
    //     .subscribe(data => {
    //         super.next(data);
    //     });

    this.readGrid();
  }

  public save(data: CountryModel, isNew?: boolean) {
    super.save(data, isNew);
  }

  public remove(data: CountryModel) {

    this._baseService.delete(data.countryId).subscribe(
      d => this.read(),
      err => console.log('error: ', err)
    );

    // this.reset();
    // this.read();
    // this.fetch(this.REMOVE_ACTION, data)
    //     .subscribe(() => this.read(), () => this.read());
  }

  public resetItem(dataItem: CountryModel) {
    if (!dataItem) { return; }

    // find orignal data item
    const originalDataItem = this.dataItems.find(item => item.countryId === dataItem.countryId);

    // revert changes
    Object.assign(originalDataItem, dataItem);

    //  super.next(<GridDataResult> this.dataItems);

  }

  private reset() {
    this.dataItems = [];
  }

  // private fetch(action: string = "", data?: any): Observable<any[]>  {
  //   return this.jsonp
  //       .get(`https://demos.telerik.com/kendo-ui/service/Products/${action}?callback=JSONP_CALLBACK${this.serializeModels(data)}`)
  //       .map(response => response.json());
  // }

  // private serializeModels(data?: any): string {
  //  return data ? `&models=${JSON.stringify([data])}` : '';
  // }








}
