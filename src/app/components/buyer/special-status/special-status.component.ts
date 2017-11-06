import { Component, OnInit } from '@angular/core';

import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';


import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';
import { SpecialStatusKendoGridService } from '../../../services/special-status.service';

@Component({
  selector: 'app-special-status',
  templateUrl: './special-status.component.html',
  styleUrls: ['./special-status.component.scss'],
  providers: [SpecialStatusKendoGridService]
})
export class SpecialStatusComponent extends BaseKendoGridComponent {

  constructor(service: SpecialStatusKendoGridService) {
    super(service);
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


}
