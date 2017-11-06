import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../shared/base.component';

@Component({
  selector: 'app-person-special-status',
  templateUrl: './person-special-status.component.html',
  styleUrls: ['./person-special-status.component.scss']
})
export class PersonSpecialStatusComponent extends BaseComponent {

  constructor() {
    super();
  }

  ngOnInitHandler() {
  }

}
