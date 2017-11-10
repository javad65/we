import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/base.component';
import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';
import { CompanyModel, CompanyStatusModel } from '../../../model/company.model';
import { CompanyService, CompanyKendoGridService } from '../../../services/company.service';

@Component({
  selector: 'app-company-special-status',
  templateUrl: './company-special-status.component.html',
  styleUrls: ['./company-special-status.component.scss'],
  providers: [
    CompanyService,
    CompanyKendoGridService
  ]
})
export class CompanySpecialStatusComponent extends BaseKendoGridComponent {
  _service: CompanyKendoGridService;
  _activatedRoute: ActivatedRoute;
  _router: Router;
  model = <CompanyStatusModel>{};
  constructor(activatedRoute: ActivatedRoute, service: CompanyKendoGridService) {
    super(service);
    this._activatedRoute = activatedRoute;
    this._service = service;
  }

  ngOnInitHandler() {
    const that = this;
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      that.model.companyId = params['id'] as number;
      that._service.readId = that.model.companyId;
      that._service.readGrid();
      that._service._companyService.find(that.model.companyId)
        .subscribe(r => {

          that._service._companyService.operationHandling(r, (c) => {
            const m = <CompanyModel>c;
            that.model.companyName = m.companyName;
          });

        });

    });
  }


}
