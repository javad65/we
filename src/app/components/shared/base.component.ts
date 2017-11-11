import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// import {Ng2Notify, Ng2NotifyService} from 'ng2-notify/notify';

// @Component {
//  // directives: [Ng2Notify],
//   providers: [Ng2NotifyService]
// }
export abstract class BaseComponent implements OnInit {
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

  abstract ngOnInitHandler();

  ngOnInit() {
    this.ngOnInitHandler();
  }

}


export abstract class BaseControlValueAccessor implements ControlValueAccessor {


  abstract writeValue(obj: any): void;

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

  propagateChange = (_: any) => { };


}
