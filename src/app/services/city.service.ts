import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CityModel } from '../model/city.model';
import { BaseService } from './base.service';
import { BaseKendoGridService } from './base-kendo-grid.service';
import { OperationResultModel } from '../model/operation-result.model';


@Injectable()
export class CityService extends BaseService {

  constructor(http: Http) {
    super(http, 'city');
   }

   public find(id: number): Observable<OperationResultModel> {
    const that = this;
    // return  this.get();

    const httpUrl = `${this.API_URL}/find/${id}`;
    return this._http
      .get(httpUrl)
      .map(res => {
        const b = res.json();
        return b;
      });


   }

}




@Injectable()
export class CityKendoGridService extends BaseKendoGridService {
  _cityService: CityService;

  constructor(http: Http, cityService: CityService) {
    super(http, 'city');
    this._cityService =  cityService;
   }



}

