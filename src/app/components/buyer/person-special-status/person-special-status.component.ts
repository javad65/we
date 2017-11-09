import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/base.component';
import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';
import { PersonModel, PersonStatusModel } from '../../../model/person.model';
import { PersonService, PersonKendoGridService } from '../../../services/person.service';

@Component({
  selector: 'app-person-special-status',
  templateUrl: './person-special-status.component.html',
  styleUrls: ['./person-special-status.component.scss'],
  providers: [
    PersonService,
    PersonKendoGridService
  ]
})
export class PersonSpecialStatusComponent extends BaseKendoGridComponent {
  _service: PersonKendoGridService;
  _activatedRoute: ActivatedRoute;
  _router: Router;
  model = <PersonStatusModel>{};
  constructor(activatedRoute: ActivatedRoute, service: PersonKendoGridService) {
    super(service);
    this._activatedRoute = activatedRoute;
    this._service = service;
  }

  ngOnInitHandler() {
    const that = this;
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      that.model.personId = params['id'] as number;
      that._service.readId = that.model.personId;
      that._service.readGrid();
      that._service._personService.find(that.model.personId)
        .subscribe((r) => {
          const m = <PersonModel>r;
          that.model.personFirstName = m.firstName;
          that.model.personLastName = m.lastName;
          that.model.personAliasName = m.aliasName;
        });

    });
  }


}
