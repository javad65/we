import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CompanyTypeModel } from '../../../model/company.model';
import { CompanyTypeComboService } from '../../../services/company-type.service';
import { BaseComponent, BaseControlValueAccessor } from '../../shared/base.component';

@Component({
  selector: 'app-company-type-combo',
  templateUrl: './company-type-combo.component.html',
  styleUrls: ['./company-type-combo.component.scss'],
  providers: [
    CompanyTypeComboService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CompanyTypeComboComponent),
      multi: true,
    }
  ]
})
export class CompanyTypeComboComponent extends BaseControlValueAccessor {
  // extends BaseComponent {

  _service: CompanyTypeComboService;

  @Input() selectedId: number;
  @Output() valueChanged = new EventEmitter<number>();

  //   service: CountryComboService;
  // public listItems: Observable<CountryModel[]> ;

  private view: Observable<CompanyTypeModel[]>;
  constructor(service: CompanyTypeComboService) {
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

  writeValue(obj: any): void {
    if (obj) {
      this.selectedId = obj;
    }
  }


}
