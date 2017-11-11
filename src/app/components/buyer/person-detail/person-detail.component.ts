import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'jalali-moment';

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
  _activatedRoute: ActivatedRoute;
  _service: PersonService;
  _router: Router;
  model = <PersonModel>{};

  birthDate: any;
  constructor(router: Router,
    activatedRoute: ActivatedRoute,
    service: PersonService) {
    super();

    this._activatedRoute = activatedRoute;
    this._router = router;
    this._service = service;

  }

  ngOnInitHandler() {
    const that = this;
    this._activatedRoute.params.subscribe(p => {
      that.model.personId = p['id'] as number;

      that._service.find(that.model.personId).subscribe(r => {
        that._service.operationHandling(r, (m: PersonModel) => {
          that.model = m;
            that.birthDate = moment(that.model.birthDate);
        });
      });

    });
  }

  public saveAndNext(): void {
    const that = this;
    that._service.loading.show();
    this.model.birthDate = this.birthDate.format('YYYY/MM/DD');

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
