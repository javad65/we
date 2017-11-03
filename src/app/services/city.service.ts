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



@Injectable()
export class CityService extends BaseService {

  constructor(http: Http) {
    super(http, 'city');
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

