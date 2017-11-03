import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

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
