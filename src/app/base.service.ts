import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString, toDataSourceRequestString, DataSourceRequestState } from '@progress/kendo-data-query';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { State } from '@progress/kendo-data-query';




@Injectable()
export abstract class BaseService extends BehaviorSubject<GridDataResult> {
  // private BASE_URL = 'http://localhost/Startup/api/country?callback=JSONP_CALLBACK';
  // private BASE_URL = 'http://localhost/Startup/api/country?callback=JSON_CALLBACK';
  private BASE_URL = 'http://localhost/Startup/';
  protected API_URL: string;
  protected _http: Http;
  protected dataItems: any[] = [];
  public state: State = {
    skip: 0,
    take: 10,
  };

  protected CREATE_ACTION = 'create';
  protected UPDATE_ACTION = 'update';
  protected REMOVE_ACTION = 'destroy';

  constructor(http: Http, apiUrl: string) {
    super(null);

    this._http = http;
    this.API_URL = this.BASE_URL + apiUrl;
  }


  // public fetchOData(state: any): Observable<GridDataResult> {
  //   const queryStr = `${toODataString(state)}&$count=true`;

  //   return this._http
  //     .get(`${this.API_URL}?${queryStr}`)
  //     .map(response => response.json())
  //     .map(response => (<GridDataResult>{
  //       data: response.value,
  //       total: parseInt(response['@odata.count'], 10)
  //     }));
  // }

  // public fetch(state: any): Observable<any[]> {
  //   const queryStr = `${toDataSourceRequestString(state)}`;

  //   return this._http
  //     .get(`${this.API_URL}?${queryStr}`)
  //     .map(response => response.json());

  // }




  // private fetch(action: string = "", data?: any): Observable<any[]>  {
  //   return this.jsonp
  //       .get(`https://demos.telerik.com/kendo-ui/service/Products/${action}?callback=JSONP_CALLBACK${this.serializeModels(data)}`)
  //       .map(response => response.json());
  // }

  // private serializeModels(data?: any): string {
  //  return data ? `&models=${JSON.stringify([data])}` : '';
  // }





  public post(model: any, url?: string): Observable<boolean> {
    const body = JSON.stringify(model);
    const headers = new Headers(
      {
        'Content-Type': 'application/json; charset=utf-8'
        // 'Content-Type': 'application/x-www-form-urlencoded'
      });
    const options = new RequestOptions({ headers: headers });

    // if (this.postObservable === null) {
    return this._http
      .post(`${this.API_URL}${url}`, body, options)
      .share()
      .map(this.extractData)
      .catch(this.handleError);
    // }
  }




  private _readGrid(state: any, url?: string): Observable<GridDataResult> {
    const queryStr = `${toDataSourceRequestString(state)}`;
    url = url || 'read';
    return this._http
      .get(`${this.API_URL}${url}?${queryStr}`)
      .share()
      .map(response => response.json())
      .map(response => (<GridDataResult>{
        data: response.data,
        total: response.total
      }));
  }

  public readGrid( url?: string): void {
    this._readGrid(this.state, url )
      .subscribe(x => super.next(x));
  }



  public add(model: any): Observable<boolean> {
    return this.post(model, 'Add');
  }
  public edit(model: any): Observable<boolean> {
    return this.post(model, 'Edit');
  }
  public delete(id: number): Observable<boolean> {
    return this.post(id, 'Delete/' + id);
  }





  private extractData(res: Response) {
    const body = res.json();
    return body.fields || {};
  }

  private handleError(error: Response): Observable<any> {
    console.error('observable error: ', error);
    return Observable.throw(error.statusText);
  }


}
