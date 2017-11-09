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
