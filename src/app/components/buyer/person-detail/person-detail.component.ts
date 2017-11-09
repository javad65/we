import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../../shared/base.component';
import { PersonModel } from '../../../model/person.model';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  providers: [
    PersonService
  ]
})
export class PersonDetailComponent extends BaseComponent {
  _service: PersonService;
  _router: Router;
  model = <PersonModel>{};
  constructor(router: Router, service: PersonService) {
    super();
    this._router = router;
    this._service = service;

  }

  ngOnInitHandler() {
  }

  public saveAndNext(): void {
    const that = this;
    that._service.loading.show();
    if (this.model.personId > 0) {
      that._service.edit(this.model)
        .subscribe(res => {

          that._service.notify.showSuccess();
          that._router.navigate(['/person/detail', that.model.personId, 'special']);
        });
    } else {
      this._service.add(this.model)
        .subscribe(res => {
          that._service.operationHandling(res, (c) => {
            that._service.notify.showSuccess();
            that.model.personId = c;
            that._router.navigate(['/person/detail', c, 'special']);

          });
        });

    }
  }

  public return(): void {
    this._router.navigate(['/person']);
  }

}
