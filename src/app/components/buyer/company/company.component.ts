import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../../shared/base.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent extends BaseComponent {
  _router:  Router;

  constructor(router: Router) {
    super();
    this._router = router;
  }

  ngOnInitHandler() {
  }


  public addPerson() {
    this._router.navigate(['/company/detail']);

  }
}
