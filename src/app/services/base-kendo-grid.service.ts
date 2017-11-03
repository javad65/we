import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString, toDataSourceRequestString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { State } from '@progress/kendo-data-query';

import { BaseService } from './base.service';
import {NotifyManager } from '../infrastructure/notify-manager';

@Injectable()
export class BaseKendoGridService extends BehaviorSubject<GridDataResult> {
  notify: NotifyManager;
  protected _baseService: BaseService;
  protected _http: Http;

  protected dataItems: any[] = [];
  public state: State = {
    skip: 0,
    take: 10,
  };

  protected CREATE_ACTION = 'create';
  protected UPDATE_ACTION = 'update';
  protected REMOVE_ACTION = 'destroy';


  constructor(http: Http, apiUrl: string ) {
    super(null);
    this._http = http;
    this._baseService = new BaseService(http, apiUrl);
    this.notify = this._baseService.notify;

  }



  public readGrid(url?: string): void {
    this.notify.showError();
    this._readGrid(this.state, url)
      .subscribe(x => super.next(x));
  }


  public save(data: any, isNew?: boolean)  {
    const action = isNew ? this.CREATE_ACTION : this.UPDATE_ACTION;

    if (isNew) {

      this._baseService.add(data).subscribe(
        d => this.readGrid(),
        err => console.log('error: ', err)
      );

    } else {
       this._baseService.edit(data).subscribe(
        d => this.readGrid(),
        err => console.log('error: ', err)
      );
    }
    // this.reset();
    // this.read();
    // this.fetch(action, data)
    //     .subscribe(() => this.read(), () => this.read());
  }

  public remove(data: any) {

    this._baseService.delete(data.countryId).subscribe(
      d => this.readGrid(),
      err => console.log('error: ', err)
    );
  }


  private _readGrid(state: any, url?: string): Observable<GridDataResult> {
    const queryStr = `${toDataSourceRequestString(state)}`;
    //  url = url || 'read';
    // var httpUrl=`${this._baseService.API_URL}${url}?${queryStr}`;
  const  httpUrl = `${this._baseService.API_URL}?${queryStr}`;
    return this._http
      .get(httpUrl)
      .share()
      .map(response => response.json())
      .map(response => (<GridDataResult>{
        data: response.data,
        total: response.total
      }));
  }

}
