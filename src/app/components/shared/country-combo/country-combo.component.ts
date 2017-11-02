import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { CountryModel } from '../../../model/country.model';
import { CountryComboService } from '../../../services/country-combo.service';
import { BaseComponent } from '../base.component';
@Component({
  selector: 'app-country-combo',
  templateUrl: './country-combo.component.html',
  styleUrls: ['./country-combo.component.scss'],
  providers:   [
    CountryComboService
  ]
  // inputs: ['defaultValue']
})
export class CountryComboComponent extends BaseComponent {
  _service: CountryComboService;

@Input() selectedCountryId: number ;
@Output() valueChanged= new  EventEmitter<number>();

 //   service: CountryComboService;
 // public listItems: Observable<CountryModel[]> ;

  private view: Observable<CountryModel[]>;
  constructor( service: CountryComboService ) {
    super();
    this._service = service;
    this.view = service;
    this._service .read();
   // this.service = service;
   }

   ngOnInitHandler() {
  //  this.service.get('getItems')
  //  .subscribe(x =>   this.listItems = x as CountryMode[]) ;

  }


  public onValueChange(value: any): void {
    this.valueChanged.emit(value);
  //  this.log("valueChange", value);
}

public onSelectionChange(value: any): void {
  //  this.log("selectionChange", value);
}

public onFilterChange(filter: any): void {
   // this.log("filterChange", filter);
   // this.data = this.source.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
}

public onOpen(): void {
 //   this.log("open");
}

public onClose(): void {
  //  this.log("close");
}

public onFocus(): void {
 //   this.log("focus");
}

public onBlur(): void {
  //  this.log("blur");
}


}
