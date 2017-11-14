import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';


import { TreeModel } from '../../../ng2-tree/src/tree.types';


@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnitComponent extends BaseKendoGridComponent {


  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    id: 1,
    settings: {
      cssClasses: {
        expanded: 'fa fa-caret-down',
        collapsed: 'fa fa-caret-right',
        empty: 'fa fa-caret-right disabled',
        leaf: 'fa'
      },
      templates: {
        node: '<i class="fa fa-folder-o"></i>',
        leaf: '<i class="fa fa-file-o"></i>'
      }
    },
    children: [
      {
        value: 'Object-oriented programming',
        icon: 'fa-calendar',
        settings: {
          leftMenu: true
        },
        children: [
          { value: 'Java', icon: 'fa-calendar' },
          { value: 'C++', icon: 'fa-calendar' },
          { value: 'C#', icon: 'fa-calendar' }
        ]
      },
      {
        value: 'Prototype-based programming',
        settings: {
          rightMenu: true,
          templates: {
            leftMenu: '<i class="fa fa-navicon"></i>'
          }
        },
        children: [
          { value: 'JavaScript' },
          { value: 'CoffeeScript' },
          { value: 'Lua' }
        ]
      }
    ]
  };

  constructor() {
    super(null);
  }

  ngOnInitHandler() {
    // this.refresh();
  }

}
