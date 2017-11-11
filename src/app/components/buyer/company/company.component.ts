import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';
import { CompanyService, CompanyKendoGridService } from '../../../services/company.service';
import { CompanyModel } from '../../../model/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [
    CompanyService,
    CompanyKendoGridService
  ]
})
export class CompanyComponent extends BaseKendoGridComponent {
  _router:  Router;

  constructor(router: Router,
    service: CompanyKendoGridService
  ) {
    super(service);
    this._router = router;
  }

  ngOnInitHandler() {
    this._service.readGrid();
  }


  public addItem() {
    this._router.navigate(['/company/detail']);

  }
  public editItem(id) {
    this._router.navigate(['/company/detail', id]);

  }

}
