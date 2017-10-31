import { Component, OnInit , Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CountryModel } from '../../base/country/country.model';
import { CountryComboService } from './country-combo.service';

@Component({
  selector: 'app-country-combo',
  templateUrl: './country-combo.component.html',
  styleUrls: ['./country-combo.component.scss'],
  providers: [CountryComboService]
  // inputs: ['defaultValue']
})
export class CountryComboComponent implements OnInit {
  @Input()
  defaultValue: number;

  service: CountryComboService;
  public listItems: Observable<CountryModel[]> ;

  private view: Observable<CountryModel[]>;
  constructor(service: CountryComboService  ) {
    this.view = service;

    this.service = service;
   }

  ngOnInit() {
  //  this.service.get('getItems')
  //  .subscribe(x =>   this.listItems = x as CountryMode[]) ;

  }


}
