import {
  Component, OnInit, Input, Output,
  forwardRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { State } from '@progress/kendo-data-query';
import {
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent,
  SelectionEvent
} from '@progress/kendo-angular-grid';

import { SpecialStatusValueService } from '../../../services/special-status-value.service';
import { SpecialStatusModel, SpecialStatusValueModel } from '../../../model/special-status.model';

import { BaseComponent, BaseControlValueAccessor } from '../../shared/base.component';
import { OperationResultModel } from '../../../model/operation-result.model';

@Component({
  selector: 'app-special-status-value-upsert',
  templateUrl: './special-status-value-upsert.component.html',
  styleUrls: ['./special-status-value-upsert.component.scss'],
  providers: [SpecialStatusValueService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpecialStatusValueUpsertComponent),
      multi: true,
    }
  ]
})
export class SpecialStatusValueUpsertComponent extends BaseControlValueAccessor {
  _service: SpecialStatusValueService;

  @Input() dataItem: SpecialStatusValueModel;

  constructor(service: SpecialStatusValueService) {
    super();
    this._service = service;

  }

  ngOnInitHandler() {
  }


  public setDataItem(item: SpecialStatusValueModel) {

    this.propagateChange(this.dataItem);
    this.dataItem = item;
  }


  public onSaveDetail(form) {

    if (this.dataItem.specialStatusValueId > 0) {

    } else {

      this._service.add(this.dataItem)
        .subscribe(res => {
          // ddd
        });

    }
  }

  writeValue(obj: any): void {
    if (obj) {
      this.dataItem = obj;
    }
  }



}
