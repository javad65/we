import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ProvinceModel } from '../model/province.model';
import { BaseService } from './base.service';
import { BaseKendoGridService } from './base-kendo-grid.service';
import { UrlHelper } from '../infrastructure/url-helper';
import { SpecialStatusModel } from '../model/special-status.model';

@Injectable()
export class SpecialStatusService extends BaseService {

  constructor(http: Http) {
    super(http, UrlHelper.SpecialStatus_API);
  }

}



@Injectable()
export class SpecialStatusKendoGridService extends BaseKendoGridService {
  statusService: SpecialStatusService;

  constructor(http: Http, service: SpecialStatusService) {
    super(http, UrlHelper.SpecialStatus_API);

    this.statusService = service;
  }


}





@Injectable()
export class SpecialStatusComboService extends BehaviorSubject<SpecialStatusModel[]> {

 _baseService: BaseService;
    constructor(http: Http ) {
    super(null);
    this._baseService = new BaseService(http, UrlHelper.SpecialStatus_API + '/');
   }

   public read(): void {
          this._baseService.get('getItems')
              .subscribe(x => super.next(x));

   }

}
