import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CityService, CityComboService } from '../../../services/city.service';
import { ProvinceModel } from '../../../model/Province.model';
import { BaseComponent, BaseControlValueAccessor } from '../base.component';

@Component({
  selector: 'app-city-combo-single',
  templateUrl: './city-combo-single.component.html',
  styleUrls: ['./city-combo-single.component.scss'],
  providers: [
    CityComboService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CityComboSingleComponent),
      multi: true
    }
  ]
})
export class CityComboSingleComponent extends BaseControlValueAccessor {

  _service: CityComboService;
  model = <ProvinceModel>{};

  @Input()
  selectedId: number;

  @Output() valueChanged = new EventEmitter<number>();
  private view: Observable<ProvinceModel[]>;
  constructor(service: CityComboService) {
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
