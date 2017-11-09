import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CountryModel } from '../../../model/country.model';
import { CountryComboService } from '../../../services/country.service';
import { BaseComponent, BaseControlValueAccessor } from '../base.component';

@Component({
  selector: 'app-country-combo',
  templateUrl: './country-combo.component.html',
  styleUrls: ['./country-combo.component.scss'],
  providers: [
    CountryComboService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryComboComponent),
      multi: true,
    }
  ]
  // inputs: ['defaultValue']
})
export class CountryComboComponent extends BaseControlValueAccessor {
  // extends BaseComponent {

  _service: CountryComboService;

  @Input() selectedCountryId: number;
  @Output() valueChanged = new EventEmitter<number>();

  //   service: CountryComboService;
  // public listItems: Observable<CountryModel[]> ;

  private view: Observable<CountryModel[]>;
  constructor(service: CountryComboService) {
    super();

    this._service = service;
    this.view = service;
    this._service.read();
    // this.service = service;
  }

  ngOnInitHandler() {
    //  this.service.get('getItems')
    //  .subscribe(x =>   this.listItems = x as CountryMode[]) ;

  }


  public onValueChange(value: any): void {
    this.propagateChange(value);
    this.valueChanged.emit(value);
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



  writeValue(obj: any): void {
    if (obj) {
      this.selectedCountryId = obj;
    }
  }


}
