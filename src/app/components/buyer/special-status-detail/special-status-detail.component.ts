import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SpecialStatusService } from '../../../services/special-status.service';
import { SpecialStatusModel, SpecialStatusValueModel } from '../../../model/special-status.model';

import { BaseComponent } from '../../shared/base.component';
import { OperationResultModel } from '../../../model/operation-result.model';

@Component({
  selector: 'app-special-status-detail',
  templateUrl: './special-status-detail.component.html',
  styleUrls: ['./special-status-detail.component.scss']
})
export class SpecialStatusDetailComponent extends BaseComponent {
  _service: SpecialStatusService;
  @Input() specialStatusId?: number;

  model = <SpecialStatusModel>{};
  public opened = false;
  constructor(service: SpecialStatusService) {
    super();
    this._service = service;
  }

  ngOnInitHandler() {
  }




  public openDialog() {
    this.opened = true;
  }
  public openDialogById(id: number) {
    this.model.specialStatusId = id;
    const that = this;
    that._service.loading.show();
    this._service.find(id)
      .subscribe(res => {
        that._service.operationHandling(res, function (r) {
          that.model = r;
          that._service.loading.hide();
          that.opened = true;
        });
      });
  }


  public onClose() {
    this.opened = false;
  }

  public onOk() {
    if (this.model.specialStatusId > 0) {
      this._service.edit(this.model).subscribe(
        d => this.opened = false,
        err => console.log('error: ', err)
      );
    } else {
      this._service.add(this.model).subscribe(
        d => this.opened = false,
        err => console.log('error: ', err)
      );
    }
    // alert('Data deleted.');
  }

  public onSubmit(form) {
  

  }


  public onProvinceChange(value: any) {
  //  this.model.provinceId = <number>value;
  }


}
