import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';

import { BaseKendoGridService } from '../../services/base-kendo-grid.service';

export abstract class BaseKendoGridComponent implements OnInit {

    protected gridDataResult: Observable<GridDataResult>;
    protected state: State = {
        skip: 0,
        take: 10,
    };
    protected editedRowIndex: number;
    protected editedItem: any;
    protected _service: BaseKendoGridService;

    constructor(service: BaseKendoGridService) {
        this._service = service;

        this.gridDataResult = service;
    }

    abstract ngOnInitHandler();
     ngOnInit() {
         this.ngOnInitHandler();
     }

    protected addHandler({ sender }) {
        this.closeEditor(sender);

        sender.addRow({});
    }

    protected editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);

        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        this._service.save(dataItem, false);
        sender.editRow(rowIndex);
    }

    protected cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
    }

    protected closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        // this._service.resetItem(this.editedItem);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }

    protected saveHandler({ sender, rowIndex, dataItem, isNew }) {
        this._service.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }

    protected removeHandler({ dataItem }) {
        this._service.remove(dataItem);
    }

}
