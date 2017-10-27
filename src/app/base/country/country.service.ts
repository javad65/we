import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/Rx';   // Load all features
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Rx';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// import { BaseService } from 'app/base.service';
import { CountryModel } from './country.model';
import { BaseService } from '../../base.service';

@Injectable()
export class CountryService extends BaseService {

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
    const action = isNew ? this.CREATE_ACTION : this.UPDATE_ACTION;

    if (isNew) {
      this.add(data).subscribe(
        d => this.read(),
        err => console.log('error: ', err)
      );
    }   else {
       this.edit(data).subscribe(
        d => this.read(),
        err => console.log('error: ', err)
      );
    }
    // this.reset();
    // this.read();
    // this.fetch(action, data)
    //     .subscribe(() => this.read(), () => this.read());
  }

  public remove(data: CountryModel) {
  
    this.delete(data.countryId).subscribe(
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
