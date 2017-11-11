import { Component, OnInit } from '@angular/core';

import { State } from '@progress/kendo-data-query';
import {
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent,
  SelectionEvent
} from '@progress/kendo-angular-grid';

import { SpecialStatusModel } from '../../../model/special-status.model';
import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';
import { SpecialStatusService, SpecialStatusKendoGridService } from '../../../services/special-status.service';

@Component({
  selector: 'app-special-status',
  templateUrl: './special-status.component.html',
  styleUrls: ['./special-status.component.scss'],
  providers: [SpecialStatusService,
    SpecialStatusKendoGridService]
})
export class SpecialStatusComponent extends BaseKendoGridComponent {
  service: SpecialStatusKendoGridService;
  model = <SpecialStatusModel>{};
  statusTypeItems: Array<string> = [
    'اشخاص حقیقی و حقوقی',
    'اشخاص حقیقی',
    'اشخاص حقوقی'];
  statusTypeItem = this.statusTypeItems[0];

  constructor(service: SpecialStatusKendoGridService) {
    super(service);
    this.service = service;
  }

  ngOnInitHandler() {
    this.refresh();
  }

  private refresh(): void {
    this._service.readGrid();

  }

  public dataStateChange(state: DataStateChangeEvent): void {

    this._service.state = state;
    this.refresh();
  }

  public onSelectionChange(e: SelectionEvent) {
    if (e.selectedRows.length > 0) {
      const m = <SpecialStatusModel>e.selectedRows[0].dataItem;


    }
  }


  public statusSubmit(form) {

  }

  public editItem(dataItem: SpecialStatusModel) {

    this.model = dataItem;
    if (this.model.statusType === null) {
      this.statusTypeItem = this.statusTypeItems[0];
    } else if (this.model.statusType === true) {
      this.statusTypeItem = this.statusTypeItems[2];
    } else {
      this.statusTypeItem = this.statusTypeItems[1];
    }
  }

  public newItem() {
    this.statusTypeItem = this.statusTypeItems[0];
    this.model = <SpecialStatusModel>{};
    this._service.readGrid();
  }

  public onSaveStatus(form) {
    if (this.statusTypeItem === this.statusTypeItems[1]) {
      this.model.statusType = false;
    } else if (this.statusTypeItem === this.statusTypeItems[2]) {
      this.model.statusType = true;
    } else {
      this.model.statusType = null;
    }
    const that = this;
    if (this.model.specialStatusId > 0) {
      this.service.statusService.edit(this.model)
        .subscribe(res => {
          that.service.statusService.operationHandling(res, (r) => {
            that._service.notify.showSuccess();
            that._service.readGrid();
          });
        });

    } else {

      this.service.statusService.add(this.model)
        .subscribe(res => {
          that.service.statusService.operationHandling(res, (r) => {
            that._service.notify.showSuccess();
            that._service.readGrid();
          });
        });

    }
  }

}
