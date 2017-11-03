import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ProvinceService, ProvinceComboService } from '../../../services/province.service';
import { ProvinceModel } from '../../../model/Province.model';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-province-combo',
  templateUrl: './province-combo.component.html',
  styleUrls: ['./province-combo.component.scss'],
  providers: [
    ProvinceComboService,
    {
      provide: NG_VALUE_ACCESSOR,
      useValue: (c) => { },
      // useExisting: forwardRef(() => ProvinceComboComponent),
      multi: true
    }
  ]
})
export class ProvinceComboComponent extends BaseComponent {
  // implements ControlValueAccessor {
  _service: ProvinceComboService;
  model = <ProvinceModel>{};

  @Input()
  selectedId: number;

  //  private _selectedId: number;
  // @Input()
  // set selectedId(value){
  //   debugger;
  //   this._selectedId = value ;
  // }



  @Output() valueChanged = new EventEmitter<number>();
  private view: Observable<ProvinceModel[]>;
  constructor(service: ProvinceComboService) {
    super();

    this.view = service;
    this._service = service;
  }

  // _value: number ;

  // writeValue(obj: any): void {
  //   debugger;
  //   this._value = obj;
  //   // throw new Error('Method not implemented.');
  // }
  // onChange = (_) => {};
  // onTouched = () => {};
  // registerOnChange(fn: any): void {
  //   debugger;
  //   this.onChange = fn;
  //  // throw new Error('Method not implemented.');
  // }
  // registerOnTouched(fn: any): void {
  //   debugger;
  //   this.onTouched = fn;
  //  // throw new Error('Method not implemented.');
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }


  ngOnInitHandler() {
  }



  public onCountryChange(value: any) {

    this._service.read(value);
  }


  public onValueChange(value: any): void {
    this.selectedId = value;
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



}
