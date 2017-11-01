import { Component, OnInit, Input, Output } from '@angular/core';

import { CityService } from '../../../services/city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {
  _service: CityService;
  @Input() cityId?: number;

  public opened = false;
  constructor(service: CityService) {
    this._service = service;
  }

  ngOnInit() {
  }

  public open() {
    this.opened = true;
  }
  public onDialogClose() {
    this.opened = false;
    alert('No data deleted.');
  }

  public onDeleteData() {
    alert('Data deleted.');
  }

}
