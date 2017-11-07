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
  selector: 'app-special-status-detail',
  templateUrl: './special-status-detail.component.html',
  styleUrls: ['./special-status-detail.component.scss'],
  providers: [SpecialStatusValueKendoGridService]
})
export class SpecialStatusDetailComponent extends BaseKendoGridComponent {
  _service: SpecialStatusValueKendoGridService;
  @Input() specialStatusId?: number;

  model = <SpecialStatusValueModel>{};
  public opened = false;
  constructor(service: SpecialStatusValueKendoGridService) {
    super(service);
    this._service = service;
  }

  ngOnInitHandler() {
  }


  public setStatusId(id: number) {
    this.model.specialStatusId = id;
    this.refresh();
    console.log(id);
  }

  // public setStatusItem(item: SpecialStatusModel) {
  //   debugger;
  //   this.model.specialStatusId = item.specialStatusId;
  //   this.refresh();
  // }

  public setStatusItem(e: SelectionEvent) {

    this.model.specialStatusId = 0;
    this.model.descreption = '';
    this.model.haveMoreDetial = false;
    this.model.moreSpecialStatusLable = '';
    this.model.name = '';
    this.model.specialStatusValueId = 0;

    if (e.selectedRows.length > 0) {
      const m = <SpecialStatusModel>e.selectedRows[0].dataItem;
      this.model.specialStatusId = m.specialStatusId;
      this.model.specialStatusName = m.name;
      this.refresh();
    }
  }


  private refresh(): void {
    this.model.descreption = '';
    // this.model.haveMoreDetial = false;
    // this.model.moreSpecialStatusLable = '';
    // this.model.specialStatusValueId = 0;
    this._service.readGrid();

  }

  public dataStateChange(state: DataStateChangeEvent): void {

    this._service.state = state;
    this.refresh();
  }

  public onSubmit(form) {


  }




  // public openDialog() {
  //   this.opened = true;
  // }
  // public openDialogById(id: number) {
  //   this.model.specialStatusId = id;
  //   const that = this;
  //   that._service.loading.show();
  //   this._service.find(id)
  //     .subscribe(res => {
  //       that._service.operationHandling(res, function (r) {
  //         that.model = r;
  //         that._service.loading.hide();
  //         that.opened = true;
  //       });
  //     });
  // }


  // public onClose() {
  //   this.opened = false;
  // }

  // public onOk() {
  //   if (this.model.specialStatusId > 0) {
  //     this._service.edit(this.model).subscribe(
  //       d => this.opened = false,
  //       err => console.log('error: ', err)
  //     );
  //   } else {
  //     this._service.add(this.model).subscribe(
  //       d => this.opened = false,
  //       err => console.log('error: ', err)
  //     );
  //   }
  //   // alert('Data deleted.');
  // }



  // public onProvinceChange(value: any) {
  //   //  this.model.provinceId = <number>value;
  // }


}
