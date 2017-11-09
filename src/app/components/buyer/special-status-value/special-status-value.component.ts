import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { State } from '@progress/kendo-data-query';
import {
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent,
  SelectionEvent
} from '@progress/kendo-angular-grid';

import { SpecialStatusValueService } from '../../../services/special-status-value.service';
import { SpecialStatusModel, SpecialStatusValueModel } from '../../../model/special-status.model';

import { BaseComponent } from '../../shared/base.component';
import { OperationResultModel } from '../../../model/operation-result.model';

@Component({
  selector: 'app-special-status-value',
  templateUrl: './special-status-value.component.html',
  styleUrls: ['./special-status-value.component.scss'],
  providers: [SpecialStatusValueService]
})
export class SpecialStatusDetailComponent extends BaseComponent {
  _service: SpecialStatusValueService;
  @Input() specialStatusId?: number;

  model = <SpecialStatusValueModel>{};
  public opened = false;
  constructor(service: SpecialStatusValueService) {
    super();
    this._service = service;

  }

  ngOnInitHandler() {
  }


  public setDataItem(item: SpecialStatusValueModel) {

    this.model = item;
  }


  public onSaveDetail(form) {

    if (this.model.specialStatusValueId > 0) {

    } else {

      this._service.add(this.model)
        .subscribe(res => {
          // ddd
        });

    }
  }




}
