import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


export abstract class BaseComponent implements OnInit {

  abstract ngOnInitHandler();

  ngOnInit() {
      this.ngOnInitHandler();
  }


  }
