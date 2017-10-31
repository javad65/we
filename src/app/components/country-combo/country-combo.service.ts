import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { CountryModel } from '../../base/country/country.model';
import { BaseService } from '../../shared/services/base.service';

@Injectable()
export class CountryComboService extends BehaviorSubject<CountryModel[]> {


    constructor(http: Http, service: BaseService) {
      super(null);

       // super(http, 'country');
   }



}
