import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ProvinceService, ProvinceComboService } from '../../../services/province.service';
import { ProvinceModel } from '../../../model/Province.model';
import { BaseComponent, BaseControlValueAccessor } from '../base.component';

@Component({
  selector: 'app-province-combo-single',
  templateUrl: './province-combo-single.component.html',
  styleUrls: ['./province-combo-single.component.scss'],
  providers: [
    ProvinceComboService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProvinceComboSingleComponent),
      multi: true
    }
  ]
})
export class ProvinceComboSingleComponent extends BaseControlValueAccessor {

  _service: ProvinceComboService;
  model = <ProvinceModel>{};

  @Input()
  selectedId: number;

  @Output() valueChanged = new EventEmitter<number>();
  private view: Observable<ProvinceModel[]>;
  constructor(service: ProvinceComboService) {
    super();
    this.view = service;
    this._service = service;
    this._service.readAll();
  }

  ngOnInitHandler() {

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
