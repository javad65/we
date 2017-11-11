import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as moment from 'jalali-moment';

import { BaseComponent } from '../../shared/base.component';
import { CompanyModel } from '../../../model/company.model';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
  providers: [
    CompanyService,
    // {provide: NgbCalendar, useClass: NgbCalendarPersian},
    // {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian}
  ]
})
export class CompanyDetailComponent extends BaseComponent {
  _activatedRoute: any;

  _service: CompanyService;
  _router: Router;
  model = <CompanyModel>{};
  registerDate: any;
  constructor(router: Router,
    activatedRoute: ActivatedRoute,
    service: CompanyService) {
    super();
    this._activatedRoute = activatedRoute;

    this._router = router;
    this._service = service;

    // this.model.registrationDate = '';
    // this. todayJalali = moment().format('jYYYY/jM/jD');
    // this.model.registrationDate = moment('1395-11-22', 'jYYYY,jMM,jDD').format('jYYYY/jM/jD');

  }

  ngOnInitHandler() {
    const that = this;
    this._activatedRoute.params.subscribe(p => {
      that.model.companyId = p['id'] as number;

      that._service.find(that.model.companyId).subscribe(r => {
        that._service.operationHandling(r, (m: CompanyModel) => {
          that.model = m;
          that.registerDate = moment(that.model.registrationDate);
        });
      });

    });
  }

  public saveAndNext(): void {
    const that = this;
    that._service.loading.show();
    this.model.registrationDate = this.registerDate.format('YYYY/MM/DD');
    if (this.model.companyId > 0) {
      that._service.edit(this.model)
        .subscribe(res => {

          that._service.notify.showSuccess();
          that._router.navigate(['/company/detail', that.model.companyId, 'special']);
        });
    } else {
      this._service.add(this.model)
        .subscribe(res => {
          that._service.operationHandling(res, (c) => {
            that._service.notify.showSuccess();
            that.model.companyId = c;
            that._router.navigate(['/company/detail', c, 'special']);

          });
        });

    }
  }

  public return(): void {
    this._router.navigate(['/company']);
  }

}
