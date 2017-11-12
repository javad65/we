import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SpecialStatusModel } from '../../../model/special-status.model';
import { SpecialStatusComboService } from '../../../services/special-status.service';
import { BaseComponent, BaseControlValueAccessor } from '../../shared/base.component';

@Component({
  selector: 'app-special-status-combo',
  templateUrl: './special-status-combo.component.html',
  styleUrls: ['./special-status-combo.component.scss'],
  providers: [
    SpecialStatusComboService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpecialStatusComboComponent),
      multi: true,
    }
  ]
  // inputs: ['defaultValue']
})
export class SpecialStatusComboComponent extends BaseControlValueAccessor {
  // extends BaseComponent {

  _service: SpecialStatusComboService;

  @Input() selectedId: number;
  @Output() valueChanged = new EventEmitter<number>();

  //   service: CountryComboService;
  // public listItems: Observable<CountryModel[]> ;

  private view: Observable<SpecialStatusModel[]>;
  constructor(service: SpecialStatusComboService) {
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

  writeValue(obj: any): void {
    if (obj) {
      this.selectedId = obj;
    }
  }


}
