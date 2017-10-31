import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { CountryModel } from '../../base/country/country.model';
import { BaseService } from '../../shared/services/base.service';

@Injectable()
export class CountryComboService extends BehaviorSubject<CountryModel[]> {

 _baseService: BaseService;
    constructor(http: Http ) {
    super(null);
    this._baseService = new BaseService(http, 'country/');
   }

   public read(): void {
          this._baseService.get('getItems')
              .subscribe(x => super.next(x));

   }

}
