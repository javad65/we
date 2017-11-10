import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  datePickerConfig = {
    drops: 'up',
    format: 'jYYYY/jMM/jDD',
    //  format: 'LL', // 15 آبان 1396
    // format: 'YYYY/MM/DD',
    locale: 'fa',
    calendarSystem: 0,

    // hours12Format?: string;
    // hours24Format?: string;
    // maxTime?: Moment;
    // meridiemFormat?: string;
    // minTime?: Moment;
    // minutesFormat?: string;
    // minutesInterval?: number;
    // secondsFormat?: string;
    // secondsInterval?: number;
    // showSeconds?: boolean;
    // showTwentyFourHours?: boolean;
    // timeSeparator?: string;
    // calendarSystem?: ECalendarSystem;
    // isMonthDisabledCallback?: (date: Moment) => boolean;
    // allowMultiSelect?: boolean;
    // yearFormat?: string;
    // calendarSystem?: ECalendarSystem;
    // yearFormatter?: (month: Moment) => string;
    // format?: string;
    // isNavHeaderBtnClickable?: boolean;
    // monthBtnFormat?: string;
    // monthBtnFormatter?: (day: Moment) => string;
    // multipleYearsNavigateBy?: number;
    // showMultipleYearsNavigation?: boolean;
    // isDayDisabledCallback?: (date: Moment) => boolean;
    // isMonthDisabledCallback?: (date: Moment) => boolean;
    // weekDayFormat?: string;
    // showNearMonthDays?: boolean;
    // showWeekNumbers?: boolean;
    // firstDayOfWeek?: WeekDays;
    // calendarSystem?: ECalendarSystem;
    // format?: string;
    // allowMultiSelect?: boolean;
    // monthFormat?: string;
    // monthFormatter?: (month: Moment) => string;
    // enableMonthSelector?: boolean;
    // yearFormat?: string;
    // yearFormatter?: (year: Moment) => string;
    // dayBtnFormat?: string;
    // dayBtnFormatter?: (day: Moment) => string;
    // monthBtnFormat?: string;
    // monthBtnFormatter?: (day: Moment) => string;
    // multipleYearsNavigateBy?: number;
    // showMultipleYearsNavigation?: boolean;
    // closeOnSelect?: boolean;
    // closeOnSelectDelay?: number;
    // onOpenDelay?: number;
    // disableKeypress?: boolean;
    // appendTo?: string | HTMLElement;
    // inputElementContainer?: HTMLElement;
    // showGoToCurrent?: boolean;
    // drops?: TDrops;
    // opens?: TOpens;
    // hideInputContainer?: boolean;
  };

  _service: CompanyService;
  _router: Router;
  model = <CompanyModel>{};
  today = Date.now();
  todayJalali: string;
  constructor(router: Router, service: CompanyService) {
    super();
    this._router = router;
    this._service = service;

    // this.model.registrationDate = '';
    // this. todayJalali = moment().format('jYYYY/jM/jD');
    // this.model.registrationDate = moment('1395-11-22', 'jYYYY,jMM,jDD').format('jYYYY/jM/jD');

  }

  ngOnInitHandler() {
  }

  public saveAndNext(): void {
    const that = this;
    that._service.loading.show();
    if (this.model.companyId > 0) {
      that._service.edit(this.model)
        .subscribe(res => {

          that._service.notify.showSuccess();
          that._router.navigate(['/company/detail', that.model.companyId, 'special']);
        });
    } else {

      // this.model.registrationDate = '';
      debugger;
      this.model.registrationDate = this.model.registrationDate.format('YYYY/MM/DD');
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
