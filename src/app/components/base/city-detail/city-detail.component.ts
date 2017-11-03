import { Component, OnInit, Input, Output } from '@angular/core';

import { CityService } from '../../../services/city.service';
import { CityModel } from '../../../model/city.model';

import { BaseComponent } from '../../shared/base.component';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss'],
  providers: [CityService]
})
export class CityDetailComponent extends BaseComponent {
  _service: CityService;
  @Input() cityId?: number;

  countryId: number;
  model = <CityModel>{};

  public opened = false;
  constructor(service: CityService) {
    super();
    this._service = service;
  }

  ngOnInitHandler() {
  }

  public openDialog() {
    this.opened = true;
  }
  public onClose() {
    this.opened = false;
    // alert('No data deleted.');
  }

  public onOk() {
    if (this.model.cityId > 0) {
      this._service.edit(this.model).subscribe(
        d =>  this.opened = false,
        err => console.log('error: ', err)
      );
    } else {
      this._service.add(this.model).subscribe(
        d => this.opened = false ,
        err => console.log('error: ', err)
      );
    }
    // alert('Data deleted.');
  }

  public onSubmit(form) {
    debugger;
    // if ( this.dataItem.cityId > 0 ) {

    //   this._service.edit(this.dataItem )
    //   .subscribe((res) => {
    //     this.opened = false;
    //   });

    // }  else {

    //   this._service.add(this.dataItem )
    //   .subscribe((res) => {
    //     this.opened = false;
    //   });

    // }


  }


  public onProvinceChange(value: any) {
    this.model.provinceId = <number>value;
  }



}
