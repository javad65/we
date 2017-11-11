import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { process, State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';

import { NotifyManager } from '../../infrastructure/notify-manager';

import { BaseKendoGridService } from '../../services/base-kendo-grid.service';

export abstract class BaseKendoGridComponent implements OnInit {
    protected notify: NotifyManager;

    protected gridDataResult: Observable<GridDataResult>;

    private buttonCount = 5;
    private info = true;
    private type: 'numeric' | 'input' = 'numeric';
    private pageSizes = true;
    private previousNext = true;
    protected state: State = {
        skip: 0,
        take: 10,
        filter: {
            logic: 'and',
            filters: []
        }
    };
    protected editedRowIndex: number;
    protected editedItem: any;
    protected _service: BaseKendoGridService;

    constructor(service: BaseKendoGridService) {
        this._service = service;
        this.gridDataResult =
            this.gridDataResult = service;
        // this.gridDataResult = process(s;
        this.notify = NotifyManager.createInstance();


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
        // this._service.save(dataItem, false);
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

    protected removeHandler(id) {
        this._service.remove(id);
    }


    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this._service.state = state;
        this._service.readGrid();
    }

}
