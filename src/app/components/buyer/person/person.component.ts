import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// kendo
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';


import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';

import { BaseKendoGridService } from '../../../services/base-kendo-grid.service';
import { PersonService, PersonKendoGridService } from '../../../services/person.service';
import { PersonModel } from '../../../model/person.model';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [
    PersonService,
    PersonKendoGridService
  ]
})
export class PersonComponent extends BaseKendoGridComponent {

  _router: Router;

  constructor(router: Router,
    service: PersonKendoGridService
  ) {
    super(service);
    this._router = router;
  }

  ngOnInitHandler() {
    this._service.readGrid();

  }


  public addPerson() {
    this._router.navigate(['/person/detail']);

  }
  public editPerson(id) {
    this._router.navigate(['/person/detail', id]);

  }


}
