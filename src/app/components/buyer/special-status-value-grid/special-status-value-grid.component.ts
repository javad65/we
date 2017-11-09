import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { State } from '@progress/kendo-data-query';
import {
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent,
  SelectionEvent
} from '@progress/kendo-angular-grid';

import { SpecialStatusValueKendoGridService } from '../../../services/special-status-value.service';
import { SpecialStatusModel, SpecialStatusValueModel } from '../../../model/special-status.model';

import { BaseComponent } from '../../shared/base.component';
import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';
import { OperationResultModel } from '../../../model/operation-result.model';

@Component({
  selector: 'app-special-status-value-grid',
  templateUrl: './special-status-value-grid.component.html',
  styleUrls: ['./special-status-value-grid.component.scss'],
  providers: [SpecialStatusValueKendoGridService]
})
export class SpecialStatusValueGridComponent extends BaseKendoGridComponent {
  _service: SpecialStatusValueKendoGridService;

  @Input() dataItem = <SpecialStatusValueModel>{};
  // model = <SpecialStatusValueModel>{};
  public opened = false;
  constructor(service: SpecialStatusValueKendoGridService) {
    super(service);
    this._service = service;

    this.state.filter = {
      logic: 'and',
      filters: [
        { field: 'name', operator: 'contains', value: '' }
      ]
    };
  }

  ngOnInitHandler() {
  }


  public setStatusItem(e: SelectionEvent) {

    this.dataItem.specialStatusId = 0;
    this.dataItem.descreption = '';
    this.dataItem.haveMoreDetial = false;
    this.dataItem.moreSpecialStatusLable = '';
    this.dataItem.name = '';
    this.dataItem.specialStatusValueId = 0;


    if (e.selectedRows.length > 0) {
      const m = <SpecialStatusModel>e.selectedRows[0].dataItem;
      this.dataItem.specialStatusId = m.specialStatusId;
      this.dataItem.specialStatusName = m.name;
      this._service.readId = m.specialStatusId;
      this.refresh();
    }
  }


  private refresh(): void {
    this.dataItem.descreption = '';
    // this.model.haveMoreDetial = false;
    // this.model.moreSpecialStatusLable = '';
    // this.model.specialStatusValueId = 0;
    this._service.readGrid();

  }

  public dataStateChange(state: DataStateChangeEvent): void {

    this._service.state = state;
    this.refresh();
  }


  public onSaveDetail(form) {

    this._service.save(this.dataItem, this.dataItem.specialStatusValueId < 1);

  }





}
