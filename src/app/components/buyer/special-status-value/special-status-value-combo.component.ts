import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SpecialStatusValueModel } from '../../../model/special-status.model';
import { SpecialStatusValueComboService } from '../../../services/special-status-value.service';
import { BaseComponent, BaseControlValueAccessor } from '../../shared/base.component';

@Component({
  selector: 'app-special-status-value-combo',
  templateUrl: './special-status-value-combo.component.html',
  styleUrls: ['./special-status-value-combo.component.scss'],
  providers: [
    SpecialStatusValueComboService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpecialStatusValueComboComponent),
      multi: true,
    }
  ]
  // inputs: ['defaultValue']
})
export class SpecialStatusValueComboComponent extends BaseControlValueAccessor {
  // extends BaseComponent {

  _service: SpecialStatusValueComboService;

  @Input() selectedId: number;
  public statusId?: number;
  @Output() valueChanged = new EventEmitter<number>();

  //   service: CountryComboService;
  // public listItems: Observable<CountryModel[]> ;

  private view: Observable<SpecialStatusValueModel[]>;
  constructor(service: SpecialStatusValueComboService) {
    super();

    this._service = service;
    this.view = service;

    this.read();
    // this.service = service;
  }

  ngOnInitHandler() {
    //  this.service.get('getItems')
    //  .subscribe(x =>   this.listItems = x as CountryMode[]) ;

  }

  public read() {
    if (this.statusId != null && this.statusId > 0) {
      this._service.read(this.statusId);
    } else {
      this._service.readAll();
    }
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

  writeValue(obj: any): void {
    if (obj) {
      this.selectedId = obj;
    }
  }


}
