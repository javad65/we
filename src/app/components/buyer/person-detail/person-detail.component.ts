import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../../shared/base.component';
// import { PersonSpecialStatusComponent } from '../person-special-status/person-special-status.component';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent extends BaseComponent {
  router: Router;

  constructor(router: Router) {
    super();
    this.router = router;

  }

  ngOnInitHandler() {
  }

  public saveAndNext(): void {

    // this.router.navigate(['/person/detail', 1]);
    this.router.navigate(['/person/detail', 5, 'special']);
  }
}
