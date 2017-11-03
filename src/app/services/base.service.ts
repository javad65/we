import { Injectable, Inject, ReflectiveInjector, Injector } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';


import {NotifyManager } from '../infrastructure/notify-manager';
import { UrlHelper } from '../infrastructure/url-helper';
import { OperationResultModel } from '../model/operation-result.model';


@Injectable()
export class BaseService {
  notify: NotifyManager;
  // private BASE_URL = 'http://localhost/Startup/api/country?callback=JSONP_CALLBACK';
  // private BASE_URL = 'http://localhost/Startup/api/country?callback=JSON_CALLBACK';
  private BASE_URL= UrlHelper.BASE_URL;
  public API_URL: string;
  protected _http: Http;
  protected urlHelper: UrlHelper;

  constructor(http: Http, apiUrl: string) {
    this._http = http;
    this.API_URL = this.BASE_URL + apiUrl;

    this.notify = NotifyManager.createInstance();

  // const rr = ReflectiveInjector.resolveAndCreate([NotifierService]);
  // const ch = rr.resolveAndCreateChild([NotifierService]);
  // this.notifier = ch.get(NotifierService);


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



  public get(url?: string): Observable<any[]> {

    const httpUrl = `${this.API_URL}${url}`;
    return this._http
      .get(httpUrl)
      .map(response => response.json());
  }

  public post(model: any, url?: string): Observable<OperationResultModel> {
    // const body = JSON.stringify(model);
    const body = new URLSearchParams();
    this.appendParams(body, model);
    const httpUrl = `${this.API_URL}${url}`;

    const headers = new Headers(
      {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      });

    const options = new RequestOptions({
      headers: headers,
      // params : body
    });


    const that = this;
    return this._http.post(httpUrl, body, options)
      //  .map(this.extractData)
      .map(res => {
        const b = res.json();
        // const r = body.fields || {};
        that.operationHandling(b);
      })
      .catch(this.handleError);



    //     const requestoptions = new RequestOptions({
    //       method: RequestMethod.Post,
    //       url: httpUrl,
    //       headers: headers,
    //       body: body,
    //       params: body,
    //   });
    //   return this._http  .request(new Request(requestoptions))
    //   .map(this.extractData)
    //   .catch(this.handleError);
    // // }

  }


  public put(model: any, url?: string): Observable<OperationResultModel> {
    const body = JSON.stringify(model);
    //  const body = new URLSearchParams();
    // this.appendParams(body, model);
    const httpUrl = `${this.API_URL}${url}`;

    const headers = new Headers(
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json;',
        // 'Content-Type': 'application/x-www-form-urlencoded'
      });

    const options = new RequestOptions({ headers: headers });
    const that = this;
    return this._http.put(httpUrl, body, options)
      //  .map(this.extractData)
      .map(res => {
        const b = res.json();
        // const r = body.fields || {};
        that.operationHandling(b);
      })
      .catch(this.handleError);
  }


  public add(model: any): Observable<OperationResultModel> {
    // return this.post(model, 'Add');
    return this.post(model, '');
  }
  public edit(model: any): Observable<OperationResultModel> {
    return this.post(model, '/Edit' /*, 'Edit'*/);
  }
  public delete(id: number): Observable<OperationResultModel> {
    return this.post(id, '' /* 'Delete/' + id*/);
  }





  // protected extractData(res: Response, successFunc?: any, errorFunc?: any) {
  //   const body = res.json();
  //  // const r = body.fields || {};
  //   debugger;
  //   this.operationHandling(JSON.parse(body) as OperationResultModel , successFunc, errorFunc );
  // }

  protected handleError(error: Response): Observable<any> {
    console.error('observable error: ', error);
    return Observable.throw(error.statusText);
  }


  private appendParams(params: URLSearchParams, obj: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.append(key, obj[key]);
      }
    }


    //  body.set('ProvinceId', '15');
    //  body.set('ProvinceName','ییسبیس');
  }


  public operationHandling(operation: OperationResultModel, successFunc?: any, errorFunc?: any): void {

    if (operation.error) {
      this.notify.showError(operation.errorMessage);
     // alert(operation.errorMessage);
      if (errorFunc) {
        errorFunc();
      }
    }

    if (successFunc) {
      this.notify.showError();
      successFunc(operation.result);
    }

  }


}
