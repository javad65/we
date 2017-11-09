import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../../shared/base.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent extends BaseComponent {
  _router:  Router;

  constructor(router: Router) {
    super();
    this._router = router;
  }

  ngOnInitHandler() {
  }


  public addPerson() {
    this._router.navigate(['/person/detail']);

  }
}
